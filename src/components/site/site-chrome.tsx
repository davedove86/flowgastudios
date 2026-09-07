import { type ReactNode, useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { CtaBanner } from "./cta-banner";

const LEGAL = new Set(["/privacy", "/terms", "/cookies"]);

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const showCta = !LEGAL.has(pathname);
  const [intro, setIntro] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0, on: false });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (fine) document.body.classList.add("has-custom-cursor");
    const seen = sessionStorage.getItem("flowga-intro");
    if (!seen) {
      setIntro(true);
      const t = window.setTimeout(() => {
        setIntro(false);
        sessionStorage.setItem("flowga-intro", "1");
      }, 1800);
      return () => window.clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;
    function move(e: MouseEvent) {
      setCursor({ x: e.clientX, y: e.clientY, on: true });
    }
    function leave() {
      setCursor((c) => ({ ...c, on: false }));
    }
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <main>{children}</main>
      {showCta ? <CtaBanner /> : null}
      <Footer />
      {intro ? (
        <div className="intro" aria-hidden>
          <div className="intro-letters">
            {"Breath".split("").map((ch, i) => (
              <span key={i}>{ch}</span>
            ))}
          </div>
        </div>
      ) : null}
      <div
        className={`cursor-dot${cursor.on ? " is-on" : ""}`}
        style={{ left: cursor.x, top: cursor.y }}
        aria-hidden
      />
    </>
  );
}
