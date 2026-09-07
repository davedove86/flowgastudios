import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { classes, instructors } from "@/lib/content";
import { ClassCard } from "@/components/site/class-card";
import { SocialLinks } from "@/components/site/social-links";

export const Route = createFileRoute("/classes")({
  component: ClassesPage,
  head: () => ({
    meta: [{ title: "Our Classes" }],
  }),
});

const filters = [
  { id: "all", label: "All Classes" },
  { id: "danny", label: "Danny" },
  { id: "karen", label: "Karen" },
  { id: "jasmine", label: "Jasmine" },
  { id: "rona", label: "Rona" },
];

function ClassesPage() {
  const [filter, setFilter] = useState("all");
  const visible = useMemo(
    () => (filter === "all" ? classes : classes.filter((c) => c.instructorId === filter)),
    [filter],
  );

  return (
    <>
      <header className="hero-photo">
        <div className="container-md stagger">
          <h1>Discover Our Unique Diverse Classes</h1>
          <p className="body-lg" style={{ marginTop: "1.25rem" }}>
            Whether you're a beginner or an experienced yogi, our experienced instructors will
            guide you through a transformative practice that nurtures both body and mind.
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <a href="#classes" className="btn btn-primary">
              Explore
            </a>
          </div>
        </div>
      </header>

      <section id="classes" className="cream">
        <div className="pad-x">
          <div className="container-lg section-y">
            <div style={{ textAlign: "center", marginBottom: "2rem" }}>
              <div className="eyebrow">Discover</div>
              <h2 className="kicker-h2">Classes</h2>
              <p className="body-lg">Join us for a variety of yoga classes led by experienced instructors.</p>
            </div>
            <div className="tabs" role="tablist">
              {filters.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={filter === tab.id}
                  className={`tab${filter === tab.id ? " is-on" : ""}`}
                  onClick={() => setFilter(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="class-grid">
              {visible.map((item) => (
                <ClassCard key={item.slug} yogaClass={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sand">
        <div className="pad-x">
          <div className="container-lg section-y">
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <div className="eyebrow">Experienced</div>
              <h2 className="kicker-h2">Our Instructors</h2>
              <p className="body-lg">Discover the expertise of our top-notch instructors</p>
            </div>
            <div style={{ display: "grid", gap: "3rem" }}>
              {instructors.map((person) => (
                <article key={person.id} className="team-row">
                  <img src={person.image} alt="" className="team-thumb" />
                  <div>
                    <div className="body-lg" style={{ fontWeight: 600, fontSize: "1.25rem" }}>
                      {person.firstName}
                    </div>
                    <div className="body-lg">{person.role}</div>
                    <p style={{ marginTop: "0.75rem" }}>{person.bio}</p>
                    <SocialLinks />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cream">
        <div className="pad-x">
          <div className="container-lg section-y split">
            <div>
              <img src="/images/Classes-About.jpg" alt="Yoga class" className="media-round" />
            </div>
            <div>
              <h2 className="kicker-h2">Why Consider choosing The Flowga Classes?</h2>
              <p className="body-lg">
                Our yoga classes offer a wide range of benefits for both the body and mind. From
                increased flexibility and strength to stress relief and improved focus, our
                experienced instructors will guide you through a transformative practice that will
                leave you feeling refreshed and rejuvenated.
              </p>
              <div style={{ marginTop: "1.5rem" }}>
                <Link to="/instructors" className="btn btn-secondary">
                  Our Instructors
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
