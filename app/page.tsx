import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Braces,
  Check,
  Code2,
  Database,
  Layers3,
  LockKeyhole,
  Mail,
  Network,
  ServerCog,
  ShieldCheck,
  Sparkles,
  TestTube2,
} from "lucide-react";
import { CopyEmail } from "@/components/copy-email";
import { Reveal } from "@/components/reveal";

const githubUrl = "https://github.com/gregdzyg";
const linkedinUrl = "https://www.linkedin.com/in/gregdzyg";
const email = "gregdzyg@gmail.com";

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.23c-3.23.7-3.91-1.37-3.91-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.72 1.26 3.39.96.1-.75.4-1.26.74-1.55-2.58-.3-5.29-1.29-5.29-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.51-1.46.11-3.05 0 0 .97-.31 3.16 1.18A10.94 10.94 0 0 1 12 6.11c.98 0 1.95.13 2.87.39 2.19-1.49 3.15-1.18 3.15-1.18.63 1.59.23 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.72 5.39-5.3 5.68.42.36.79 1.07.79 2.16v3.25c0 .31.21.67.8.55A11.5 11.5 0 0 0 12 .7Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5.37 7.34H1.02V21.3h4.35V7.34ZM3.2.7A2.52 2.52 0 1 0 3.2 5.74 2.52 2.52 0 0 0 3.2.7ZM22.98 13.3c0-4.2-2.24-6.15-5.23-6.15-2.41 0-3.49 1.33-4.09 2.26V7.34H9.31V21.3h4.35v-6.91c0-1.82.35-3.59 2.61-3.59 2.23 0 2.26 2.09 2.26 3.71v6.79h4.35l.1-8Z" />
    </svg>
  );
}

const stackGroups = [
  {
    label: "Backend",
    items: ["Java", "Spring Boot", "Spring Security", "REST APIs"],
  },
  {
    label: "Data",
    items: ["PostgreSQL", "Flyway", "JPA", "SQL Server"],
  },
  {
    label: "Quality & delivery",
    items: ["JUnit", "Testcontainers", "Docker", "GitHub Actions"],
  },
  {
    label: "Frontend & breadth",
    items: ["React", "TypeScript", "React Native", ".NET 8"],
  },
];

function ExternalLink({
  href,
  children,
  className = "text-link",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
      <ArrowUpRight aria-hidden="true" />
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <div className="ambient" aria-hidden="true">
        <div className="ambient-orb ambient-orb-one" />
        <div className="ambient-orb ambient-orb-two" />
        <div className="ambient-grid" />
        <div className="ambient-noise" />
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Grzegorz Dżyg — home">
          <span className="brand-mark">GD</span>
          <span className="brand-name">Grzegorz Dżyg</span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#approach">Approach</a>
          <a href="#about">About</a>
          <a className="nav-cta" href="#contact">
            Let&apos;s talk
          </a>
        </nav>
      </header>

      <div id="main-content">
        <section className="hero section-shell" id="top">
          <div className="hero-copy">
            <Reveal>
              <div className="availability-pill">
                <span className="availability-dot" />
                Open to Junior Java / Spring opportunities
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <p className="hero-kicker">Java &amp; Spring Developer</p>
              <h1>
                I turn real requirements into
                <span className="gradient-text"> reliable systems.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="hero-lead">
                I&apos;m Grzegorz. I build backend applications around the parts
                that matter after the first demo: business rules, consistent
                data, security, testing, and delivery.
              </p>
            </Reveal>

            <Reveal className="hero-actions" delay={0.24}>
              <a className="button button-primary" href="#work">
                Explore my work
                <ArrowDown aria-hidden="true" />
              </a>
              <ExternalLink href={githubUrl} className="button button-secondary">
                <GitHubIcon />
                GitHub
              </ExternalLink>
            </Reveal>

            <Reveal className="hero-meta" delay={0.3}>
              <span>Based in Poland</span>
              <span className="meta-separator" />
              <span>Open to remote &amp; hybrid</span>
            </Reveal>
          </div>

          <Reveal className="hero-visual-wrap" delay={0.12} distance={12}>
            <div className="hero-visual">
              <div className="portrait-glow" aria-hidden="true" />
              <div className="portrait-frame">
                <Image
                  className="portrait-image"
                  src="/grzegorz-dzyg.jpg"
                  alt="Portrait of Grzegorz Dżyg"
                  width={1000}
                  height={1000}
                  preload
                  sizes="(max-width: 760px) 82vw, 42vw"
                />
                <div className="portrait-shade" aria-hidden="true" />
                <div className="portrait-caption">
                  <span className="portrait-caption-label">Currently focused on</span>
                  <span>Java · Spring Boot · PostgreSQL</span>
                </div>
              </div>

              <div className="floating-card floating-card-top">
                <div className="floating-icon">
                  <ShieldCheck aria-hidden="true" />
                </div>
                <div>
                  <span>Production mindset</span>
                  <strong>Beyond the happy path</strong>
                </div>
              </div>

              <div className="floating-card floating-card-bottom">
                <span className="code-prompt">$</span>
                <code>ship --with-confidence</code>
                <Check aria-hidden="true" />
              </div>
            </div>
          </Reveal>
        </section>

        <section className="work-section section-shell" id="work">
          <Reveal className="section-heading">
            <div>
              <p className="section-eyebrow">Selected work</p>
              <h2>Systems, not just screens.</h2>
            </div>
            <p>
              Four projects that show the progression from focused learning to
              a production application shaped by a real user.
            </p>
          </Reveal>

          <div className="projects-grid">
            <Reveal className="project-card project-featured">
              <div className="project-copy">
                <div className="project-topline">
                  <span className="project-number">01</span>
                  <span className="status-chip status-live">
                    <span /> Production
                  </span>
                </div>
                <p className="project-type">Flagship full-stack project</p>
                <h3>AtelierByPT</h3>
                <p className="project-description">
                  A scheduling and salon management platform built for a working
                  stylist. It replaces paper planning with one availability
                  engine shared across booking validation, the admin calendar,
                  and public appointment suggestions.
                </p>

                <ul className="project-highlights" aria-label="Project highlights">
                  <li>
                    <Check aria-hidden="true" /> Accepted production release
                  </li>
                  <li>
                    <Check aria-hidden="true" /> Real business rules and user feedback
                  </li>
                  <li>
                    <Check aria-hidden="true" /> Encrypted backups and tested recovery
                  </li>
                </ul>

                <div className="tech-list" aria-label="Technologies">
                  <span>Java 21</span>
                  <span>Spring Boot</span>
                  <span>PostgreSQL</span>
                  <span>React</span>
                </div>

                <div className="project-links">
                  <ExternalLink href="https://atelierbypt-frontend-beta.onrender.com">
                    Live product
                  </ExternalLink>
                  <ExternalLink href="https://github.com/gregdzyg/Lash-Brow-Atelier">
                    Source
                  </ExternalLink>
                </div>
              </div>

              <div className="calendar-visual" aria-label="Stylized application preview">
                <div className="browser-bar">
                  <span />
                  <span />
                  <span />
                  <div className="browser-address">atelierbypt.app / calendar</div>
                </div>
                <div className="calendar-layout">
                  <aside className="calendar-sidebar">
                    <div className="mini-logo">A</div>
                    <div className="sidebar-line active" />
                    <div className="sidebar-line" />
                    <div className="sidebar-line short" />
                    <div className="sidebar-spacer" />
                    <div className="sidebar-avatar" />
                  </aside>
                  <div className="calendar-main">
                    <div className="calendar-heading-row">
                      <div>
                        <span className="ui-label">Schedule</span>
                        <strong>Wednesday, 19 Aug</strong>
                      </div>
                      <div className="ui-button">+ Appointment</div>
                    </div>
                    <div className="calendar-days">
                      {[
                        ["MON", "17"],
                        ["TUE", "18"],
                        ["WED", "19"],
                        ["THU", "20"],
                        ["FRI", "21"],
                      ].map(([day, date]) => (
                        <div className={date === "19" ? "day active" : "day"} key={date}>
                          <span>{day}</span>
                          <strong>{date}</strong>
                        </div>
                      ))}
                    </div>
                    <div className="schedule">
                      <div className="time-labels">
                        <span>09:00</span>
                        <span>11:00</span>
                        <span>13:00</span>
                        <span>15:00</span>
                      </div>
                      <div className="schedule-lines">
                        <div className="appointment appointment-one">
                          <span>09:30</span>
                          <strong>Lash styling</strong>
                          <small>90 min</small>
                        </div>
                        <div className="appointment appointment-two">
                          <span>12:00</span>
                          <strong>Brow styling</strong>
                          <small>60 min</small>
                        </div>
                        <div className="free-slot">Available · 14:00</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="visual-glow" aria-hidden="true" />
              </div>
            </Reveal>

            <Reveal className="project-card project-standard" delay={0.05}>
              <div className="project-topline">
                <span className="project-number">02</span>
                <span className="status-chip">Backend</span>
              </div>
              <div className="api-visual" aria-label="Stylized REST API preview">
                <div className="api-tabs">
                  <span className="active">response.json</span>
                  <span>security.conf</span>
                </div>
                <pre>
                  <code>
                    <span className="code-muted">200 OK</span>{"\n"}
                    <span className="code-purple">&#123;</span>{"\n"}
                    {"  "}<span className="code-key">&quot;title&quot;</span>: <span className="code-value">&quot;Midnight City&quot;</span>,{"\n"}
                    {"  "}<span className="code-key">&quot;artist&quot;</span>: <span className="code-value">&quot;M83&quot;</span>,{"\n"}
                    {"  "}<span className="code-key">&quot;version&quot;</span>: <span className="code-number">4</span>{"\n"}
                    <span className="code-purple">&#125;</span>
                  </code>
                </pre>
                <div className="api-secured">
                  <LockKeyhole aria-hidden="true" /> JWT secured
                </div>
              </div>
              <p className="project-type">Spring Boot REST API</p>
              <h3>Songify</h3>
              <p className="project-description">
                A learning project grown into a complete secured catalogue API
                with migrations, roles, optimistic locking, and an integration
                happy path running against real PostgreSQL.
              </p>
              <div className="tech-list">
                <span>Spring Security</span>
                <span>Flyway</span>
                <span>Testcontainers</span>
              </div>
              <ExternalLink href="https://github.com/gregdzyg/songify">
                View repository
              </ExternalLink>
            </Reveal>

            <Reveal className="project-card project-standard" delay={0.1}>
              <div className="project-topline">
                <span className="project-number">03</span>
                <span className="status-chip">Integration</span>
              </div>
              <div className="network-visual" aria-label="Stylized external API flow">
                <div className="network-node github-node">
                  <GitHubIcon />
                  <span>GitHub API</span>
                </div>
                <div className="network-path path-one">
                  <span />
                </div>
                <div className="network-node proxy-node">
                  <Network aria-hidden="true" />
                  <span>Proxy</span>
                </div>
                <div className="network-path path-two">
                  <span />
                </div>
                <div className="network-node database-node">
                  <Database aria-hidden="true" />
                  <span>PostgreSQL</span>
                </div>
                <div className="branch-pill branch-one">main · 5da617</div>
                <div className="branch-pill branch-two">feature/api · a83cf2</div>
              </div>
              <p className="project-type">Focused integration service</p>
              <h3>GitHub Proxy</h3>
              <p className="project-description">
                A compact Spring service that aggregates non-fork repositories,
                their branches and latest commit SHAs, then persists the result
                behind local CRUD endpoints.
              </p>
              <div className="tech-list">
                <span>OpenFeign</span>
                <span>Spring Data</span>
                <span>PostgreSQL</span>
              </div>
              <ExternalLink href="https://github.com/gregdzyg/github-proxy">
                View repository
              </ExternalLink>
            </Reveal>

            <Reveal className="project-card project-wide" delay={0.05}>
              <div className="project-copy">
                <div className="project-topline">
                  <span className="project-number">04</span>
                  <span className="status-chip">Mobile · University</span>
                </div>
                <p className="project-type">Cross-platform appointment system</p>
                <h3>SoulMedic</h3>
                <p className="project-description">
                  A full appointment journey for patients and specialists — from
                  authentication and service discovery to booking, cancellation,
                  and availability management.
                </p>
                <div className="tech-list">
                  <span>React Native</span>
                  <span>.NET 8</span>
                  <span>SQL Server</span>
                  <span>JWT</span>
                </div>
                <ExternalLink href="https://github.com/gregdzyg/soulmedic-system">
                  View repository
                </ExternalLink>
              </div>
              <div className="mobile-visual" aria-label="Stylized mobile appointment flow">
                <div className="phone phone-back">
                  <div className="phone-notch" />
                  <div className="phone-screen specialist-screen">
                    <div className="mobile-brand">soulmedic</div>
                    <span className="mobile-overline">YOUR APPOINTMENTS</span>
                    <strong>Good morning, Anna</strong>
                    <div className="mobile-stat-row">
                      <div><b>4</b><span>Today</span></div>
                      <div><b>18</b><span>This week</span></div>
                    </div>
                    <div className="mobile-visit"><span>10:30</span><div><b>Consultation</b><small>Julia Nowak</small></div></div>
                    <div className="mobile-visit"><span>13:00</span><div><b>Therapy</b><small>Marek Lis</small></div></div>
                  </div>
                </div>
                <div className="phone phone-front">
                  <div className="phone-notch" />
                  <div className="phone-screen patient-screen">
                    <div className="mobile-brand">soulmedic</div>
                    <span className="mobile-overline">BOOK A VISIT</span>
                    <strong>Find the right support</strong>
                    <div className="mobile-search">Search specialists…</div>
                    <div className="specialist-card">
                      <div className="specialist-avatar">AK</div>
                      <div><b>Anna Kowalska</b><small>Psychologist</small></div>
                    </div>
                    <div className="mobile-date-row">
                      <span>MON<br /><b>24</b></span>
                      <span className="active">TUE<br /><b>25</b></span>
                      <span>WED<br /><b>26</b></span>
                    </div>
                    <div className="mobile-action">Choose 10:30</div>
                  </div>
                </div>
                <div className="mobile-orbit" aria-hidden="true" />
              </div>
            </Reveal>
          </div>
        </section>

        <section className="approach-section section-shell" id="approach">
          <Reveal className="section-heading approach-heading">
            <div>
              <p className="section-eyebrow">How I think</p>
              <h2>Beyond the happy path.</h2>
            </div>
            <p>
              The most interesting engineering decisions appear when a system
              meets changing data, imperfect inputs, and real users.
            </p>
          </Reveal>

          <div className="principles">
            <Reveal className="principle" delay={0.03}>
              <span className="principle-number">01</span>
              <div className="principle-icon"><Braces aria-hidden="true" /></div>
              <div>
                <h3>Model the rules</h3>
                <p>
                  Keep business decisions in one place so every interface works
                  from the same definition of what is valid.
                </p>
              </div>
              <span className="principle-keyword">Consistency</span>
            </Reveal>

            <Reveal className="principle" delay={0.08}>
              <span className="principle-number">02</span>
              <div className="principle-icon"><Database aria-hidden="true" /></div>
              <div>
                <h3>Protect the data</h3>
                <p>
                  Think about migrations, validation, concurrency, backups, and
                  recovery before they become production incidents.
                </p>
              </div>
              <span className="principle-keyword">Reliability</span>
            </Reveal>

            <Reveal className="principle" delay={0.13}>
              <span className="principle-number">03</span>
              <div className="principle-icon"><TestTube2 aria-hidden="true" /></div>
              <div>
                <h3>Verify and deliver</h3>
                <p>
                  Use tests, CI, deployment notes, and observable behaviour to
                  make shipping a repeatable process rather than a leap of faith.
                </p>
              </div>
              <span className="principle-keyword">Confidence</span>
            </Reveal>
          </div>
        </section>

        <section className="stack-section section-shell">
          <Reveal className="stack-intro">
            <p className="section-eyebrow">Working toolkit</p>
            <h2>Focused on the backend.<br />Comfortable across the product.</h2>
          </Reveal>
          <div className="stack-grid">
            {stackGroups.map((group, index) => (
              <Reveal className="stack-card" delay={index * 0.05} key={group.label}>
                <div className="stack-card-top">
                  {index === 0 && <ServerCog aria-hidden="true" />}
                  {index === 1 && <Database aria-hidden="true" />}
                  {index === 2 && <ShieldCheck aria-hidden="true" />}
                  {index === 3 && <Layers3 aria-hidden="true" />}
                  <span>{group.label}</span>
                </div>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="about-section section-shell" id="about">
          <Reveal className="about-panel">
            <div className="about-marker" aria-hidden="true">
              <Code2 />
            </div>
            <div className="about-heading">
              <p className="section-eyebrow">A little about me</p>
              <h2>Curiosity became a way of working.</h2>
            </div>
            <div className="about-copy">
              <p className="about-lead">
                I like understanding why a system works — not only getting it to run.
              </p>
              <p>
                I started by asking how to write the next feature. Now I spend
                more time asking what should happen when requirements conflict,
                data changes, or a service fails. That progression is what keeps
                software development interesting to me.
              </p>
              <p>
                I&apos;m at the beginning of my professional career and looking for
                a team where I can contribute, learn from experienced engineers,
                and keep growing through real product work.
              </p>
            </div>
            <div className="about-note">
              <Sparkles aria-hidden="true" />
              <span>
                This portfolio was designed and directed by me, with implementation
                supported by Codex as an AI-assisted development workflow.
              </span>
            </div>
          </Reveal>
        </section>

        <section className="contact-section section-shell" id="contact">
          <Reveal className="contact-card">
            <div className="contact-orb" aria-hidden="true" />
            <div className="contact-copy">
              <p className="section-eyebrow">Let&apos;s connect</p>
              <h2>Looking for a developer who cares how the pieces fit together?</h2>
              <p>
                I&apos;m open to Junior Java / Spring opportunities and conversations
                about backend development, product work, and useful software.
              </p>
            </div>
            <div className="contact-actions">
              <a className="button button-light" href={`mailto:${email}`}>
                <Mail aria-hidden="true" />
                Send an email
              </a>
              <ExternalLink href={linkedinUrl} className="button button-glass">
                <LinkedInIcon />
                LinkedIn
              </ExternalLink>
            </div>
            <div className="contact-bottom">
              <CopyEmail />
              <span>Usually replies within 24–48 hours</span>
            </div>
          </Reveal>
        </section>
      </div>

      <footer className="site-footer section-shell">
        <a className="brand footer-brand" href="#top">
          <span className="brand-mark">GD</span>
          <span className="brand-name">Grzegorz Dżyg</span>
        </a>
        <p>Java &amp; Spring Developer · Poland</p>
        <div className="footer-links">
          <a href={githubUrl} target="_blank" rel="noreferrer" aria-label="GitHub">
            <GitHubIcon />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <LinkedInIcon />
          </a>
          <a href={`mailto:${email}`} aria-label="Email">
            <Mail aria-hidden="true" />
          </a>
        </div>
        <span className="copyright">© 2026 Grzegorz Dżyg</span>
      </footer>
    </main>
  );
}
