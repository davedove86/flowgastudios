import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { navLinks } from "@/lib/content";
import { Logo } from "./logo";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <header className="nav">
      <div className="nav-inner">
        <Logo />
        <nav className={`nav-links${open ? " is-open" : ""}`} aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`nav-link${pathname === link.href || pathname.startsWith(link.href + "/") ? " is-active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-icon" aria-hidden>
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>
    </header>
  );
}
