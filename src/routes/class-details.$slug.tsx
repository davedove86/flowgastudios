import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { getClass, getInstructor } from "@/lib/content";
import { BookModal } from "@/components/site/book-modal";
import { SocialLinks } from "@/components/site/social-links";

export const Route = createFileRoute("/class-details/$slug")({
  component: ClassDetailsPage,
  head: ({ params }) => {
    const item = getClass(params.slug);
    return {
      meta: [{ title: item ? item.name : "Class" }],
    };
  },
});

function ClassDetailsPage() {
  const { slug } = Route.useParams();
  const yogaClass = getClass(slug);
  const [open, setOpen] = useState(false);
  if (!yogaClass) throw notFound();
  const instructor = getInstructor(yogaClass.instructorId);

  return (
    <>
      <section className="sand" style={{ paddingTop: "7.5rem" }}>
        <div className="pad-x">
          <div className="container-lg section-y split split-start">
            <div>
              <img src={yogaClass.image} alt={yogaClass.name} className="media-round" />
            </div>
            <div>
              <h1>{yogaClass.name}</h1>
              <p className="body-lg" style={{ marginTop: "1.25rem" }}>
                {yogaClass.summary}
              </p>
              <div className="tag-row">
                {yogaClass.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="meta-grid">
                <div>
                  <div className="meta-label">Where</div>
                  <div style={{ fontWeight: 600 }}>{yogaClass.location}</div>
                </div>
                <div>
                  <div className="meta-label">Date</div>
                  <div style={{ fontWeight: 600 }}>{yogaClass.month}</div>
                </div>
                <div>
                  <div className="meta-label">Instructor</div>
                  <div style={{ fontWeight: 600 }}>
                    {instructor?.firstName} {instructor?.lastName}
                  </div>
                </div>
                <div>
                  <div className="meta-label">Time</div>
                  <div style={{ fontWeight: 600 }}>{yogaClass.time}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cream">
        <div className="pad-x">
          <div className="container-md section-y">
            <h2 className="kicker-h2">
              The {yogaClass.name} Class
            </h2>
            {yogaClass.body.map((para) => (
              <p key={para.slice(0, 24)} className="body-lg" style={{ marginBottom: "1.25rem" }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {instructor ? (
        <section className="sand">
          <div className="pad-x">
            <div className="container-lg section-y">
              <div className="eyebrow">Your Instructor</div>
              <article className="team-row" style={{ marginTop: "1.5rem" }}>
                <img src={instructor.image} alt="" className="team-thumb" />
                <div>
                  <div style={{ fontWeight: 600, fontSize: "1.25rem" }}>
                    {instructor.firstName} {instructor.lastName}
                  </div>
                  <div className="body-lg">{instructor.role}</div>
                  <p style={{ marginTop: "0.75rem" }}>{instructor.bio}</p>
                  <SocialLinks />
                </div>
              </article>
            </div>
          </div>
        </section>
      ) : null}

      <section className="cream">
        <div className="pad-x">
          <div className="container-md section-y">
            <ul className="checklist">
              <li>
                <CheckIcon />
                <p>Increase Vitality</p>
              </li>
              <li>
                <CheckIcon />
                <p>Reduce Tension and Stress</p>
              </li>
              <li>
                <CheckIcon />
                <p>Promote Balance</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="sand">
        <div className="pad-x">
          <div className="container-md section-y" style={{ textAlign: "center" }}>
            <h2 className="kicker-h2">Book your class today</h2>
            <p className="body-lg">Don’t miss your opportunity to improve your life today</p>
            <div style={{ marginTop: "1.5rem" }}>
              <button type="button" className="btn btn-primary" onClick={() => setOpen(true)}>
                Book Class
              </button>
            </div>
            <p style={{ marginTop: "1.25rem" }}>
              Looking for another style?{" "}
              <Link to="/classes" style={{ textDecoration: "underline" }}>
                See all classes
              </Link>
            </p>
          </div>
        </div>
      </section>

      {open ? <BookModal className={yogaClass.name} onClose={() => setOpen(false)} /> : null}
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
