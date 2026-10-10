import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 30;
    const y = (clientY / window.innerHeight - 0.5) * 30;
    setMousePos({ x, y });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="adventure-wrapper" onMouseMove={handleMouseMove}>
      {/* Living Atmospheric Interactive Background Blobs */}
      <div 
        className="mood-blob blob-cyan" 
        style={{ transform: `translate(${mousePos.x * 1.2}px, ${mousePos.y * 1.2}px)` }}
      ></div>
      <div 
        className="mood-blob blob-sunset" 
        style={{ transform: `translate(${mousePos.x * -0.8}px, ${mousePos.y * -0.8}px)` }}
      ></div>
      <div 
        className="mood-blob blob-amber" 
        style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 1.5}px)` }}
      ></div>

      {/* Navigation */}
      <header className="adventure-nav">
        <div className="nav-logo">ZERO TO GGR 2030</div>
        <nav className="nav-links">
          <a href="#story">The Why</a>
          <a href="#journey">Roadmap</a>
          <a href="#vessel">The Boat & Crew</a>
          <a href="#partners">Partnerships</a>
          <a href="#connect">Get in Touch</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="adventure-hero">
        <span className="hero-pill">Radical Stubborn Endurance</span>
        <h1>Where Executive Function Fails, Hyperfocus Takes the Helm</h1>
        <p className="hero-lead">
          The world usually measures us by unemployment, homelessness, suicide statistics, and daily executive dysfunction[cite: 1]. We are an AuDHD and LGBTQIA+ couple taking our hyperfocus, monotropic grit, and nonlinear thinking to the open ocean[cite: 1].
        </p>
        <div className="hero-cta">
          <a href="#story" className="btn-adventure primary">Read Our Story</a>
          <a href="#connect" className="btn-adventure secondary">Sponsor the Campaign</a>
        </div>
      </section>

      {/* Main Content Flow */}
      <main className="adventure-content">

        {/* The Why / Manifesto */}
        <section id="story" className="story-card">
          <span className="section-tag">01 / THE HUMAN REALITY</span>
          <h2>Saved by Ten Minutes of CPR and Pure Grit</h2>
          
          <blockquote className="adventure-quote">
            "To exist, thrive, and survive. To show the real daily struggles of neurodivergent people while mastering one of the most grueling physical challenges on Earth."
          </blockquote>
          
          <p className="story-text">
            Our campaign isn't a polished corporate presentation. Erik survived kidney cancer at 35, suffered a heart attack in the spring of 2026, spent the summer learning to sail, and had a second heart attack that fall[cite: 1]. He was saved by Mae performing ten minutes of heroic chest compressions[cite: 1].
          </p>
          <p className="story-text" style={{ marginTop: '16px' }}>
            In 2021, Mae traveled from Iowa to Washington state as a trans refugee seeking safety and a new life[cite: 1]. Three years ago, our lives converged[cite: 1]. As a couple, we lived for two years in a remote hike-in cabin in the Olympic Mountains, learning to build a life together from the ground up[cite: 1]. Taking a 1969 Hinckley Pilot 35 around the world in the 2030 Golden Globe Race is about proving what happens when hyperfocus and stubborn endurance meet the open sea[cite: 1].
          </p>
        </section>

        {/* Roadmap (Full 4 Years) */}
        <section id="journey" className="story-card">
          <span className="section-tag">02 / THE CLIMB</span>
          <h2>Four Year Campaign Roadmap</h2>
          
          <div className="roadmap-flow">
            <div className="roadmap-milestone">
              <span className="milestone-num">01</span>
              <h3>Year One</h3>
              <p>Continue refit, learn to sail, log RYA offshore miles, and build our social media presence[cite: 1].</p>
            </div>
            <div className="roadmap-milestone">
              <span className="milestone-num">02</span>
              <h3>Year Two</h3>
              <p>Sail around Vancouver Island, execute a long passage to Hawaii, and continue refit work[cite: 1].</p>
            </div>
            <div className="roadmap-milestone">
              <span className="milestone-num">03</span>
              <h3>Year Three</h3>
              <p>Hone single-handed skills and sail the boat north to the Faroe Islands[cite: 1].</p>
            </div>
            <div className="roadmap-milestone">
              <span className="milestone-num">04</span>
              <h3>Year Four</h3>
              <p>Finish race refit, complete final preparation, and arrive in Les Sables-d'Olonne for the start[cite: 1].</p>
            </div>
          </div>
        </section>

        {/* Vessel & Crew */}
        <section id="vessel" className="story-card">
          <span className="section-tag">03 / THE VESSEL & THE CREW</span>
          <h2>Classic Iron & Lived Experience</h2>

          <div className="crew-vessel-grid">
            <div className="box-item">
              <h3>The Vessel</h3>
              <p className="highlight-title">1969 Hinckley Pilot 35 (Dorothy Rose)</p>
              <p>A Sparkman & Stephens classic built in 1969, the year of the original Golden Globe Race[cite: 1]. Considered one of the most beautiful boats of the early fiberglass age, no Hinckley Pilot 35 has ever been run in the modern Golden Globe Race[cite: 1].</p>
              <p className="ig-nudge">
                Follow our refit on Instagram: <a href="https://www.instagram.com/audhdandthesea/" target="_blank" rel="noreferrer">@audhdandthesea</a>
              </p>
            </div>
            <div className="box-item">
              <h3>The Crew</h3>
              <p className="crew-desc"><strong>Erik Spellman (49), Primary Skipper:</strong> AuDHD sailor, cancer survivor, and two-time cardiac arrest survivor[cite: 1].</p>
              <p className="crew-desc"><strong>Mae Smith (30), Reserve Skipper & Shore Lead:</strong> Transgender ADHD lead managing shore operations, logistics, and navigation prep[cite: 1].</p>
              <p className="crew-desc" style={{ fontSize: '0.85rem', marginTop: '10px' }}>Partners in life for 3 years, living aboard Dorothy Rose and in a small remote cabin in the Olympic Mountains[cite: 1].</p>
            </div>
          </div>
        </section>

        {/* Partnership Opportunities Section */}
        <section id="partners" className="story-card">
          <span className="section-tag">04 / PARTNERSHIPS</span>
          <h2>Build This Campaign With Us</h2>
          <p className="story-text">
            We are actively seeking brand sponsors, technical partners, and grassroots supporters who align with our mission of authentic representation in extreme ocean sports[cite: 1].
          </p>

          <div className="partners-grid" style={{ marginTop: '25px' }}>
            <div className="partner-card">
              <span className="partner-badge">Title & Primary Sponsors</span>
              <h3>Brand Partnerships</h3>
              <p>Naming rights, high-visibility hull and sail placement, and long-term narrative integration throughout our 4-year offshore campaign.</p>
            </div>

            <div className="partner-card">
              <span className="partner-badge">Technical & Gear</span>
              <h3>Equipment Partners</h3>
              <p>Rigging, foul weather gear, safety systems, solar/wind power, and retro-compliant tools built for extreme ocean endurance.</p>
            </div>

            <div className="partner-card">
              <span className="partner-badge">Advocacy & Allies</span>
              <h3>Community Allies</h3>
              <p>Collaborations with organizations dedicated to suicide prevention, neurodivergent housing security, and LGBTQIA+ youth support.</p>
            </div>

            <div className="partner-card">
              <span className="partner-badge">Grassroots Supporters</span>
              <h3>Individual Backers</h3>
              <p>Patrons funding the refit month-by-month and following raw behind-the-scenes ocean build logs on our social channels.</p>
            </div>
          </div>
        </section>

        {/* Support / Contact */}
        <section id="connect" className="story-card highlight-glow">
          <span className="section-tag">05 / GET IN TOUCH</span>
          <h2>Real Stories Over Product Pitches</h2>
          <p className="story-text">
            So much AuDHD and autism media is focused on paid coaching or productivity products. We want to highlight the actual, everyday struggles of being neurodivergent and LGBTQIA+ while organizing an ocean campaign, proving what our community can achieve through hyperfocus, meticulous preparation, and non-linear problem solving.
          </p>
          <p className="story-text" style={{ marginTop: '14px' }}>
            We are particularly passionate about suicide prevention, housing security in AuDHD and autism populations, and supporting LGBTQIA+ youth. Reach out to discuss sponsorship deck requests, equipment contributions, or media inquiries.
          </p>

          {submitted ? (
            <div className="success-banner">
              Message received. Thank you for connecting with our campaign team.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="adventure-form">
              <div className="form-split">
                <input 
                  type="text" 
                  placeholder="Your Name / Organization" 
                  value={formData.name} 
                  onChange={(e) => setFormData({...formData, name: e.target.value})} 
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  value={formData.email} 
                  onChange={(e) => setFormData({...formData, email: e.target.value})} 
                  required 
                />
              </div>
              <textarea 
                placeholder="Share a message, request sponsorship details, or ask a question..." 
                value={formData.message} 
                onChange={(e) => setFormData({...formData, message: e.target.value})} 
                required 
              />
              <button type="submit" className="btn-adventure primary">Send Message</button>
            </form>
          )}
        </section>

      </main>

      {/* Footer */}
      <footer className="adventure-footer">
        <p>© 2030 Zero to GGR Campaign. Radical Stubborn Endurance. Brinnon, WA[cite: 1].</p>
      </footer>
    </div>
  );
}