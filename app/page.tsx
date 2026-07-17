"use client";

import { FormEvent, useState } from "react";

const questions = [
  "How might we make every block feel safe after dark?",
  "How might we make city services easier to reach—and easier to trust?",
  "How might we help local businesses open, grow, and stay in the ward?",
  "How might we design streets that work for neighbors of every age?",
];

export default function Home() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="John Paul Wolforth for 43rd Ward Alderman, home">
          <span className="stars" aria-hidden="true">✦ ✦ ✦ ✦</span>
          <span>WOLFORTH <small>43</small></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#approach">The approach</a>
          <a href="#about">Meet John</a>
          <a className="nav-cta" href="#share">Share an idea</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">John Paul Wolforth for 43rd Ward Alderman</p>
          <h1>Let’s design a ward that <em>works.</em></h1>
          <p className="dek">
            Politics usually starts with answers. We’re starting with better questions—and building the solutions with you.
          </p>
          <a className="button button-red" href="#share">Add your idea <span aria-hidden="true">↓</span></a>
        </div>
        <div className="hero-note" aria-label="Campaign principle">
          <span className="note-number">01</span>
          <p>Listen closely.<br />Prototype openly.<br />Fix what matters.</p>
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="section-kicker">A design-led campaign</div>
        <div className="approach-grid">
          <h2>Good government should feel less like a maze—and more like a service.</h2>
          <div className="body-copy">
            <p>
              Design is not decoration. It’s a way to understand a problem before rushing to solve it. Our campaign will bring neighbors, city workers, small businesses, and local organizations into the same room to map what is broken, test practical fixes, and measure what actually improves daily life.
            </p>
            <p>
              We’ll publish what we learn, make decisions in the open, and keep refining. Because the best ideas for the 43rd Ward already live here.
            </p>
          </div>
        </div>
        <div className="principles" aria-label="Campaign method">
          <div><b>01</b><h3>Listen</h3><p>Start with lived experience, not assumptions.</p></div>
          <div><b>02</b><h3>Make</h3><p>Turn shared ideas into small, testable solutions.</p></div>
          <div><b>03</b><h3>Learn</h3><p>Measure the result and improve what we build.</p></div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="section-kicker">Meet John</div>
        <div className="about-grid">
          <h2>A neighbor who believes city hall can be more human.</h2>
          <div className="body-copy">
            <p>
              John Paul Wolforth is a longtime 43rd Ward neighbor, civic volunteer, and design strategist who has spent his career helping organizations untangle complicated problems. He and his family have built their life here—walking to school, supporting local shops, and learning from the neighbors who make every block distinct.
            </p>
            <p>
              John is running for alderman to bring a practical, collaborative approach to ward government: responsive constituent service, transparent decisions, and solutions shaped with the people who use them.
            </p>
            <a className="text-link" href="https://calendly.com/" target="_blank" rel="noreferrer">
              Schedule a 15-minute conversation <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="questions" aria-labelledby="questions-title">
        <div className="section-kicker">Questions worth solving</div>
        <h2 id="questions-title">How might we…</h2>
        <div className="question-list">
          {questions.map((question, index) => (
            <div className="question" key={question}>
              <span>0{index + 1}</span><p>{question}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="share" id="share">
        <div className="share-intro">
          <div className="section-kicker light">Your turn</div>
          <h2>What should we solve together?</h2>
          <p>Share one thing you’d change about life in the 43rd Ward. Big, small, unfinished—we want to hear it.</p>
        </div>
        {submitted ? (
          <div className="thanks" role="status">
            <span aria-hidden="true">✦</span>
            <h3>Idea received.</h3>
            <p>Thanks for helping design what comes next. We’ll keep you in the loop.</p>
            <button type="button" onClick={() => setSubmitted(false)}>Add another idea</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="idea">How might we…</label>
            <textarea id="idea" name="idea" placeholder="make it easier to…" required />
            <div className="form-row">
              <div>
                <label htmlFor="email">Your email</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <button className="submit-button" type="submit">Send my idea <span aria-hidden="true">→</span></button>
            </div>
            <p className="fine-print">By submitting, you agree to receive occasional campaign updates. Unsubscribe anytime.</p>
          </form>
        )}
      </section>

      <footer>
        <div className="footer-mark"><span aria-hidden="true">✦ ✦ ✦ ✦</span><strong>WOLFORTH</strong><small>43RD WARD ALDERMAN</small></div>
        <p>Paid for by Friends of John Paul Wolforth</p>
        <a href="mailto:hello@wolforth43.com">hello@wolforth43.com</a>
      </footer>
    </main>
  );
}
