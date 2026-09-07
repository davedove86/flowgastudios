import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  component: CookiesPage,
  head: () => ({ meta: [{ title: "Cookies Settings" }] }),
});

function CookiesPage() {
  return (
    <section className="cream" style={{ paddingTop: "7.5rem", minHeight: "70vh" }}>
      <div className="pad-x">
        <div className="container-md section-y">
          <h1>Cookies Settings</h1>
          <p className="body-lg" style={{ marginTop: "1.25rem" }}>
            This studio site uses only essential storage on your device: a short intro animation
            flag, class booking requests, and handbook checkout confirmation. No advertising
            cookies are set.
          </p>
        </div>
      </div>
    </section>
  );
}
