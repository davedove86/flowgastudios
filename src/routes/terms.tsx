import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({ meta: [{ title: "Terms of Service" }] }),
});

function TermsPage() {
  return (
    <section className="cream" style={{ paddingTop: "7.5rem", minHeight: "70vh" }}>
      <div className="pad-x">
        <div className="container-md section-y">
          <h1>Terms of Service</h1>
          <p className="body-lg" style={{ marginTop: "1.25rem" }}>
            Classes are offered subject to studio availability. Bookings submitted through this
            site are requests, not confirmed reservations. The Yoga Handbook checkout is a
            demonstration purchase and does not process real payments.
          </p>
        </div>
      </div>
    </section>
  );
}
