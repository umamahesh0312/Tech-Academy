import { whyChooseUs } from '../data/content'

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="why-us">
      <div className="section-inner">
        <h2 className="section-heading">Why engineering colleges choose us</h2>
        <div className="why-us__grid">
          {whyChooseUs.map((item) => (
            <div key={item.title} className="why-us__card">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
