import { useState } from "react";
import { testimonials } from "@/lib/content";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];

  function prev() {
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  }
  function next() {
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  }

  return (
    <section className="sand">
      <div className="pad-x">
        <div className="container-lg section-y">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2>What customer say</h2>
            <p style={{ marginTop: "0.75rem" }}>Flowga has help change many lives</p>
          </div>
          <div className="testimonial">
            <p className="testimonial-quote">“{item.quote}”</p>
            <img src={item.image} alt="" className="testimonial-photo" />
            <p style={{ fontWeight: 600 }}>{item.name}</p>
            <p>{item.role}</p>
          </div>
          <div className="slider-nav">
            <button type="button" className="slider-arrow" onClick={prev} aria-label="Previous testimonial">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M3.31066 8.75001L9.03033 14.4697L7.96967 15.5303L0.439339 8.00001L7.96967 0.469676L9.03033 1.53034L3.31066 7.25001L15.5 7.25L15.5 8.75L3.31066 8.75001Z"
                  fill="currentColor"
                />
              </svg>
            </button>
            <div className="dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`dot${i === index ? " is-on" : ""}`}
                  aria-label={`Show testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            <button type="button" className="slider-arrow" onClick={next} aria-label="Next testimonial">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
                <path
                  d="M12.6893 7.25L6.96967 1.53033L8.03033 0.469666L15.5607 8L8.03033 15.5303L6.96967 14.4697L12.6893 8.75H0.5V7.25H12.6893Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
