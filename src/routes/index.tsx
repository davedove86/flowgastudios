import { createFileRoute, Link } from "@tanstack/react-router";
import { locations } from "@/lib/content";
import { Testimonials } from "@/components/site/testimonials";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Home,
  head: () => ({
    meta: [{ title: "flowga Studios" }],
  }),
});

function osmSrc(lat: number, lng: number) {
  const d = 0.03;
  return `https://www.openstreetmap.org/export/embed.html?bbox=${lng - d}%2C${lat - d}%2C${lng + d}%2C${lat + d}&layer=mapnik&marker=${lat}%2C${lng}`;
}

function Home() {
  const [loc, setLoc] = useState(0);
  const current = locations[loc];

  return (
    <>
      <section className="hero-home">
        <div className="hero-grid">
          <div className="hero-copy stagger">
            <h1>
              Discover the <span className="title-highlight">Perfect</span> Yoga Class for You
            </h1>
            <p>
              Welcome to our yoga studio, where you'll find a variety of classes and experienced
              instructors to guide you on your yoga journey.
            </p>
            <div style={{ marginTop: "1.5rem" }}>
              <Link to="/classes" className="btn btn-primary">
                Explore
              </Link>
            </div>
          </div>
          <div className="hero-visual">
            <img src="/images/Hero-Back.png" alt="" className="hero-back" />
            <img
              src="/images/Hero-Front.png"
              alt="Man and woman doing yoga"
              className="hero-front"
            />
          </div>
        </div>
        <div className="wave-wrap">
          <div className="wave-track" />
        </div>
      </section>

      <section className="cream">
        <div className="pad-x">
          <div className="container-lg section-y split">
            <div>
              <img src="/images/Home-About.png" alt="Woman doing yoga" className="media-round" />
            </div>
            <div>
              <div className="eyebrow">Empower</div>
              <h2 className="kicker-h2">Transform Your Life Through Yoga</h2>
              <p className="body-lg">
                At our yoga studio, we believe in the power of yoga to improve physical and mental
                well-being. Join our community and experience the benefits of a regular yoga
                practice. Our experienced instructors offer a variety of classes for all levels,
                from beginners to advanced practitioners. Whether you're looking to increase
                flexibility, reduce stress, or find inner peace, we have a class for you.
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <Link to="/classes" className="btn btn-secondary">
                  See Classes
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="cream">
        <div className="pad-x">
          <div className="container-lg section-y">
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
              <div className="eyebrow eyebrow-accent">Yoga Studio</div>
              <h2 className="kicker-h2">Locations</h2>
              <p className="body-lg">Find a yoga studio near you</p>
            </div>
            <div className="locations-grid">
              <div className="loc-list">
                {locations.map((item, i) => (
                  <button
                    key={item.city}
                    type="button"
                    className={`loc-btn${i === loc ? " is-on" : ""}`}
                    onClick={() => setLoc(i)}
                  >
                    <h3>{item.city}</h3>
                    <div>
                      {item.address}
                      <br />
                      {item.region}
                    </div>
                  </button>
                ))}
              </div>
              <div>
                <iframe
                  title={`${current.city} studio map`}
                  className="map-frame"
                  src={osmSrc(current.lat, current.lng)}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
