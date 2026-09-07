import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
  head: () => ({
    meta: [{ title: "Checkout — The Yoga Handbook" }],
  }),
});

function CheckoutPage() {
  const [done, setDone] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    localStorage.setItem(
      "flowga-handbook",
      JSON.stringify({
        name: String(data.get("name") || ""),
        email: String(data.get("email") || ""),
        at: new Date().toISOString(),
      }),
    );
    setDone(true);
  }

  return (
    <section className="sand" style={{ paddingTop: "7.5rem", minHeight: "80vh" }}>
      <div className="pad-x">
        <div className="container-md section-y">
          {done ? (
            <div className="price-card">
              <h1 style={{ fontSize: "2.6rem" }}>You’re in</h1>
              <p className="body-lg" style={{ marginTop: "1rem" }}>
                Your copy of The Yoga Handbook is ready. This is a studio demo checkout — no
                payment was taken.
              </p>
              <div style={{ marginTop: "1.5rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <Link to="/the-yoga-handbook" className="btn btn-primary">
                  Back to the book
                </Link>
                <Link to="/classes" className="btn btn-secondary">
                  Browse classes
                </Link>
              </div>
            </div>
          ) : (
            <div className="price-card" style={{ textAlign: "left" }}>
              <h1 style={{ fontSize: "2.6rem" }}>Checkout</h1>
              <p className="body-lg" style={{ margin: "0.75rem 0 1.5rem" }}>
                The Yoga Handbook — single payment of £29
              </p>
              <form onSubmit={submit}>
                <label className="field">
                  Name
                  <input name="name" required autoComplete="name" />
                </label>
                <label className="field">
                  Email
                  <input name="email" type="email" required autoComplete="email" />
                </label>
                <button type="submit" className="btn btn-primary btn-full">
                  Complete purchase
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
