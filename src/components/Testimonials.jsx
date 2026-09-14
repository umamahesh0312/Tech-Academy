import { testimonials } from '../data/content'

export default function Testimonials() {
  return (
    <section className="testimonials">
      <div className="section-inner">
        <h2 className="section-heading">What our academic partners say</h2>
        <p className="section-lead">Placeholder testimonials — replace with real, attributed quotes as partnerships are confirmed.</p>

        <div className="testimonials__grid">
          {testimonials.map((t, i) => (
            <figure key={i} className="testimonial-card">
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption>
                <span className="testimonial-card__author">{t.author}</span>
                <span className="testimonial-card__org">{t.org}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
