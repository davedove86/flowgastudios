import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: () => (
    <Legal
      title="Privacy Policy"
      body="Flowga Studios respects your privacy. Class bookings and handbook purchases made on this site are stored only on your device. We do not sell personal information. Studio addresses shown on the site are sample locations for this experience."
    />
  ),
  head: () => ({ meta: [{ title: "Privacy Policy" }] }),
});

function Legal({ title, body }: { title: string; body: string }) {
  return (
    <section className="cream" style={{ paddingTop: "7.5rem", minHeight: "70vh" }}>
      <div className="pad-x">
        <div className="container-md section-y">
          <h1>{title}</h1>
          <p className="body-lg" style={{ marginTop: "1.25rem" }}>
            {body}
          </p>
        </div>
      </div>
    </section>
  );
}
