import { aboutStats } from '../data/content'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-inner about__inner">
        <div className="about__text">
          <h2 className="section-heading">Building industry-ready talent for tomorrow</h2>
          <p>
            Srinath Tech Academy is a technical training and education services
            organization focused on helping engineering institutions bridge the gap
            between academic learning and industry expectations.
          </p>
          <p>
            We collaborate with colleges to design and deliver practical,
            industry-oriented training programs that help students strengthen their
            technical knowledge, problem-solving abilities, development skills, and
            career readiness.
          </p>
          <p>
            Our trainers combine technical expertise with hands-on teaching
            methodologies to create meaningful learning experiences for students.
          </p>
        </div>

        <div className="about__stats">
          {aboutStats.map((s) => (
            <div key={s.label} className="about__stat">
              <span className="about__stat-value">{s.value}</span>
              <span className="about__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
