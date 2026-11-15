import { useCallback, useEffect, useRef, useState } from 'react';
import { TbArrowUpRight, TbChevronLeft, TbChevronRight } from 'react-icons/tb';

const reducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
const asset = (p: string) => `${import.meta.env.BASE_URL}${p}`;

/**
 * Screenshot carousel for a project.
 * - Autoplays only while on screen, pauses on hover/focus, never autoplays with reduced motion
 * - Arrows, dots, keyboard (←/→) and touch swipe
 * - When `live` is set, clicking a slide opens the deployed project in a new tab
 */
export function ProjectCarousel({
  images,
  title,
  live,
  interval = 4500,
}: {
  images: { src: string; alt: string }[];
  title: string;
  live?: string;
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const touchX = useRef<number | null>(null);
  const count = images.length;

  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);

  useEffect(() => {
    const el = root.current;
    if (!el || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (count < 2 || paused || !visible || reducedMotion()) return;
    const t = window.setTimeout(() => go(index + 1), interval);
    return () => window.clearTimeout(t);
  }, [index, paused, visible, count, interval, go]);

  const slide = (img: { src: string; alt: string }, i: number) => {
    const picture = <img src={asset(img.src)} alt={img.alt} loading={i === 0 ? 'eager' : 'lazy'} draggable={false} />;
    return (
      <li key={img.src} className="slide" aria-hidden={i !== index} role="group" aria-roledescription="slide" aria-label={`${i + 1} of ${count}`}>
        {live ? (
          <a href={live} target="_blank" rel="noopener noreferrer" tabIndex={i === index ? 0 : -1} aria-label={`Open ${title} (live site)`}>
            {picture}
            <span className="live-badge">
              View live <TbArrowUpRight aria-hidden="true" />
            </span>
          </a>
        ) : (
          picture
        )}
      </li>
    );
  };

  return (
    <div
      ref={root}
      className="carousel"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${title} screenshots`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onKeyDown={(e) => {
        if (e.key === 'ArrowRight') go(index + 1);
        if (e.key === 'ArrowLeft') go(index - 1);
      }}
      onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchX.current === null) return;
        const dx = e.changedTouches[0].clientX - touchX.current;
        if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
        touchX.current = null;
      }}
    >
      <div className="browser-bar" aria-hidden="true">
        <span /><span /><span />
      </div>
      <ul className="track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {images.map(slide)}
      </ul>

      {count > 1 && (
        <>
          <button type="button" className="nav-arrow prev" onClick={() => go(index - 1)} aria-label="Previous screenshot">
            <TbChevronLeft />
          </button>
          <button type="button" className="nav-arrow next" onClick={() => go(index + 1)} aria-label="Next screenshot">
            <TbChevronRight />
          </button>
          <div className="dots">
            {images.map((img, i) => (
              <button
                key={img.src}
                type="button"
                className={i === index ? 'dot active' : 'dot'}
                aria-label={`Show screenshot ${i + 1}`}
                aria-current={i === index ? 'true' : undefined}
                onClick={() => go(i)}
              />
            ))}
          </div>
        </>
      )}
      <p className="sr-only" aria-live="polite">
        {images[index].alt}
      </p>
    </div>
  );
}
