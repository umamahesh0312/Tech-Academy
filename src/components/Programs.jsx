import { programCategories } from '../data/content'

export default function Programs() {
  return (
    <section id="programs" className="programs">
      <div className="section-inner">
        <p className="section-eyebrow">Learning tracks</p>
        <h2 className="section-heading">Industry-relevant training programs</h2>
        <p className="section-lead">
          Programs are grouped by track and can be customized per department, semester,
          or student skill level.
        </p>

        <div className="programs__grid">
          {programCategories.map((cat) => (
            <div key={cat.title} className="program-category">
              <h3>{cat.title}</h3>
              <div className="program-category__tags">
                {cat.items.map((item) => (
                  <span key={item} className="program-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
