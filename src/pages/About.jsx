import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import {
  SiAdobephotoshop,
  SiBit,
  SiBlender,
  SiCircleci, SiCloudinary,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFramer,
  SiGit,
  SiHtml5,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiSketchfab,
  SiSocketdotio,
  SiTailwindcss,
  SiVercel,
  SiVite,
  SiWebgl,
  SiWebpack
} from 'react-icons/si';

import { DiAws, DiVisualstudio } from 'react-icons/di'; // AWS and VS Code replacements
import { FaCube, FaServer, FaWaveSquare } from 'react-icons/fa'; // GSAP & Three.js placeholders

import CardSwap, { Card } from './CardSwap';
import FlowingMenu from './FlowingMenu';
import RotatingText from './RotatingText';

const About = () => {
  const textRef = useRef(null);
  const desRef = useRef(null);
  const imageRef2 = useRef(null);
  const stackRef = useRef(null);
  const servicesRef = useRef(null);

  // Stack data organized by categories with continuous animation
  const stackCategories = [
    {
      name: 'Frontend',
      items: [
        { text: 'React', icon: SiReact },
        { text: 'GSAP', icon: FaWaveSquare },
        { text: 'Framer Motion', icon: SiFramer },
        { text: 'React-Bit', icon: SiBit },
        { text: 'Tailwind CSS', icon: SiTailwindcss },
        { text: 'HTML5', icon: SiHtml5 },
        { text: 'CSS3', icon: SiCss3 }
      ]
    },
    {
      name: 'Backend',
      items: [
        { text: 'Node.js', icon: SiNodedotjs },
        { text: 'Express', icon: SiExpress },
        { text: 'MongoDB', icon: SiMongodb },
        { text: 'RestAPI', icon: FaServer },
        { text: 'FastAPI', icon: SiFastapi },
        { text: 'AWS', icon: DiAws },
        { text: 'Multer', icon: FaServer },
        { text: 'WebSocket', icon: SiSocketdotio }
      ]
    },
    {
      name: 'Database',
      items: [
        { text: 'MongoDB', icon: SiMongodb },
        { text: 'PostgreSQL', icon: SiPostgresql },
        { text: 'MySQL', icon: SiMysql },
        { text: 'DynamoDB', icon: DiAws }
      ]
    },
    {
      name: 'Cloud & DevOps',
      items: [
        { text: 'AWS', icon: DiAws },
        { text: 'Docker', icon: SiDocker },
        { text: 'CI/CD', icon: SiCircleci },
        { text: 'Cloudinary', icon: SiCloudinary },
        { text: 'Vercel', icon: SiVercel }
      ]
    },
    {
      name: '3D & Animation',
      items: [
        { text: 'Three.js', icon: FaCube },
        { text: 'GSAP', icon: FaWaveSquare },
        { text: 'Framer Motion', icon: SiFramer },
        { text: 'WebGL', icon: SiWebgl },
        { text: 'Blender', icon: SiBlender },
        { text: 'Sketchfab', icon: SiSketchfab }
      ]
    },
    {
      name: 'Tools & Others',
      items: [
        { text: 'Git', icon: SiGit },
        { text: 'VS Code', icon: DiVisualstudio },
        { text: 'Figma', icon: SiFigma },
        { text: 'Photoshop', icon: SiAdobephotoshop },
        { text: 'Postman', icon: SiPostman },
        { text: 'Webpack', icon: SiWebpack },
        { text: 'Vite', icon: SiVite }
      ]
    }
  ];

  const [activeStack, setActiveStack] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top 20%",
        toggleActions: "play",
      }
    });

    // Animate About heading
    tl.fromTo(textRef.current, { opacity: 0, y: 50 }, {
      opacity: 1,
      y: 0,
      duration: 2,
      ease: 'power2.out',
    });

    // Animate Description Block
    tl.fromTo(desRef.current, { opacity: 0, y: 50 }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
    });

    // Animate Stack Section
    tl.fromTo(stackRef.current, { opacity: 0, y: 50 }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
    }, "-=0.5");

    // Animate Services Section
    tl.fromTo(servicesRef.current, { opacity: 0, y: 50 }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
    }, "-=0.5");

    // Animate floating image
    tl.fromTo(imageRef2.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 2,
        ease: 'power2.out',
      },
      "<"
    );

    // Continuous floating animation
    gsap.to(imageRef2.current, {
      y: '-=15',
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });

    // Auto-rotate stack categories
    const stackInterval = setInterval(() => {
      setActiveStack((prev) => (prev + 1) % stackCategories.length);
    }, 4000);

    return () => {
      clearInterval(stackInterval);
    };
  }, []);

  return (
    <div
      id="about"
      className="relative bg-black w-full min-h-screen overflow-hidden px-4 pt-24 scroll-mt-24"
    >
      {/* Heading Section */}
      <div className="flex flex-row justify-center items-center mb-10 space-y-4">
        <p ref={textRef} className="text-white text-4xl sm:text-5xl md:text-7xl font-bold">
          <pre>About </pre>
        </p>
        <RotatingText
          texts={['Me', 'Full-Stack-Developer', '3DDeveloper', 'UI/UX Designer', 'Cloud Engineer']}
          mainClassName="px-2 sm:px-4 md:px-6 bg-cyan-300 text-black overflow-hidden py-1 sm:py-2 md:py-3 justify-center rounded-lg text-3xl sm:text-4xl md:text-6xl font-bold"
          staggerFrom="end"
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.025}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 400 }}
          rotationInterval={2000}
        />
      </div>

      {/* Description Box */}
      <div className="flex justify-center items-center">
        <div
          ref={desRef}
          className="relative text-white text-center text-base sm:text-xl md:text-2xl lg:text-3xl px-4 py-14 sm:py-20 w-full max-w-5xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-md mt-10"
        >
          <p className="mb-4">I am a passionate Full-Stack Developer with a keen interest in creating dynamic and responsive web applications.</p>
          <p className="mb-4">My journey in web development has equipped me with a diverse skill set, enabling me to tackle complex challenges and deliver high-quality solutions.</p>
          <p>I thrive on learning new technologies and continuously improving my craft.</p>
        </div>
      </div>

      {/* Flowing Tech Stack Section */}
      <div ref={stackRef} className="mt-20 mb-20">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          My <span className="text-cyan-300">Tech Stack</span>
        </h2>

        {/* Stack Categories Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {stackCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveStack(index)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeStack === index
                ? 'bg-cyan-300 text-black shadow-lg shadow-cyan-300/50'
                : 'bg-white/10 text-white hover:bg-white/20'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* FlowingMenu for Stack Items */}
        <div className="max-w-6xl mx-auto">
          <div style={{ height: '600px', position: 'relative' }}>
            <FlowingMenu items={stackCategories[activeStack].items} />
          </div>
        </div>
      </div>

      {/* Services Section with CardSwap */}
      <div ref={servicesRef} className="mt-20 pb-20">
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
          My <span className="text-cyan-300">Services</span>
        </h2>

        <div className="max-w-4xl mx-auto">

          <div className="relative min-h-[400px] sm:min-h-[600px]">


            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={500}
              pauseOnHover={false}
            >
              {/* Full-Stack Development */}
              <Card>
                <div className="p-8 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl h-full">
                  <div className="text-4xl mb-4"><img src='MERN-logo.png' className="w-60 h-26" alt="MERN Stack Logo" /></div>
                  <h3 className="text-white text-3xl font-bold mb-4 text-cyan-300">
                    Full-Stack Development
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    I specialize in building dynamic web applications using the MERN stack and modern frameworks,
                    ensuring responsive design and seamless user experience.
                  </p>
                  <div className="space-y-2">
                    {[
                      'React / Next.js with server-side rendering',
                      'Node.js & Express APIs with authentication',
                      'MongoDB & Mongoose schema design',
                      'RESTful architecture & error handling'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-400">
                        <div className="w-1 h-1 bg-cyan-300 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* 3D Web Development */}
              <Card>
                <div className="p-8 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl h-full">
                  <div className="text-6xl mb-4">🧑‍💻</div>
                  <h3 className="text-white text-3xl font-bold mb-4 text-cyan-300">
                    3D Web Development
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    I create immersive 3D user experiences using powerful libraries like Three.js and WebGL.
                    Perfect for portfolios, product showcases, or metaverse apps.
                  </p>
                  <div className="space-y-2">
                    {[
                      'Three.js + React integration (R3F)',
                      'GPU-accelerated rendering via WebGL',
                      'Custom 3D models using Blender',
                      'Performance-optimized scenes with lighting & shadows'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-400">
                        <div className="w-1 h-1 bg-cyan-300 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* UI/UX Design */}
              <Card>
                <div className="p-8 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl h-full">
                  <div className="text-5xl mb-4">✨</div>
                  <h3 className="text-white text-3xl font-bold mb-4 text-cyan-300">
                    UI/UX Design
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Beautifully crafted designs with Figma and modern UI libraries,
                    focused on accessibility, responsiveness, and visual storytelling.
                  </p>
                  <div className="space-y-2">
                    {[
                      'Component-based design in Figma',
                      'Mobile-first, responsive layouting',
                      'User-centered interaction flow',
                      'Animation with GSAP and Framer Motion'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-400">
                        <div className="w-1 h-1 bg-cyan-300 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Cloud Engineering */}
              <Card>
                <div className="p-8 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl h-full">
                  <div className="text-5xl mb-4">☁️</div>
                  <h3 className="text-white text-3xl font-bold mb-4 text-cyan-300">
                    Cloud Engineering
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    I build and deploy cloud-native apps on AWS, ensuring scalability,
                    speed, and cost-efficiency using DevOps best practices.
                  </p>
                  <div className="space-y-2">
                    {[
                      'AWS S3, EC2, IAM, Route 53 setup',
                      'Docker containerization & ECR',
                      'CI/CD with GitHub Actions & Vercel',
                      'Monitoring & log tracing for reliability'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-400">
                        <div className="w-1 h-1 bg-cyan-300 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* E-Commerce Solutions */}
              <Card>
                <div className="p-8 backdrop-blur-sm bg-white/5 border border-white/10 rounded-2xl h-full">
                  <div className="text-5xl mb-4">🛒</div>
                  <h3 className="text-white text-3xl font-bold mb-4 text-cyan-300">
                    E-Commerce Solutions
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Fully featured e-commerce platforms with custom admin dashboards,
                    secure payment gateways, and order management.
                  </p>
                  <div className="space-y-2">
                    {[
                      'Stripe/PayPal payment integrations',
                      'Product catalog & image uploads',
                      'Inventory & order tracking',
                      'Admin panel with role-based access'
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-400">
                        <div className="w-1 h-1 bg-cyan-300 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </CardSwap>

          </div>
        </div>
      </div>

      {/* Floating Image */}
      <img
        ref={imageRef2}
        src="image2.webp"
        alt="image2"
        className="absolute w-20 sm:w-38 md:w-52 lg:w-76 object-contain rounded-xl drop-shadow-[0_0_5px_#00ffff] top-[25%] left-[4%] md:left-[6%] lg:left-[0%]"
      />
    </div>
  );
};

export default About;