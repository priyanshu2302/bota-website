
import AIChatWidget from "../components/AIChatWidget";

const features = [
  {
    number: "01",
    icon: "✳",
    title: "Patient enquiries",
    description:
      "Give patients a simple way to ask routine questions and understand the next step.",
    tag: "SMART RESPONSES",
  },
  {
    number: "02",
    icon: "◷",
    title: "Appointment requests",
    description:
      "Make it easier for patients to express their booking needs through a guided conversation.",
    tag: "LESS FRICTION",
  },
  {
    number: "03",
    icon: "◎",
    title: "Always-on assistance",
    description:
      "Give patients a digital starting point for enquiries beyond your team's usual working hours.",
    tag: "24/7 ACCESS",
  },
];

const steps = [
  {
    number: "01",
    title: "A patient starts a conversation",
    description:
      "They ask a routine question or explain that they need an appointment.",
  },
  {
    number: "02",
    title: "BotA understands the request",
    description:
      "The assistant guides the conversation and gathers relevant details.",
  },
  {
    number: "03",
    title: "The next step becomes clearer",
    description:
      "Patients get helpful guidance, while clinic teams stay in control.",
  },
];

const roadmap = [
  {
    status: "FOUNDATION",
    title: "Conversational assistance",
    description:
      "AI-powered conversations for common patient questions and appointment enquiries.",
  },
  {
    status: "IN DEVELOPMENT",
    title: "Smarter clinic workflows",
    description:
      "A vision for clinic-specific settings, appointment management, and a more connected experience.",
  },
  {
    status: "FUTURE VISION",
    title: "One connected front desk",
    description:
      "A unified workspace for clinic communication, scheduling workflows, reminders, and patient follow-ups.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <nav className="nav-container" aria-label="Main navigation">

          <a href="#home" className="brand" aria-label="BotA home">
            <img src="/bota-logo.png" alt="BotA logo" className="brand-logo" />
            <span>BotA</span>
            <span className="brand-status" />
          </a>


          <div className="nav-links">
            <a href="#product">Product</a>
            <a href="#how-it-works">How it works</a>
            <a href="#vision">Vision</a>
            <a href="#roadmap">Roadmap</a>
          </div>

          <a className="nav-cta" href="#contact">
            Talk to us <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-grid-bg" aria-hidden="true" />
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />

        <div className="hero-container">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              AI-POWERED CLINIC ASSISTANT
            </div>

            <h1>
              Better conversations.
              <span className="gradient-text"> Calmer clinic days.</span>
            </h1>

            <p className="hero-description">
              BotA helps clinics handle routine patient questions and
              appointment requests with a more responsive, straightforward
              digital experience.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://chat-with-bota.vercel.app/ui"
                target="_blank"
                rel="noreferrer"
              >
                Try the BotA prototype <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-secondary" href="#how-it-works">
                See how it works <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="hero-note">
              <span className="note-check">✓</span>
              Designed to support clinic teams, not replace professional care.
            </div>
          </div>

          <div className="hero-visual" aria-label="BotA assistant preview">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />

            <div className="floating-label floating-label-top">
              <span className="live-dot" />
              AI ASSISTANT <strong>ONLINE</strong>
            </div>

            <div className="assistant-core">
              <div className="core-ring">
                <div className="core-face">
                  <span className="core-eye core-eye-left" />
                  <span className="core-eye core-eye-right" />
                  <span className="core-smile" />
                </div>
              </div>
              <div className="core-light" />
            </div>

            <div className="floating-label floating-label-bottom">
              <span className="mini-spark">✳</span>
              <div>
                <strong>BotA assistant</strong>
                <small>Ready to help</small>
              </div>
              <span className="label-arrow">↗</span>
            </div>

            <div className="visual-caption">
              <span>CONVERSATION LAYER</span>
              <span>01 / 04</span>
            </div>
          </div>
        </div>

        <div className="hero-bottom container-width">
          <span>BUILT FOR CLINIC WORKFLOWS</span>
          <span className="hero-bottom-line" />
          <span>HUMAN-CENTRED AI ✳</span>
        </div>
      </section>

      <section className="product-section section-space" id="product">
        <div className="container-width">
          <div className="section-heading reveal">
            <div className="eyebrow">01 / THE PRODUCT</div>
            <h2>
              The first conversation
              <span className="gradient-text"> sets the tone.</span>
            </h2>
            <p>
              Patients need clear answers. Clinic teams need room to focus.
              BotA is designed to make routine communication feel simpler.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature, index) => (
              <article
                className="feature-card reveal"
                key={feature.number}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="feature-card-top">
                  <span className="feature-icon">{feature.icon}</span>
                  <span className="feature-number">{feature.number}</span>
                </div>
                <div className="feature-tag">{feature.tag}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="feature-card-footer">
                  <span>Explore capability</span>
                  <span aria-hidden="true">↗</span>
                </div>
              </article>
            ))}
          </div>

          <div className="product-note reveal">
            <span className="note-icon">✳</span>
            <p>
              Built around useful conversations, clear expectations, and
              clinic-controlled workflows.
            </p>
          </div>
        </div>
      </section>

      <section
        className="workflow-section section-space"
        id="how-it-works"
      >
        <div className="container-width">
          <div className="section-heading reveal">
            <div className="eyebrow">02 / HOW IT WORKS</div>
            <h2>
              A clearer path from
              <span className="gradient-text"> question to next step.</span>
            </h2>
            <p>
              Simple by design: support the conversation, collect relevant
              details, and keep the clinic in control.
            </p>
          </div>

          <div className="workflow-grid">
            {steps.map((step, index) => (
              <article className="workflow-card reveal" key={step.number}>
                <div className="workflow-card-top">
                  <span className="step-number">{step.number}</span>
                  {index < steps.length - 1 && (
                    <span className="step-connector" aria-hidden="true">
                      ─────→
                    </span>
                  )}
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="vision-section section-space" id="vision">
        <div className="container-width vision-layout">
          <div className="vision-copy reveal">
            <div className="eyebrow">03 / OUR VISION</div>
            <h2>
              Less repetitive work.
              <span className="gradient-text"> More human attention.</span>
            </h2>
            <p>
              We believe technology should make healthcare communication
              easier, not colder. BotA aims to help clinics spend less time
              repeating routine information and more time supporting people.
            </p>
            <a className="text-link" href="#roadmap">
              Discover the direction <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="vision-panel reveal">
            <div className="vision-panel-header">
              <span className="panel-indicator" />
              BOT A / DESIGN PRINCIPLES
              <span className="panel-version">V.01</span>
            </div>

            <div className="principle-row">
              <span className="principle-icon">◎</span>
              <div>
                <strong>Human first</strong>
                <p>Technology supports the care team.</p>
              </div>
              <span className="principle-check">✓</span>
            </div>

            <div className="principle-row">
              <span className="principle-icon">⌘</span>
              <div>
                <strong>Clear by design</strong>
                <p>Make the next step easier to understand.</p>
              </div>
              <span className="principle-check">✓</span>
            </div>

            <div className="principle-row">
              <span className="principle-icon">✳</span>
              <div>
                <strong>Clinic in control</strong>
                <p>Build around clinic needs and workflows.</p>
              </div>
              <span className="principle-check">✓</span>
            </div>

            <div className="panel-footer">
              <span>OUR NORTH STAR</span>
              <span>Better care conversations ↗</span>
            </div>
          </div>
        </div>
      </section>

      <section className="roadmap-section section-space" id="roadmap">
        <div className="container-width">
          <div className="section-heading reveal">
            <div className="eyebrow">04 / WHAT'S NEXT</div>
            <h2>
              Starting with conversations.
              <span className="gradient-text"> Growing into workflows.</span>
            </h2>
            <p>
              Our direction is to make clinic communication more connected
              over time. Future capabilities depend on development and
              validation.
            </p>
          </div>

          <div className="roadmap-grid">
            {roadmap.map((item, index) => (
              <article className="roadmap-card reveal" key={item.title}>
                <div className="roadmap-top">
                  <span className="roadmap-index">0{index + 1}</span>
                  <span className="roadmap-status">{item.status}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="roadmap-progress">
                  <span style={{ width: `${100 - index * 28}%` }} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section section-space" id="contact">
        <div className="container-width">
          <div className="contact-panel reveal">
            <div className="contact-orb" aria-hidden="true">
              ✳
            </div>

            <div className="eyebrow">LET'S TALK</div>

            <h2>
              Bring a smarter assistant to your clinic.
            </h2>

            <p>
              Interested in BotA for your clinic, a potential partnership,
              or simply want to learn more? Contact our team directly.
            </p>

            <div className="contact-actions"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "16px",
                alignItems: "center",
              }}

            >
              <a
                className="button button-primary"
                href="mailto:teams.bota@gmail.com"
              >
                Email BotA ↗
              </a>

              <a
                className="button button-primary"
                href="https://wa.me/918174925120"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us ↗
              </a>
            </div>

            <span className="contact-footnote">
              BotA supports clinic teams. It does not replace professional
              medical judgement or emergency care.
            </span>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main container-width">
          <a href="#home" className="brand footer-brand">
            <img
              src="/bota-logo.png"
              alt="BotA logo"
              className="brand-logo"
            />
            <span>BotA</span>
          </a>

          <p>Thoughtful AI for better clinic conversations.</p>

          <a className="back-to-top" href="#home">
            Back to top ↑
          </a>
        </div>
        <div className="footer-bottom container-width">
          <span>© 2026 BotA</span>
          <span>Designed for clearer clinic communication.</span>
        </div>
      </footer>

      <AIChatWidget />
    </main>
  );
}
