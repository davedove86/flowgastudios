import { Link } from "@tanstack/react-router";

export function CtaBanner() {
  return (
    <section className="accent-band">
      <div className="pad-x">
        <div className="container-md section-y" style={{ textAlign: "center" }}>
          <h2 className="text-color-white" style={{ color: "var(--color-cream)", marginBottom: "1rem" }}>
            Elevate Your Practice
          </h2>
          <p className="body-lg" style={{ color: "var(--color-cream)" }}>
            Discover our premium classes!
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <Link to="/classes" className="btn btn-on-dark">
              Explore
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
