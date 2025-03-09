import { useInView } from "react-intersection-observer";

export default function Skill() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} id="Skill" className="page">
      <h1>Skills are here</h1>
      <p>These are my skills</p>
    </section>
  );
}
