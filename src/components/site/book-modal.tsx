import { useState, type FormEvent } from "react";

export function BookModal({
  className,
  onClose,
}: {
  className: string;
  onClose: () => void;
}) {
  const [done, setDone] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const booking = {
      className,
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      notes: String(data.get("notes") || ""),
      at: new Date().toISOString(),
    };
    const existing = JSON.parse(localStorage.getItem("flowga-bookings") || "[]") as unknown[];
    localStorage.setItem("flowga-bookings", JSON.stringify([booking, ...existing]));
    setDone(true);
  }

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-labelledby="book-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "none",
            border: 0,
            fontSize: "1.5rem",
            color: "var(--color-brown)",
            width: 44,
            height: 44,
          }}
        >
          ×
        </button>
        {done ? (
          <div style={{ textAlign: "center" }}>
            <h2 id="book-title" style={{ fontSize: "2rem", marginBottom: "1rem" }}>
              Request received
            </h2>
            <p>
              Thank you! Your submission has been received. We’ll follow up about availability
              for {className}.
            </p>
            <div style={{ marginTop: "1.5rem" }}>
              <button type="button" className="btn btn-primary" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        ) : (
          <>
            <h2 id="book-title" style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>
              Request to book
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Please submit your details and we’ll followup to let you know if we have
              availablity for the selected class
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
              <label className="field">
                Special Requests
                <textarea name="notes" />
              </label>
              <button type="submit" className="btn btn-primary btn-full">
                Book Class
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
