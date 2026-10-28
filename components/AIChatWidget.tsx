"use client";

import { useState } from "react";

const CHAT_URL = "https://chat-with-bota.vercel.app/ui";

export default function AIChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="ai-widget">
      {open && (
        <section className="ai-panel" aria-label="BotA assistant">
          <div className="ai-panel-header">
            <div className="ai-avatar" aria-hidden="true">
              <span>B.</span>
            </div>

            <div className="ai-panel-title">
              <strong>BotA Assistant</strong>
              <span>
                <i className="status-dot" />
                Your clinic conversation assistant
              </span>
            </div>

            <button
              className="ai-close"
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
            >
              ×
            </button>
          </div>

          <div className="ai-panel-body">
            <div className="ai-welcome-label">
              MEET YOUR AI CLINIC ASSISTANT
            </div>

            <h3>How can BotA help?</h3>

            <p>
              Discover how BotA can help clinics handle routine patient
              questions and appointment requests more smoothly.
            </p>

            <div className="ai-suggestions">
              <a href="#product" onClick={() => setOpen(false)}>
                Explore BotA features <span aria-hidden="true">↗</span>
              </a>

              <a href="#contact" onClick={() => setOpen(false)}>
                Talk to our team <span aria-hidden="true">↗</span>
              </a>
            </div>

            <a
              className="button button-primary ai-launch"
              href={CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Try the BotA prototype{" "}
              <span aria-hidden="true">↗</span>
            </a>

            <p className="ai-note">
              The prototype opens in a new tab.
            </p>
          </div>

          <div className="ai-panel-footer">
            BUILT TO SUPPORT CLINIC TEAMS
          </div>
        </section>
      )}

      <button
        className={`ai-orb ${open ? "ai-orb-active" : ""}`}
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Close BotA assistant" : "Open BotA assistant"}
        aria-expanded={open}
      >
        <span className="orb-ring orb-ring-one" />
        <span className="orb-ring orb-ring-two" />

        <span className="ai-orb-face" aria-hidden="true">
          <i />
          <i />
          <b />
        </span>
      </button>
    </div>
  );
}