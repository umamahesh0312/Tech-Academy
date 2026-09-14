import { useEffect, useRef, useState } from 'react'
import { impactStats } from '../data/content'

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      setDisplay(value)
      return
    }

    const el = ref.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true
            const duration = 1200
            const start = performance.now()
            const tick = (now) => {
              const progress = Math.min((now - start) / duration, 1)
              setDisplay(Math.floor(progress * value))
              if (progress < 1) requestAnimationFrame(tick)
              else setDisplay(value)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.4 }
    )
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className="stats__value">
      {display}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="section-inner">
        <h2 className="section-heading section-heading--onaccent">Our impact so far</h2>
        <div className="stats__grid">
          {impactStats.map((s) => (
            <div key={s.label} className="stats__item">
              <Counter value={s.value} suffix={s.suffix} />
              <span className="stats__label">{s.label}</span>
            </div>
          ))}
        </div>
        <p className="stats__note">
          Figures shown are editable placeholders and should be replaced with verified numbers.
        </p>
      </div>
    </section>
  )
}
