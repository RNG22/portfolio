import { useState } from 'react';
import { SiGithub } from 'react-icons/si';
import { TbArrowRight, TbArrowUpRight, TbBriefcase, TbCheck, TbCopy, TbMail, TbMapPin, TbSchool } from 'react-icons/tb';
import { education, experience, highlights, profile, projects, stack } from '../data';
import { useCountUp } from '../hooks';
import { LogoMarquee, ProjectCarousel } from './Carousel';
import { Label, Reveal, Rich, TechChip, TechList } from './ui';

const asset = (p: string) => `${import.meta.env.BASE_URL}${p}`;

/* ------------------------------------------------------------------ Hero */
export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-bg" aria-hidden="true">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <Reveal as="p" className="hero-kicker">
            <span className="pulse" aria-hidden="true" /> Software Developer · {profile.location}
          </Reveal>
          <Reveal as="h1" id="hero-title" delay={60}>
            Hi, I am {profile.firstName}, a <span className="grad-text">{profile.role}</span>
          </Reveal>
          <Reveal as="p" className="hero-intro" delay={120}>
            {profile.intro}
          </Reveal>
          <Reveal className="hero-cta" delay={180}>
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>
              <TbMail aria-hidden="true" /> Email me
            </a>
            <a className="btn btn-outline" href={profile.github} target="_blank" rel="noopener noreferrer">
              <SiGithub aria-hidden="true" /> GitHub
            </a>
          </Reveal>
          <Reveal as="p" className="hero-links" delay={240}>
            <TbMapPin aria-hidden="true" /> {profile.location}
            <span className="sep" aria-hidden="true">/</span>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              github.com/{profile.githubHandle}
            </a>
            {profile.linkedin && (
              <>
                <span className="sep" aria-hidden="true">/</span>
                <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </>
            )}
          </Reveal>
        </div>

        <Reveal className="hero-photo" delay={100}>
          <div className="photo-frame">
            <img src={asset(profile.photo)} width={640} height={640} alt={`Portrait of ${profile.name}`} fetchPriority="high" />
          </div>
          <div className="now-card">
            <span className="now-dot" aria-hidden="true" />
            <div>
              <small>Currently</small>
              <strong>Software Developer at SpiceJet</strong>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Logo strip */
export function TechStrip() {
  const all = [...new Set(stack.flatMap((g) => g.items))];
  return (
    <section className="tech-strip" aria-label="Technologies">
      <LogoMarquee items={all} />
    </section>
  );
}

/* ------------------------------------------------------------- About */
export function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-label">
      <div className="wrap two-col">
        <Reveal>
          <Label id="about-label">My background</Label>
          <div className="about-text">
            {profile.background.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Reveal>
        <Reveal delay={80}>
          <Label>Focus areas</Label>
          <ul className="focus">
            <li>Reusable component libraries</li>
            <li>Frontend performance</li>
            <li>Booking &amp; checkout flows</li>
            <li>Data dashboards &amp; charts</li>
            <li>Auth &amp; protected routes</li>
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Impact band */
function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const c = useCountUp<HTMLSpanElement>(value);
  return (
    <div className="stat">
      <dt>{label}</dt>
      <dd>
        <span ref={c.ref}>{c.value}</span>
        {suffix}
      </dd>
    </div>
  );
}

export function Impact() {
  return (
    <section className="impact" aria-label="Impact at a glance">
      <div className="wrap">
        <dl className="stats">
          {highlights.map((h) => (
            <Stat key={h.label} {...h} />
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Stack */
export function Stack() {
  return (
    <section className="section stack" id="skills" aria-labelledby="skills-title">
      <div className="wrap">
        <Reveal className="section-head">
          <Label>Tech stack</Label>
          <h2 id="skills-title">Tools I use to ship</h2>
        </Reveal>
        <div className="stack-grid">
          {stack.map((group, i) => (
            <Reveal key={group.title} className="stack-card" delay={i * 70}>
              <h3>{group.title}</h3>
              <TechList items={group.items} label={group.title} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Experience */
export function Experience() {
  return (
    <section className="section experience" id="experience" aria-labelledby="exp-label">
      <div className="wrap two-col two-col-wide">
        <Reveal>
          <Label id="exp-label">Work experience</Label>
          <p className="side-note">
            <TbBriefcase aria-hidden="true" /> 4 years across aviation, data and e-learning products.
          </p>
        </Reveal>
        <ol className="jobs">
          {experience.map((job, i) => (
            <Reveal as="li" key={job.company} className="job" delay={i * 60} style={{ ['--job' as string]: job.accent }}>
              <div className="job-head">
                <h3>{job.role}</h3>
                {job.current && <span className="badge">Current</span>}
              </div>
              <p className="job-meta">
                <strong>{job.company}</strong> / {job.period} / {job.place}
              </p>
              <ul className="points">
                {job.points.map((p) => (
                  <li key={p}>
                    <Rich text={p} />
                  </li>
                ))}
              </ul>
              <TechList items={job.tech} size="sm" />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Projects */
/** Gradient card with the project's main logos, used until screenshots are added. Clickable when live. */
function ProjectArt({ project: p }: { project: (typeof projects)[number] }) {
  const logos = (
    <ul className="art-logos" aria-hidden="true">
      {p.tech.slice(0, 3).map((k) => (
        <TechChip key={k} id={k} />
      ))}
    </ul>
  );
  return p.live ? (
    <a className="project-art" href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.title} (live site)`}>
      {logos}
      <span className="live-badge">
        View live <TbArrowUpRight aria-hidden="true" />
      </span>
    </a>
  ) : (
    <div className="project-art" aria-hidden="true">{logos}</div>
  );
}

export function Projects() {
  return (
    <section className="section projects" id="projects" aria-labelledby="projects-title">
      <div className="wrap">
        <Reveal className="section-head">
          <Label>Projects</Label>
          <h2 id="projects-title">Things I’ve built</h2>
        </Reveal>
        <div className="project-grid">
          {projects.map((p, i) => (
            <Reveal
              as="article"
              key={p.title}
              className={`project${i === 0 ? ' project-feature' : ''}`}
              delay={i * 70}
              style={{ ['--g1' as string]: p.gradient[0], ['--g2' as string]: p.gradient[1] }}
            >
              {p.images?.length ? (
                <div className="project-media">
                  <ProjectCarousel images={p.images} title={p.title} live={p.live || undefined} />
                </div>
              ) : (
                <ProjectArt project={p} />
              )}
              <div className="project-body">
                <p className="project-tag">{p.tag}</p>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                {p.points && (
                  <ul className="ticks">
                    {p.points.map((pt) => (
                      <li key={pt}>
                        <TbCheck aria-hidden="true" /> {pt}
                      </li>
                    ))}
                  </ul>
                )}
                <TechList items={p.tech} size="sm" />
                {(p.live || p.link) && (
                  <div className="project-links">
                    {p.live && (
                      <a className="project-link" href={p.live} target="_blank" rel="noopener noreferrer">
                        Live demo <TbArrowUpRight aria-hidden="true" />
                      </a>
                    )}
                    {p.link && (
                      <a className="project-link" href={p.link} target="_blank" rel="noopener noreferrer">
                        View code <TbArrowUpRight aria-hidden="true" />
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal as="p" className="more">
          More of my work is on{' '}
          <a href={profile.github} target="_blank" rel="noopener noreferrer">
            github.com/{profile.githubHandle} <TbArrowUpRight aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Education */
export function Education() {
  return (
    <section className="section education" aria-labelledby="edu-label">
      <div className="wrap two-col two-col-wide">
        <Reveal>
          <Label id="edu-label">Education</Label>
        </Reveal>
        <div>
          {education.map((e) => (
            <Reveal key={e.school} className="edu">
              <span className="edu-icon" aria-hidden="true">
                <TbSchool />
              </span>
              <div>
                <h3>{e.school}</h3>
                <p>
                  {e.detail} / {e.period} / {e.place}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Contact */
export function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  // GitHub Pages has no server, so the form opens the visitor's email app with everything filled in.
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Hello from ${name.trim() || 'your portfolio'}`;
    const body = `${message.trim()}\n\n— ${name.trim()}`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact-grid">
        <Reveal>
          <Label>Contact</Label>
          <h2 id="contact-title">Let’s talk</h2>
          <p className="contact-lead">
            Hiring for a frontend or full-stack role, or building something interesting? I’d love to hear about it.
          </p>
          <div className="email-row">
            <a className="email" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <button type="button" className="icon-btn" onClick={copy} aria-label="Copy email address">
              {copied ? <TbCheck /> : <TbCopy />}
            </button>
            <span className="sr-only" role="status">
              {copied ? 'Email copied' : ''}
            </span>
          </div>
        </Reveal>

        <Reveal as="form" className="form" onSubmit={submit} delay={80}>
          <label>
            Name
            <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="Your name" />
          </label>
          <label>
            Message*
            <textarea
              required
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell me about the role or project"
            />
          </label>
          <button className="btn btn-primary" type="submit">
            Send message <TbArrowRight aria-hidden="true" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Footer */
export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="muted">Software developer · {profile.location}</p>
        </div>
        <div>
          <Label>Socials</Label>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          )}
        </div>
        <div>
          <Label>Contacts</Label>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
