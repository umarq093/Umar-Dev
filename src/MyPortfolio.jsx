import {
  ExternalLink,
  Mail,
  Code2,
  Globe,
  ArrowUpRight,
  Layers,
//   User,
  Cpu,
  MessageSquare,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

export default function MyPortfolio() {
const skills = [
  { name: "React.js", category: "Frontend" },
  { name: "JavaScript", category: "Language" },
  { name: "HTML5", category: "Markup" },
  { name: "CSS3", category: "Styling" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "React Query", category: "Data Fetching" },
  { name: "Redux Toolkit", category: "State Management" },
  { name: "REST APIs", category: "API Integration" },
  { name: "Git", category: "Version Control" },
  { name: "GitHub", category: "Platform" },
  { name: "Vercel", category: "Deployment" },
  { name: "Responsive Design", category: "UI/UX" },
  { name: "Frontend Development", category: "Core" },
  { name: "Prompt Engineering", category: "AI" },
  { name: "AI-assisted Development", category: "AI" },
];

  const projects = [
    {
      title: "HungerMate",
      subtitle: "Food Delivery Architecture",
      description:
        "A premium food ordering application with smooth UI interactions, responsive layouts, category filtering, and modern frontend architecture.",
      tech: ["React.js", "Tailwind CSS", "Vercel"],
      github: "https://github.com/umarq093/HungerMate",
      live: "https://hunger-mate.vercel.app/",
      gradient: "from-orange-500/20 to-amber-500/5",
    },
    {
      title: "ZoroMovie",
      subtitle: "Cinematic Discovery Engine",
      description:
        "Movie browsing application using TMDB APIs with responsive design, dynamic routing, optimized rendering, and elegant user experience.",
      tech: ["React.js", "TMDB API", "Tailwind CSS"],
      github: "https://github.com/umarq093/ZoromMovie",
      live: "https://zoro-movie.vercel.app/",
      gradient: "from-cyan-500/20 to-blue-500/5",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-gray-100 overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-cyan-500/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-500/10 blur-[140px] rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#030712]/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="text-3xl font-black tracking-tight bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Umar<span className="text-cyan-400">.</span>
            
          </a>
  

          <div className="hidden md:flex items-center gap-2 text-sm text-gray-400">
            {["about", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="capitalize px-4 py-2 rounded-xl hover:bg-white/5 hover:text-white transition-all"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-24 pb-28">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs uppercase tracking-widest font-bold mb-6">
              <Cpu size={14} />
              Frontend React Developer
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Building Modern <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Web Experiences
              </span>
            </h1>

            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-10">
              I build fast, responsive, scalable, and visually modern frontend
              applications using React.js, Tailwind CSS, JavaScript, and modern
              frontend ecosystems.
            </p>

            <div className="flex flex-wrap gap-4">
  <a
    href="#projects"
    className="group px-8 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all text-black font-bold flex items-center gap-2 shadow-xl shadow-cyan-500/20"
  >
    View Projects
    <ArrowUpRight
      size={18}
      className="group-hover:-translate-y-1 transition-transform"
    />
  </a>

  <a
    href="/./src/resume/UmarFrontendResume.pdf"
    download
    className="px-8 py-4 rounded-2xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all flex items-center gap-2 font-semibold"
  >
    Download Resume
  </a>

  <a
    href="https://github.com/umarq093"
    target="_blank"
    rel="noopener noreferrer"
    className="px-8 py-4 rounded-2xl border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all flex items-center gap-2 font-semibold"
  >
    <FaGithub size={18} />
    GitHub
  </a>
</div>
          </div>

          {/* Card */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-3xl" />

              <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8">
                <div className="flex items-center justify-between mb-8 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                      <Code2 size={22} />
                    </div>

                    <div>
                      <h3 className="font-bold text-white">
                        Frontend Stack
                      </h3>
                      <p className="text-xs text-gray-500">
                        Modern technologies
                      </p>
                    </div>
                  </div>

                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    "React.js",
                    "Tailwind CSS",
                    "JavaScript",
                    "React Query",
                    "API Integration",
                    "Responsive UI",
                  ].map((item) => (
                    <div
                      key={item}
                      className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:border-cyan-400 transition-all"
                    >
                      <p className="text-sm font-semibold text-gray-300">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20"
      >
        <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10 backdrop-blur-xl">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-bold mb-4">
                About Me
              </p>

              <h2 className="text-4xl font-black leading-tight">
                Passionate About Frontend Engineering
              </h2>
            </div>

            <div className="lg:col-span-8">
              <p className="text-gray-400 text-lg  leading-loose">
              I focus on building modern frontend experiences with clean UI,
scalable component architecture, reusable systems, and optimized
user interactions. I enjoy creating responsive applications,
integrating APIs, and crafting polished interfaces using React ecosystems.
I also leverage AI-assisted development tools like ChatGPT, Gemini,
and Claude to improve workflow efficiency, debugging, and productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20"
      >
        <div className="mb-14">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-bold mb-4">
            Skills
          </p>

          <h2 className="text-5xl font-black">Tech Stack</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group bg-white/5 border border-white/10 rounded-3xl p-5 hover:border-cyan-400 hover:-translate-y-2 transition-all"
            >
              <p className="text-[10px] uppercase tracking-widest text-cyan-400 mb-2">
                {skill.category}
              </p>

              <p className="font-bold group-hover:text-cyan-400 transition-colors">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-20 scroll-mt-20"
      >
        <div className="mb-14">
          <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-bold mb-4">
            Projects
          </p>

          <h2 className="text-5xl font-black">Featured Work</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group bg-gradient-to-b ${project.gradient} border border-white/10 rounded-[2rem] p-8 hover:border-cyan-400 transition-all backdrop-blur-xl`}
            >
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs uppercase tracking-widest text-cyan-400 mb-2">
                    {project.subtitle}
                  </p>

                  <h3 className="text-3xl font-black group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                </div>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-cyan-400 hover:text-black transition-all"
                >
                  <ExternalLink size={18} />
                </a>
              </div>

              <p className="text-gray-400 leading-relaxed mb-8">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-5 border-t border-white/10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <FaGithub size={16} />
                  Source Code
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Globe size={16} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-4xl mx-auto px-6 py-24 scroll-mt-20"
      >
        <div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-[2.5rem] p-10 text-center backdrop-blur-xl">
          <div className="absolute top-0 left-0 w-40 h-40 bg-cyan-500/10 blur-3xl rounded-full" />
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 blur-3xl rounded-full" />

          <div className="relative z-10">
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-xs font-bold mb-4 flex items-center justify-center gap-2">
              <MessageSquare size={14} />
              Contact
            </p>

            <h2 className="text-5xl font-black mb-6">
              Let’s Work Together
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Open to frontend opportunities, freelance projects, and
              collaborations focused on modern web experiences.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:umarqureshi093@gmail.com"
                className="px-8 py-4 rounded-2xl bg-white text-black font-bold hover:bg-gray-200 transition-all flex items-center gap-2"
              >
                <Mail size={18} />
                Email Me
              </a>

              <a
                href="https://github.com/umarq093"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl border border-white/10 hover:border-cyan-400 hover:text-cyan-400 transition-all flex items-center gap-2 font-semibold"
              >
                <FaGithub size={18} />
                GitHub Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()} Umar — Frontend React Developer
        </p>

        <p className="flex items-center gap-2">
          Built with <Layers size={14} className="text-cyan-400" />
          React & Tailwind
        </p>
      </footer>
    </div>
  );
}
