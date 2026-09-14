import { processSteps } from '../data/content'

export default function HowWeWork() {
  return (
    <section className="process">
      <div className="section-inner">
        <h2 className="section-heading">How we work</h2>
        <p className="section-lead">A structured, four-stage engagement built around each college's academic calendar.</p>

        <div className="process__timeline">
          {processSteps.map((step, i) => (
            <div key={step.number} className="process__step">
              <div className="process__marker">
                <span>{step.number}</span>
                {i < processSteps.length - 1 && <span className="process__connector" aria-hidden="true" />}
              </div>
              <div className="process__content">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
