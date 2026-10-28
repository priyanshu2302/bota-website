
"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [progress, setProgress] = useState(1);
  const [visible, setVisible] = useState(true);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setProgress((current) => {
        const next = Math.min(current + 1, 100);

        if (next === 100) {
          window.clearInterval(interval);

          window.setTimeout(() => {
            setLeaving(true);

            window.setTimeout(() => {
              setVisible(false);
            }, 650);
          }, 200);
        }

        return next;
      });
    }, 28);

    return () => window.clearInterval(interval);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`bota-loader ${leaving ? "bota-loader--leaving" : ""}`}
      role="status"
      aria-live="polite"
      aria-label={`Loading BotA: ${progress}%`}
    >
      <div className="bota-loader__content">
        <div className="bota-loader__orbit">
          <div className="bota-loader__robot">
            <div className="bota-loader__antenna" />
            <div className="bota-loader__head">
              <span className="bota-loader__ear bota-loader__ear--left" />
              <span className="bota-loader__ear bota-loader__ear--right" />

              <div className="bota-loader__eyes">
                <span />
                <span />
              </div>

              <div className="bota-loader__mouth" />
            </div>
          </div>
        </div>

        <h1 className="bota-loader__title">
          Welcome to <span>BotA</span>
        </h1>

        <div className="bota-loader__counter">
          <span>{progress}</span>
          <small>/ 100</small>
        </div>

        <div
          className="bota-loader__track"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div
            className="bota-loader__bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
