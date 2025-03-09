import { useInView } from "react-intersection-observer";

export default function Projects() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} id="Project" className="page" 
    >
      <h1>Projects are here</h1>
      <p>These are my projects</p>
    </section>
  );
}
