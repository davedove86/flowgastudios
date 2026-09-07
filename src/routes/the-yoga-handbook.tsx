import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/the-yoga-handbook")({
  component: HandbookPage,
  head: () => ({
    meta: [{ title: "The Yoga Handbook" }],
  }),
});

const excerpts = [
  {
    id: "1",
    label: "Excerpt 1",
    image: "/images/Handbook-Tabs-1.jpeg",
    kicker: "Discover",
    title: "Explore the World of Yoga",
    body: "Learn about the history, philosophy, and principles of yoga in this comprehensive section.",
  },
  {
    id: "2",
    label: "Excerpt 2",
    image: "/images/Handbook-Tabs-2.jpg",
    kicker: "Tagline",
    title: "Medium length section heading goes here",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  },
  {
    id: "3",
    label: "Excerpt 3",
    image: "/images/Handbook-Tabs-3.jpg",
    kicker: "Discover",
    title: "Explore the World of Yoga",
    body: "Learn about the history, philosophy, and principles of yoga in this comprehensive section.",
  },
];

const features = [
  "High Image Quality",
  "Multiple Digital Formats",
  "Available in English, Spanish",
  "197 full Color Pages",
];

function HandbookPage() {
  const [tab, setTab] = useState(0);
  const excerpt = excerpts[tab];

  return (
    <>
      <section className="sand" style={{ paddingTop: "7.5rem" }}>
        <div className="pad-x">
          <div className="container-lg section-y split">
            <div className="stagger">
              <h1>The Handbook That Can Change Your Life</h1>
              <p className="body-lg" style={{ marginTop: "1.25rem" }}>
                The Yoga Handbook is your ultimate guide to all things yoga. Whether you're a
                beginner or an experienced yogi, this comprehensive resource will help you deepen
                your practice, explore new techniques, and find inspiration from our team of expert
                instructors.
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <a href="#buy" className="btn btn-primary">
                  Get The Book
                </a>
              </div>
            </div>
            <div>
              <img
                src="/images/Handbook-Hero.jpeg"
                alt="The Yoga Handbook"
                className="media-round"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="cream">
        <div className="pad-x">
          <div className="container-lg section-y">
            <div className="excerpt-tabs">
              {excerpts.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  className={`excerpt-tab${i === tab ? " is-on" : ""}`}
                  onClick={() => setTab(i)}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <img src={excerpt.image} alt="Book on a wooden table" className="excerpt-img" />
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <div className="container-md">
                <div className="eyebrow">{excerpt.kicker}</div>
                <h2 className="kicker-h2">{excerpt.title}</h2>
                <p className="body-lg">{excerpt.body}</p>
                <div style={{ marginTop: "1.5rem" }}>
                  <a href="#buy" className="btn btn-secondary">
                    Get The Book
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="buy" className="sand">
        <div className="pad-x">
          <div className="container-md section-y">
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <div className="eyebrow">Get The Book</div>
              <h2 className="kicker-h2">Download Your Copy Today</h2>
              <p className="body-lg">
                The Yoga handbook is immediately available for download in an E-book format
              </p>
            </div>
            <div className="price-card">
              <div>Single Payment</div>
              <div
                className="font-display"
                style={{ fontSize: "clamp(3rem, 8vw, 5rem)", lineHeight: 1.1, margin: "0.35rem 0 1.5rem" }}
              >
                £29
              </div>
              <div style={{ display: "grid", gap: "1rem", textAlign: "left", marginBottom: "2rem" }}>
                {features.map((f) => (
                  <div key={f} style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
                    <svg className="check" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/checkout" className="btn btn-primary btn-full">
                Buy now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="cream">
        <div className="pad-x">
          <div className="container-lg section-y split">
            <div>
              <h2 className="kicker-h2">The Yoga Handbook</h2>
              <p className="body-lg">
                Discover the ultimate guide to yoga with our comprehensive handbook. Learn from
                multiple instructors and find the perfect class for your needs. Take your yoga
                practice to the next level with our expert tips and techniques.
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <Link to="/checkout" className="btn btn-primary">
                  Buy
                </Link>
              </div>
            </div>
            <div>
              <img src="/images/Handbook-Tabs-1.jpeg" alt="The Yoga Handbook" className="media-round" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
