import { brand, contact, footerLinks } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="section-inner footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__name">{brand.name}</span>
            <p>{brand.tagline}</p>
            <div className="footer__social" aria-label="Social media links">
              <a href="#" aria-label="LinkedIn">in</a>
              <a href="#" aria-label="Instagram">ig</a>
              <a href="#" aria-label="YouTube">yt</a>
            </div>
          </div>

          <div className="footer__columns">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title} className="footer__col">
                <h4>{title}</h4>
                <ul>
                  {links.map((l) => <li key={l}><a href="#">{l}</a></li>)}
                </ul>
              </div>
            ))}
            <div className="footer__col">
              <h4>Contact</h4>
              <ul>
                <li><a href={`mailto:${contact.email}`}>{contact.email}</a></li>
                <li><a href={`tel:${contact.phone.replace(/\s/g, '')}`}>{contact.phone}</a></li>
                <li><span>{contact.location}</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© 2026 {brand.name}. All Rights Reserved.</span>
          <span className="footer__legal">
            <a href="#">Privacy Policy</a>
            <span aria-hidden="true">|</span>
            <a href="#">Terms & Conditions</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
