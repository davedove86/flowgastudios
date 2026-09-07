import { Link } from "@tanstack/react-router";
import { footerLinks } from "@/lib/content";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container-lg">
        <div className="footer-top">
          <Logo onDark />
          <nav className="footer-links" aria-label="Footer">
            {footerLinks.map((link) => (
              <Link key={link.href} to={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Flowga. All rights reserved.</p>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookies Settings</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
