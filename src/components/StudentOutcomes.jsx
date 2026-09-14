import { outcomeJourney, outcomeCards } from '../data/content'

export default function StudentOutcomes() {
  return (
    <section className="outcomes">
      <div className="section-inner">
        <h2 className="section-heading">From classroom learning to industry readiness</h2>

        <div className="outcomes__journey">
          {outcomeJourney.map((step, i) => (
            <span key={step} className="outcomes__journey-item">
              {step}
              {i < outcomeJourney.length - 1 && <span className="outcomes__arrow" aria-hidden="true">→</span>}
            </span>
          ))}
        </div>

        <div className="outcomes__grid">
          {outcomeCards.map((c) => (
            <div key={c} className="outcomes__card">{c}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
