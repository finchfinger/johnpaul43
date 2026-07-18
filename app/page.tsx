"use client";

import { FormEvent, useEffect, useState } from "react";

const questions = [
  "How might we make our parks and public spaces work better for everyone?",
  "How might we make city services easier to reach and easier to trust?",
  "How might we help local businesses open, grow, and stay in the ward?",
  "How might we design streets that work for neighbors of every age?",
  "How might we make housing more attainable while protecting what neighbors love about the ward?",
  "How might we make city decisions easier to understand and easier to influence?",
];

const ideaPrompts = [
  "make it easier to park…",
  "extend the hours at the ward office…",
  "make city services easier to navigate…",
  "help local businesses thrive…",
  "make playground slides a little taller…",
  "keep summer going a few more weeks…",
];

function StarRow({ count = 4 }: { count?: number }) {
  return (
    <span className="star-row" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <img src="/chistar.svg" alt="" key={index} />
      ))}
    </span>
  );
}

export default function Home() {
  const [submitted, setSubmitted] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [promptIndex, setPromptIndex] = useState(0);
  const [joinOpen, setJoinOpen] = useState(false);
  const [joined, setJoined] = useState(false);

  useEffect(() => {
    const updateHeader = () => setShowHeader(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    if (!joinOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setJoinOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [joinOpen]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const promptTimer = window.setInterval(() => {
      setPromptIndex((current) => (current + 1) % ideaPrompts.length);
    }, 3200);
    return () => window.clearInterval(promptTimer);
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  function openJoinModal() {
    setJoined(false);
    setJoinOpen(true);
  }

  function handleJoinSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setJoined(true);
  }

  return (
    <>
      {showHeader && (
        <header className="scroll-header">
          <a className="scroll-brand" href="#top">
            John Paul Wolforth <span className="scroll-office">for 43rd Ward alderman</span>
          </a>
          <button className="scroll-action" type="button" onClick={openJoinModal}>Join the movement</button>
        </header>
      )}
      <main>
      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="hero-brand">
            <StarRow />
            <p className="candidate-first-name">John Paul</p>
            <p className="campaign-name">Wolforth</p>
            <p className="campaign-role">For 43rd Ward alderman</p>
          </div>
          <h1>Let’s design a ward that works for everyone.</h1>
          <p className="dek">
            People know what their neighborhoods need.<br />
            Let’s build the answers together.
          </p>
          <button className="button button-red" type="button" onClick={openJoinModal}>Join the movement</button>
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="section-kicker">People first, then solutions</div>
        <div className="approach-grid">
          <h2>Start with lived experience. Build what works.</h2>
          <div className="body-copy">
            <p>
              The best ideas do not begin at City Hall. They begin on our blocks, with the people who know what is working, what is not, and what our neighborhood can become.
            </p>
            <p>
              We’ll listen first, bring people together, and turn shared priorities into practical action. We’ll try promising ideas, learn what works, and improve them openly. Every solution should be something people want, something we can deliver, and something built to last.
            </p>
          </div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="section-kicker">Meet John Paul</div>
        <div className="about-grid">
          <h2>What if city government worked better for everyone?</h2>
          <div className="body-copy">
            <p>
              What if getting help were simpler? What if decisions were explained clearly? What if neighbors had a real voice before plans were final?
            </p>
            <p>
              John Paul Wolforth is a longtime 43rd Ward neighbor, civic volunteer, and design strategist who has spent his career bringing people together to solve complicated problems. He attended Hardey Prep and St. Ignatius before graduating from Northwestern University. He is running for alderman to make city government more responsive, more open, and more connected to the people it serves.
            </p>
            <p>
              That means practical service now, collaborative decisions about what comes next, and an optimistic belief in what we can accomplish together. When neighbors have a real seat at the table, we can build a ward that works better for everyone.
            </p>
            <a className="text-link" href="mailto:hello@wolforth43.com?subject=Hello%20John%20Paul">Send John Paul a note</a>
          </div>
        </div>
      </section>

      <section className="questions" aria-labelledby="questions-title">
        <div className="section-kicker">Questions worth solving</div>
        <h2 id="questions-title">How might we…</h2>
        <div className="question-list">
          {questions.map((question) => (
            <div className="question" key={question}>
              <img src="/chistar.svg" alt="" aria-hidden="true" /><p>{question}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="share" id="share">
        <div className="share-intro">
          <div className="section-kicker light">Your turn</div>
          <h2>What should we work on together?</h2>
          <p>The strongest ideas begin with lived experience. Tell John Paul what the 43rd Ward needs next, whether it is a practical fix, a larger ambition, or a question worth pursuing.</p>
        </div>
        {submitted ? (
          <div className="thanks" role="status">
            <StarRow count={1} />
            <h3>Idea received.</h3>
            <p>Thanks for helping design what comes next. We’ll keep you in the loop.</p>
            <button type="button" onClick={() => setSubmitted(false)}>Add another idea</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="idea">How might we…</label>
            <textarea id="idea" name="idea" placeholder={ideaPrompts[promptIndex]} required />
            <div className="form-row">
              <div>
                <label htmlFor="email">Your email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <button className="submit-button" type="submit">Send my idea</button>
            </div>
            <p className="fine-print">By submitting, you agree to receive occasional campaign updates. Unsubscribe anytime.</p>
          </form>
        )}
      </section>
      </main>
      {joinOpen && (
        <div className="join-modal" role="presentation">
          <section className="join-panel" role="dialog" aria-modal="true" aria-labelledby="join-title">
            <div className="join-top">
              <div>
                <div className="section-kicker">Be part of what comes next</div>
                <h2 id="join-title">Join the movement.</h2>
              </div>
              <button className="join-close" type="button" onClick={() => setJoinOpen(false)}>Close</button>
            </div>
            {joined ? (
              <div className="join-confirmation" role="status">
                <StarRow count={1} />
                <h3>You’re in.</h3>
                <p>Thank you for joining John Paul’s campaign for the 43rd Ward.</p>
                <button className="join-submit" type="button" onClick={() => setJoinOpen(false)}>Done</button>
              </div>
            ) : (
              <form className="join-form" onSubmit={handleJoinSubmit}>
                <div>
                  <label htmlFor="join-name">Your name</label>
                  <input id="join-name" name="name" type="text" autoComplete="name" placeholder="First and last name" autoFocus required />
                </div>
                <div>
                  <label htmlFor="join-email">Your email</label>
                  <input id="join-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                </div>
                <div>
                  <label htmlFor="join-phone">Your phone</label>
                  <input id="join-phone" name="phone" type="tel" autoComplete="tel" placeholder="(312) 555-0123" required />
                </div>
                <button className="join-submit" type="submit">Join the movement</button>
                <p className="join-fine-print">By joining, you agree to receive campaign updates by email and text. Message and data rates may apply. You can unsubscribe at any time.</p>
              </form>
            )}
          </section>
        </div>
      )}
    </>
  );
}
