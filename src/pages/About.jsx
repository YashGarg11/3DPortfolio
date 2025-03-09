import { useInView } from "react-intersection-observer";

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} id="about" className="page" 
    >
      <h1>About Me</h1>
      <p>This is the About section.</p>
    </section>
  );
}
