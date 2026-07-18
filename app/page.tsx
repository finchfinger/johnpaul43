"use client";

import { FormEvent, useState } from "react";

const questions = [
  "How might we make every block feel safe after dark?",
  "How might we make city services easier to reach—and easier to trust?",
  "How might we help local businesses open, grow, and stay in the ward?",
  "How might we design streets that work for neighbors of every age?",
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

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="John Paul Wolforth for 43rd Ward Alderman, home">
          <StarRow />
          <span>Wolforth <small>43</small></span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#approach">The approach</a>
          <a href="#about">Meet John Paul</a>
          <a className="nav-cta" href="#share">Share an idea</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">John Paul Wolforth for 43rd Ward Alderman</p>
          <h1>Let’s build a ward that works for <em>people.</em></h1>
          <p className="dek">
            John Paul Wolforth is running for alderman to make ward government more responsive, transparent, and useful—by starting with the people who know the neighborhood best.
          </p>
          <a className="button button-red" href="#share">Add your idea</a>
        </div>
      </section>

      <section className="approach" id="approach">
        <div className="section-kicker">People first, then solutions</div>
        <div className="approach-grid">
          <h2>Start with lived experience. Build what works.</h2>
          <div className="body-copy">
            <p>
              The people closest to a problem should help shape the solution. We’ll listen to residents, city workers, small businesses, and community organizations before deciding what needs to change.
            </p>
            <p>
              Then we’ll use design-thinking methods to turn those priorities into practical ideas, test them on a small scale, and improve them in public. Every proposal should be desirable to the people it serves, feasible to deliver, and viable over time.
            </p>
          </div>
        </div>
        <div className="principles" aria-label="Campaign method">
          <div><b>01</b><h3>Desirable</h3><p>Does this solve a problem neighbors actually feel?</p></div>
          <div><b>02</b><h3>Feasible</h3><p>Can the ward, city, and community partners deliver it?</p></div>
          <div><b>03</b><h3>Viable</h3><p>Can it earn support, fit the budget, and last?</p></div>
        </div>
      </section>

      <section className="about" id="about">
        <div className="section-kicker">Meet John Paul</div>
        <div className="about-grid">
          <h2>A neighbor who believes local government should listen before it acts.</h2>
          <div className="body-copy">
            <p>
              John Paul Wolforth is a longtime 43rd Ward neighbor, civic volunteer, and design strategist who has spent his career helping organizations untangle complicated problems. He and his family have built their life here—walking to school, supporting local shops, and learning from the neighbors who make every block distinct.
            </p>
            <p>
              John Paul is running for alderman to bring a practical, collaborative approach to ward government: responsive constituent service, transparent decisions, and solutions shaped with the people who use them.
            </p>
            <a className="text-link" href="https://calendly.com/" target="_blank" rel="noreferrer">Schedule a 15-minute conversation</a>
          </div>
        </div>
      </section>

      <section className="questions" aria-labelledby="questions-title">
        <div className="section-kicker">Start with a better question</div>
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
          <h2>What should we work on together?</h2>
          <p>Share one thing you would change about life in the 43rd Ward. It can be big, small, or still taking shape.</p>
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
            <label htmlFor="idea">Complete the thought: How might we…</label>
            <textarea id="idea" name="idea" placeholder="make it easier to…" required />
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

      <footer>
        <div className="footer-mark"><StarRow /><strong>Wolforth</strong><small>43rd ward alderman</small></div>
        <p>Paid for by Friends of John Paul Wolforth</p>
        <a href="mailto:hello@wolforth43.com">hello@wolforth43.com</a>
      </footer>
    </main>
  );
}
