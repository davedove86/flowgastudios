import { createFileRoute, Link } from "@tanstack/react-router";
import { instructors } from "@/lib/content";
import { SocialLinks } from "@/components/site/social-links";
import { Testimonials } from "@/components/site/testimonials";

export const Route = createFileRoute("/instructors")({
  component: InstructorsPage,
  head: () => ({
    meta: [{ title: "Instructors" }],
  }),
});

const collageLeft = [
  "/images/Instructor-Hero-1.png",
  "/images/Instructor-Hero-2.png",
  "/images/Instructor-Hero-3.png",
];
const collageRight = [
  "/images/Instructor-Hero-4.png",
  "/images/Instructor-Hero-5.png",
  "/images/Instructor-Hero-6.png",
];

function InstructorsPage() {
  return (
    <>
      <header className="hero-collage">
        <div className="collage-col">
          {collageLeft.map((src) => (
            <img key={src} src={src} alt="" />
          ))}
        </div>
        <div className="collage-title stagger">
          <h1>Meet Our Expert Instructors</h1>
        </div>
        <div className="collage-col">
          {collageRight.map((src) => (
            <img key={src} src={src} alt="" />
          ))}
        </div>
      </header>

      <section className="cream">
        <div className="pad-x">
          <div className="container-lg section-y">
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <div className="eyebrow">Experienced</div>
              <h2 className="kicker-h2">Our Instructors</h2>
              <p className="body-lg">Meet our talented team of yoga instructors</p>
            </div>
            <div className="team-grid">
              {instructors.map((person) => (
                <article key={person.id}>
                  <div className="team-photo-wrap">
                    <img src={person.image} alt="" className="team-photo" />
                  </div>
                  <div style={{ display: "flex", gap: "0.4rem", justifyContent: "center" }}>
                    <div style={{ fontWeight: 600, fontSize: "1.25rem" }}>{person.firstName}</div>
                    <div style={{ fontWeight: 600, fontSize: "1.25rem" }}>{person.lastName}</div>
                  </div>
                  <div className="body-lg" style={{ textAlign: "center" }}>
                    {person.role}
                  </div>
                  <p style={{ textAlign: "center", marginTop: "0.75rem" }}>{person.bio}</p>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <SocialLinks />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sand">
        <div className="pad-x">
          <div className="container-lg section-y split split-start">
            <div>
              <div className="eyebrow">Yoga</div>
              <h2 className="kicker-h2">Meet Our Talented Yoga Instructors</h2>
            </div>
            <div>
              <p className="body-lg">
                Our instructors are highly trained and passionate about yoga. They bring a unique
                blend of teaching styles and expertise to our studio, ensuring that every class is
                a transformative experience. Whether you're a beginner or an advanced yogi, you'll
                find the perfect instructor to guide you on your yoga journey.
              </p>
              <ul className="checklist">
                <li>
                  <CheckIcon />
                  <p>Expertise in Various Yoga Styles</p>
                </li>
                <li>
                  <CheckIcon />
                  <p>Personalized Instruction for Every Student</p>
                </li>
                <li>
                  <CheckIcon />
                  <p>Small Class Sizes for Individual Attention</p>
                </li>
              </ul>
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
    </>
  );
}

function CheckIcon() {
  return (
    <svg className="check" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M20.3479 7.56384L9.7479 18.1638C9.65402 18.2585 9.52622 18.3117 9.3929 18.3117C9.25958 18.3117 9.13178 18.2585 9.0379 18.1638L3.6479 12.7738C3.55324 12.68 3.5 12.5522 3.5 12.4188C3.5 12.2855 3.55324 12.1577 3.6479 12.0638L4.3479 11.3638C4.44178 11.2692 4.56958 11.2159 4.7029 11.2159C4.83622 11.2159 4.96402 11.2692 5.0579 11.3638L9.3879 15.6938L18.9379 6.14384C19.1357 5.95205 19.4501 5.95205 19.6479 6.14384L20.3479 6.85384C20.4426 6.94772 20.4958 7.07552 20.4958 7.20884C20.4958 7.34216 20.4426 7.46995 20.3479 7.56384Z"
        fill="currentColor"
      />
    </svg>
  );
}
