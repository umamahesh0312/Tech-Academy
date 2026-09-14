export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__kicker"><span className="hero__kicker-dot" aria-hidden="true" /> Technical training partner for engineering institutions</p>
          <h1 className="hero__headline">
            Empowering engineering students with industry-ready technical skills
          </h1>
          <p className="hero__sub">
            Srinath Tech Academy partners with engineering colleges to deliver expert-led
            technical training, practical workshops, and placement-oriented skill
            development programs.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn--primary">Plan your training <span aria-hidden="true">&#8594;</span></a>
            <a href="#programs" className="btn btn--ghost">Explore programs</a>
          </div>
          <div className="hero__audience" aria-label="Choose your path">
            <a href="#contact" className="hero__audience-card">
              <span className="hero__audience-label">For colleges</span>
              <span>Build a tailored roadmap <span aria-hidden="true">&#8594;</span></span>
            </a>
            <a href="#programs" className="hero__audience-card">
              <span className="hero__audience-label">For students</span>
              <span>Find your skill track <span aria-hidden="true">&#8594;</span></span>
            </a>
          </div>
          <ul className="hero__trust">
            <li>Industry-Oriented Training</li>
            <li>Expert Trainers</li>
            <li>Practical Learning</li>
            <li>Placement Focused</li>
          </ul>
        </div>

        <div className="hero__visual">
          <svg viewBox="0 0 480 420" className="hero__diagram" role="img" aria-label="Diagram showing Srinath Tech Academy connecting engineering colleges with industry">
            <line x1="70" y1="90" x2="240" y2="210" className="link-line" />
            <line x1="240" y1="210" x2="410" y2="90" className="link-line" />
            <line x1="240" y1="210" x2="240" y2="340" className="link-line" />

            <g>
              <rect x="10" y="55" width="120" height="70" rx="14" className="node-card node-card--light" />
              <text x="70" y="85" textAnchor="middle" className="node-title">Engineering</text>
              <text x="70" y="104" textAnchor="middle" className="node-title">Colleges</text>
            </g>

            <g>
              <rect x="350" y="55" width="120" height="70" rx="14" className="node-card node-card--light" />
              <text x="410" y="85" textAnchor="middle" className="node-title">Industry</text>
              <text x="410" y="104" textAnchor="middle" className="node-title">Requirements</text>
            </g>

            <g>
              <rect x="170" y="175" width="140" height="80" rx="16" className="node-card node-card--accent" />
              <text x="240" y="205" textAnchor="middle" className="node-title node-title--onaccent">Srinath Tech</text>
              <text x="240" y="224" textAnchor="middle" className="node-title node-title--onaccent">Academy</text>
            </g>

            <g>
              <rect x="180" y="325" width="120" height="70" rx="14" className="node-card node-card--dark" />
              <text x="240" y="355" textAnchor="middle" className="node-title node-title--onaccent">Job-Ready</text>
              <text x="240" y="374" textAnchor="middle" className="node-title node-title--onaccent">Students</text>
            </g>

            <circle cx="70" cy="125" r="4" className="node-dot" />
            <circle cx="410" cy="125" r="4" className="node-dot" />
          </svg>
        </div>
      </div>
    </section>
  )
}
