import { useState } from 'react';
import { SiGithub } from 'react-icons/si';
import { TbArrowRight, TbArrowUpRight, TbCheck, TbCopy, TbMail, TbMapPin } from 'react-icons/tb';
import { education, experience, highlights, profile, projects, stack } from '../data';
import { ProjectCarousel } from './Carousel';
import { Reveal, Rich, TechList } from './ui';

const asset = (p: string) => `${import.meta.env.BASE_URL}${p}`;

/** A page section: small label on the left, content on the right (stacks on mobile). */
function Section({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <section className="section" id={id} aria-labelledby={`${id}-label`}>
      <div className="wrap row">
        <h2 className="row-label" id={`${id}-label`}>
          {label}
        </h2>
        <div className="row-body">{children}</div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ Hero */
export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap">
        <Reveal className="hero-id">
          <img className="avatar" src={asset(profile.photo)} width={72} height={72} alt={`Portrait of ${profile.name}`} fetchPriority="high" />
          <div>
            <p className="hero-name">{profile.name}</p>
            <p className="hero-role">Software Developer at SpiceJet</p>
          </div>
        </Reveal>

        <Reveal as="h1" id="hero-title" delay={60}>
          Software developer building fast, reliable interfaces <span className="soft">for travel and data products.</span>
        </Reveal>

        <Reveal as="p" className="hero-intro" delay={120}>
          {profile.intro}
        </Reveal>

        <Reveal className="hero-cta" delay={180}>
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>
            <TbMail aria-hidden="true" /> Get in touch
          </a>
          <a className="btn btn-secondary" href={profile.github} target="_blank" rel="noopener noreferrer">
            <SiGithub aria-hidden="true" /> GitHub
          </a>
        </Reveal>

        <Reveal as="ul" className="hero-meta" delay={240}>
          <li>
            <TbMapPin aria-hidden="true" /> {profile.location}
          </li>
          <li>
            <SiGithub aria-hidden="true" />
            <a href={profile.github} target="_blank" rel="noopener noreferrer">
              github.com/{profile.githubHandle}
            </a>
          </li>
          {profile.linkedin && (
            <li>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
          )}
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- About */
export function About() {
  return (
    <Section id="about" label="About">
      <Reveal className="prose">
        {profile.background.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </Reveal>
      <Reveal as="dl" className="stats" delay={80}>
        {highlights.map((h) => (
          <div className="stat" key={h.label}>
            <dt>{h.label}</dt>
            <dd>
              {h.value}
              {h.suffix}
            </dd>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}

/* ------------------------------------------------------------- Experience */
export function Experience() {
  return (
    <Section id="experience" label="Experience">
      <ol className="jobs">
        {experience.map((job) => (
          <Reveal as="li" key={job.company} className="job">
            <div className="job-top">
              <div>
                <h3>
                  {job.company}
                  {job.current && <span className="tag-current">Current</span>}
                </h3>
                <p className="job-role">
                  {job.role} · {job.place}
                </p>
              </div>
              <p className="job-period">{job.period}</p>
            </div>
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
    </Section>
  );
}

/* ------------------------------------------------------------- Projects */
export function Projects() {
  return (
    <Section id="projects" label="Projects">
      <div className="projects">
        {projects.map((p) => (
          <Reveal as="article" key={p.title} className={`project${p.images?.length ? ' has-media' : ''}`}>
            {p.images?.length ? (
              <div className="project-media">
                <ProjectCarousel images={p.images} title={p.title} live={p.live || undefined} />
              </div>
            ) : null}
            <div className="project-body">
              <p className="project-tag">{p.tag}</p>
              <h3>
                {p.live ? (
                  <a href={p.live} target="_blank" rel="noopener noreferrer">
                    {p.title} <TbArrowUpRight aria-hidden="true" />
                  </a>
                ) : (
                  p.title
                )}
              </h3>
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
                    <a href={p.live} target="_blank" rel="noopener noreferrer">
                      Live demo <TbArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer">
                      Source code <TbArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
      <p className="more">
        More on{' '}
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          github.com/{profile.githubHandle} <TbArrowUpRight aria-hidden="true" />
        </a>
      </p>
    </Section>
  );
}

/* ------------------------------------------------------------- Skills */
export function Stack() {
  return (
    <Section id="skills" label="Skills">
      <div className="skills">
        {stack.map((group) => (
          <Reveal className="skill-row" key={group.title}>
            <h3>{group.title}</h3>
            <TechList items={group.items} label={group.title} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------------------------------------- Education */
export function Education() {
  return (
    <Section id="education" label="Education">
      {education.map((e) => (
        <Reveal className="job-top edu" key={e.school}>
          <div>
            <h3>{e.school}</h3>
            <p className="job-role">
              {e.detail} · {e.place}
            </p>
          </div>
          <p className="job-period">{e.period}</p>
        </Reveal>
      ))}
    </Section>
  );
}

/* ------------------------------------------------------------- Contact */
export function Contact() {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [copied, setCopied] = useState(false);

  // GitHub Pages has no server, so the form hands the message to the visitor's email app.
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
    <Section id="contact" label="Contact">
      <Reveal>
        <p className="contact-title">Let’s work together.</p>
        <p className="contact-lead">Hiring for a frontend or full-stack role, or building something interesting? I’d like to hear about it.</p>
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
        <div className="form-grid">
          <label>
            Name
            <input value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="Your name" />
          </label>
          <label className="span-2">
            Message
            <textarea required rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Tell me about the role or project" />
          </label>
        </div>
        <button className="btn btn-primary" type="submit">
          Send message <TbArrowRight aria-hidden="true" />
        </button>
      </Reveal>
    </Section>
  );
}

/* ------------------------------------------------------------- Footer */
export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <nav aria-label="Elsewhere" className="footer-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          {profile.linkedin && (
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          )}
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href="#top">Back to top ↑</a>
        </nav>
      </div>
    </footer>
  );
}
