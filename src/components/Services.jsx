import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="section-inner">
        <p className="section-eyebrow">What we deliver</p>
        <h2 className="section-heading">Our training & development services</h2>
        <p className="section-lead">
          A full stack of technical training services designed for engineering
          institutions, from classroom fundamentals to placement readiness.
        </p>

        <div className="services__list">
          {services.map((s) => (
            <article key={s.code} className="service-row">
              <span className="service-row__code">{s.code}</span>
              <div className="service-row__body">
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
              <a href="#contact" className="service-row__link">Discuss this track <span aria-hidden="true">&#8594;</span></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
