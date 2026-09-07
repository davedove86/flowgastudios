import { Link } from "@tanstack/react-router";
import { getInstructor, type YogaClass } from "@/lib/content";

export function ClassCard({ yogaClass }: { yogaClass: YogaClass }) {
  const instructor = getInstructor(yogaClass.instructorId);

  return (
    <Link
      to="/class-details/$slug"
      params={{ slug: yogaClass.slug }}
      className="class-card"
      style={{ backgroundImage: `url(${yogaClass.image})` }}
    >
      <div className="class-card-grad" />
      <div className="class-card-top">
        <div className="body-lg">{yogaClass.name}</div>
        <div style={{ fontSize: "0.875rem" }}>{yogaClass.level}</div>
      </div>
      <div className="class-card-overlay">
        <div style={{ display: "flex", gap: 5 }}>
          <span className="body-lg">With</span>
          <span className="body-lg">{instructor?.firstName}</span>
        </div>
        <div style={{ fontSize: "0.875rem" }}>{yogaClass.month}</div>
        <div style={{ height: "1.5rem" }} />
        <span className="btn btn-ghost-light btn-full">Learn More</span>
      </div>
    </Link>
  );
}
