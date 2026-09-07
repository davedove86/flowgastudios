import { Link } from "@tanstack/react-router";

export function Logo({ onDark = false }: { onDark?: boolean }) {
  return (
    <Link to="/" className="logo" aria-label="Flowga home">
      <span className="logo-mark" aria-hidden />
      <span className="logo-word" aria-hidden />
      <span className="sr-only">{onDark ? "Flowga" : "Flowga"}</span>
    </Link>
  );
}
