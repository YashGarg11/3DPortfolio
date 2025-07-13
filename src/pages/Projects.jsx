import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';

const ProjectShowcase = () => {
  const cardsRef = useRef([]);

  const projects = [
    {
      id: 1,
      category: "3D Visualization",
      title: "Saturn 3D Visualization",
      description: "Interactive 3D Saturn model with realistic textures, dynamic lighting, and smooth orbital mechanics. Built with Three.js and WebGL for stunning visual performance.",
      tech: ["Three.js", "WebGL", "React", "GSAP"],
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&h=600&fit=crop",
      demoLink: "#",
      sourceLink: "https://sketchfab.com/3d-models/saturn-8f98132d421848aeb12e2165a81838b6",
      color: "blue"
    },
    {
      id: 2,
      category: "Educational",
      title: "Solar System Explorer",
      description: "Educational platform featuring interactive planetary orbits, accurate scaling, and detailed celestial body information with smooth physics simulation.",
      tech: ["React", "Three.js", "Physics", "WebGL"],
      image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=800&h=600&fit=crop",
      demoLink: "#",
      sourceLink: "#",
      color: "amber"
    },
    {
      id: 3,
      category: "Healthcare",
      title: "Hospital Management System",
      description: "Comprehensive healthcare platform with patient records, appointment scheduling, billing system, and real-time staff management dashboard.",
      tech: ["Node.js", "MongoDB", "React", "Express"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
      demoLink: "#",
      sourceLink: "#",
      color: "emerald"
    },
    {
      id: 4,
      category: "AI/ML",
      title: "AI Texture Generator",
      description: "Machine learning powered texture synthesis tool that creates seamless, high-quality textures using deep learning algorithms and neural networks.",
      tech: ["Python", "TensorFlow", "React", "WebGL"],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
      demoLink: "#",
      sourceLink: "#",
      color: "violet"
    },
    {
      id: 5,
      category: "Entertainment",
      title: "Movie Discovery App",
      description: "Modern movie browsing experience with intelligent recommendations, advanced search filters, and social features for movie enthusiasts.",
      tech: ["React", "Redux", "API", "Tailwind"],
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop",
      demoLink: "#",
      sourceLink: "#",
      color: "red"
    },
    {
      id: 6,
      category: "Gaming",
      title: "Multi-Game Platform",
      description: "Interactive gaming platform featuring multiple web games, real-time leaderboards, achievement systems, and multiplayer capabilities.",
      tech: ["Canvas", "WebGL", "Socket.io", "Node.js"],
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&h=600&fit=crop",
      demoLink: "#",
      sourceLink: "#",
      color: "cyan"
    }
  ];

  const colorVariants = {
    blue: {
      border: "border-blue-500/20",
      bg: "bg-blue-500/10",
      text: "text-blue-400"
    },
    amber: {
      border: "border-amber-500/20",
      bg: "bg-amber-500/10",
      text: "text-amber-400"
    },
    emerald: {
      border: "border-emerald-500/20",
      bg: "bg-emerald-500/10",
      text: "text-emerald-400"
    },
    violet: {
      border: "border-violet-500/20",
      bg: "bg-violet-500/10",
      text: "text-violet-400"
    },
    red: {
      border: "border-red-500/20",
      bg: "bg-red-500/10",
      text: "text-red-400"
    },
    cyan: {
      border: "border-cyan-500/20",
      bg: "bg-cyan-500/10",
      text: "text-cyan-400"
    }
  };

  useEffect(() => {
    if (typeof gsap === 'undefined') return;

    gsap.registerPlugin(ScrollTrigger);

    // Simple fade-in animation for cards
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(card,
        {
          opacity: 0,
          y: 50
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Simple Header */}
      <header className="py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-gray-400 mt-4 text-lg">
          Innovative solutions built with modern technologies
        </p>
      </header>

      {/* Projects Grid */}
      <section className="px-4 pb-16">
        <div className="max-w-7xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => cardsRef.current[index] = el}
              className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                {/* Image Section */}
                <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>

                  {/* Project Number */}
                  <div className="absolute top-4 right-4 text-4xl md:text-5xl font-black text-white/10">
                    {String(project.id).padStart(2, '0')}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold mb-3">
                    {project.category}
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {project.title}
                  </h2>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1.5 rounded-full text-sm font-medium border ${colorVariants[project.color].border} ${colorVariants[project.color].bg} ${colorVariants[project.color].text}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 flex-wrap">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 hover:transform hover:-translate-y-1 transition-all duration-300"
                    >
                      View Demo
                    </a>
                    <a
                      href={project.sourceLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-transparent text-white border-2 border-gray-600 rounded-full font-semibold hover:border-gray-400 hover:transform hover:-translate-y-1 transition-all duration-300"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectShowcase;