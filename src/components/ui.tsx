import type { CSSProperties, ElementType, ReactNode } from 'react';
import { TECH, type TechKey } from '../tech';
import { useReveal } from '../hooks';

/** Fades and lifts its content in when scrolled into view. */
export function Reveal({
  as: Tag = 'div',
  className = '',
  delay = 0,
  style,
  children,
  ...rest
}: {
  as?: ElementType;
  className?: string;
  delay?: number;
  style?: CSSProperties;
  children: ReactNode;
  [k: string]: unknown;
}) {
  const r = useReveal<HTMLElement>();
  return (
    <Tag {...rest} ref={r.ref} className={`${r.className} ${className}`.trim()} style={{ ...style, transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}

/** A technology with its logo in brand colour. */
export function TechChip({ id, size = 'md' }: { id: TechKey; size?: 'sm' | 'md' }) {
  const { name, Icon, color } = TECH[id];
  const style = (color ? { '--brand': color } : {}) as CSSProperties;
  return (
    <li className={`chip chip-${size}${color ? '' : ' chip-mono'}`} style={style}>
      <Icon aria-hidden="true" className="chip-icon" />
      <span>{name}</span>
    </li>
  );
}

export function TechList({ items, size, label = 'Technologies' }: { items: TechKey[]; size?: 'sm' | 'md'; label?: string }) {
  return (
    <ul className="chips" aria-label={label}>
      {items.map((k) => (
        <TechChip key={k} id={k} size={size} />
      ))}
    </ul>
  );
}

/** Renders **bold** segments from the data file. */
export function Rich({ text }: { text: string }) {
  return (
    <>
      {text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : <span key={i}>{part}</span>,
      )}
    </>
  );
}
