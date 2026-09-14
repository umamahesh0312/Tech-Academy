import { useState } from 'react'
import { contact } from '../data/content'

const initialForm = {
  name: '',
  organization: '',
  designation: '',
  email: '',
  phone: '',
  requirement: '',
  message: '',
}

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Backend wiring comes later — for now this confirms the enquiry locally.
    setSubmitted(true)
  }

  return (
    <section id="contact" className="contact">
      <div className="section-inner contact__inner">
        <div className="contact__intro">
          <p className="section-eyebrow">Start here</p>
          <h2 className="section-heading">Let's start a conversation</h2>
          <p className="section-lead">Tell us what your students or faculty need. We will help you shape the right program and next step.</p>

          <ul className="contact__details">
            <li>
              <span className="contact__label">Email</span>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            </li>
            <li>
              <span className="contact__label">Phone</span>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a>
            </li>
            <li>
              <span className="contact__label">Location</span>
              <span>{contact.location}</span>
            </li>
          </ul>
        </div>

        <div className="contact__form-wrap">
          {submitted ? (
            <div className="contact__success" role="status">
              <h3>Enquiry received</h3>
              <p>Thanks for reaching out — our team will get back to you shortly.</p>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="contact__row">
                <label>
                  Full Name
                  <input name="name" value={form.name} onChange={handleChange} required />
                </label>
                <label>
                  College / Organization
                  <input name="organization" value={form.organization} onChange={handleChange} required />
                </label>
              </div>
              <div className="contact__row">
                <label>
                  Designation
                  <input name="designation" value={form.designation} onChange={handleChange} />
                </label>
                <label>
                  Email Address
                  <input type="email" name="email" value={form.email} onChange={handleChange} required />
                </label>
              </div>
              <div className="contact__row">
                <label>
                  Phone Number
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} autoComplete="tel" />
                </label>
                <label>
                  Training Requirement
                  <select name="requirement" value={form.requirement} onChange={handleChange}>
                    <option value="">Select a focus area</option>
                    <option>Technical training</option>
                    <option>AI & Machine Learning</option>
                    <option>Full Stack Development</option>
                    <option>Placement training</option>
                    <option>Faculty development</option>
                    <option>Workshop or bootcamp</option>
                  </select>
                </label>
              </div>
              <label>
                Message
                <textarea name="message" rows="4" value={form.message} onChange={handleChange} />
              </label>
              <button type="submit" className="btn btn--primary">Request a consultation <span aria-hidden="true">&#8594;</span></button>
              <p className="contact__form-note">We usually respond within one business day.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
