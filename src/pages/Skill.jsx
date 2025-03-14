import { useInView } from "react-intersection-observer";

export default function Skill() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <section ref={ref} id="Skill" className="page">
      <h1 style={{color: "white"}}>Skills are here</h1>
      <p style={{color: "white"}} >These are my skills</p>
    </section>
  );
}
