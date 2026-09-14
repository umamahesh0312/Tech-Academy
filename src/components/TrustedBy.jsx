import { institutions } from '../data/content'

export default function TrustedBy() {
  return (
    <section id="partners" className="trusted">
      <div className="section-inner">
        <h2 className="section-heading section-heading--sm">Trusted by engineering institutions</h2>
        <p className="section-lead">
          Building stronger technical talent pipelines through industry-focused training partnerships.
        </p>

        <div className="trusted__grid">
          {institutions.map((name) => (
            <div key={name} className="trusted__card">{name}</div>
          ))}
        </div>

        <p className="trusted__note">
          Institution names shown are editable placeholders for illustration and can be
          updated once partnerships are confirmed.
        </p>
      </div>
    </section>
  )
}
