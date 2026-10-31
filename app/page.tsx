
import AIChatWidget from "../components/AIChatWidget";

const features = [
  {
    number: "01",
    icon: "✳",
    title: "AI-powered patient enquiries",
    description:
      "Help patients get clear responses to routine clinic questions through a conversational AI assistant, reducing repetitive communication for clinic teams.",
    tag: "SMART RESPONSES",
  },
  {
    number: "02",
    icon: "◷",
    title: "Appointment booking requests",
    description:
      "Make it easier for patients to explain their appointment needs, share preferred timings and begin the appointment-request process.",
    tag: "SIMPLER REQUESTS",
  },
  {
    number: "03",
    icon: "◎",
    title: "Digital clinic assistance",
    description:
      "Give patients a convenient digital starting point for routine enquiries, including outside your team's usual working hours.",
    tag: "DIGITAL ACCESS",
  },
];

const steps = [
  {
    number: "01",
    title: "A patient starts a conversation",
    description:
      "A patient asks a routine healthcare-related question or explains that they would like to request a clinic appointment.",
  },
  {
    number: "02",
    title: "The AI clinic assistant responds",
    description:
      "BotA guides the conversation, understands the patient's request and gathers relevant details.",
  },
  {
    number: "03",
    title: "The next step becomes clearer",
    description:
      "Patients receive helpful guidance, while clinic teams remain involved in managing the next steps.",
  },
];

const roadmap = [
  {
    status: "FOUNDATION",
    title: "AI conversational assistance",
    description:
      "AI-powered conversations for routine patient enquiries and appointment requests.",
  },
  {
    status: "IN DEVELOPMENT",
    title: "Smarter clinic management",
    description:
      "Clinic-specific settings, an administrative dashboard and more configurable workflows.",
  },
  {
    status: "FUTURE VISION",
    title: "Connected appointment workflows",
    description:
      "A broader platform for scheduling, availability management, reminders and patient follow-ups.",
  },
];

const faqs = [
  {
    question: "What is BotA?",
    answer:
      "BotA is an AI-powered clinic assistant designed to help healthcare practices handle routine patient enquiries and appointment requests through conversational interactions.",
  },
  {
    question: "How can an AI assistant help a clinic?",
    answer:
      "An AI clinic assistant can help respond to routine questions, collect appointment preferences and guide patients towards the next step. This can reduce repetitive communication handled by clinic staff.",
  },
  {
    question: "Can BotA help with appointment booking?",
    answer:
      "BotA is designed to help patients communicate their appointment requirements and submit appointment requests. Automated availability checks, confirmed bookings and connected scheduling workflows depend on the features and integrations available.",
  },
  {
    question: "Is BotA a replacement for clinic staff?",
    answer:
      "No. BotA is designed to support clinic teams with administrative communication. It does not replace healthcare professionals, clinical judgement or emergency services.",
  },
  {
    question: "Can BotA be configured for different clinics?",
    answer:
      "Clinic-specific settings and an administrative dashboard are part of the product development roadmap. The long-term goal is to make the assistant adaptable to different clinic requirements.",
  },
  {
    question: "How can a clinic try BotA?",
    answer:
      "Clinic owners and practice managers can explore the available prototype using the Try the BotA Prototype link or contact the BotA team to discuss the product and potential pilot opportunities.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <nav className="nav-container" aria-label="Main navigation">
          <a href="#home" className="brand" aria-label="BotA home">
            <img
              src="/bota-logo.png"
              alt="BotA AI clinic assistant logo"
              className="brand-logo"
            />
            <span>BotA</span>
            <span className="brand-status" />
          </a>

          <div className="nav-links">
            <a href="#product">Product</a>
            <a href="#how-it-works">How it works</a>
            <a href="#vision">Vision</a>
            <a href="#faq">FAQs</a>
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
              Your AI clinic assistant.
              <span className="gradient-text">
                {" "}Better patient conversations.
              </span>
            </h1>

            <p className="hero-description">
              BotA is an AI-powered clinic assistant designed to help
              healthcare practices handle routine patient enquiries and
              appointment requests through simple, responsive conversations.
              Give patients a clearer way to ask questions while helping
              clinic teams spend less time on repetitive communication.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href="https://chat-with-bota.vercel.app/ui"
                target="_blank"
                rel="noopener noreferrer"
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

          <div
            className="hero-visual"
            aria-label="Illustrative preview of the BotA AI clinic assistant"
          >
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
              An AI assistant for clinics.
              <span className="gradient-text">
                {" "}Designed around patients.
              </span>
            </h2>

            <p>
              BotA brings AI-powered patient communication into the clinic
              experience. From routine patient enquiries to appointment
              requests, the goal is to make everyday interactions simpler
              for patients and healthcare teams.
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
              Built around useful conversations, clear expectations and
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
              From patient enquiry
              <span className="gradient-text">
                {" "}to the next step.
              </span>
            </h2>

            <p>
              A straightforward conversational experience: patients explain
              what they need, the AI assistant gathers relevant information,
              and clinic teams stay in control of the process.
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
              <span className="gradient-text">
                {" "}More human attention.
              </span>
            </h2>

            <p>
              We believe technology should make healthcare communication
              easier, not colder. BotA aims to help clinics spend less time
              repeating routine information and more time supporting people.
              Our long-term vision is to make AI-powered clinic workflows
              more connected, configurable and accessible.
            </p>

            <a className="text-link" href="#roadmap">
              Discover the direction <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="vision-panel reveal">
            <div className="vision-panel-header">
              <span className="panel-indicator" />
              BOTA / DESIGN PRINCIPLES
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
              <span className="gradient-text">
                {" "}Growing into workflows.
              </span>
            </h2>

            <p>
              BotA is being developed with a broader vision for clinic
              automation. We believe in being transparent about current
              capabilities and future product development.
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

          <p className="contact-footnote">
            Roadmap items describe planned development and should not be
            interpreted as currently available product features.
          </p>
        </div>
      </section>

      <section className="faq-section section-space" id="faq">
        <div className="container-width">
          <div className="section-heading reveal">
            <div className="eyebrow">05 / FREQUENTLY ASKED QUESTIONS</div>

            <h2>
              Questions about
              <span className="gradient-text">
                {" "}BotA?
              </span>
            </h2>

            <p>
              Learn more about our AI clinic assistant, patient enquiry
              support, appointment requests and the future of BotA.
            </p>
          </div>

          <div className="feature-grid">
            {faqs.map((faq, index) => (
              <article className="feature-card reveal" key={faq.question}>
                <div className="feature-card-top">
                  <span className="feature-icon">?</span>
                  <span className="feature-number">
                    0{index + 1}
                  </span>
                </div>

                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
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
              Interested in an AI assistant for your clinic, a potential
              partnership or simply want to learn more about BotA?
              Contact our team directly.
            </p>

            <div
              className="contact-actions"
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
              alt="BotA AI clinic assistant logo"
              className="brand-logo"
            />
            <span>BotA</span>
          </a>

          <p>
            AI-powered clinic assistance for better patient conversations.
          </p>

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
