
import { PROJECTS } from '../data/constants';

/**
 * Projects Component
 * Displays four key software engineering projects in a structured grid.
 */
export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-blue-900 mb-4 border-b-4 border-blue-600 inline-block pb-2">
          Project Portfolio
        </h2>
        <p className="text-slate-600">
          A collection of software systems developed to solve academic and real-world challenges.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {PROJECTS.map((project, index) => (
          <div 
            key={index} 
            className="flex flex-col bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden relative"
            style={{
              background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(248,250,252,0.9) 100%)',
              border: '1px solid transparent',
              backgroundClip: 'padding-box',
              WebkitBackgroundClip: 'padding-box'
            }}
          >
            {/* Gradient Border Effect */}
            <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-blue-200 via-indigo-200 to-purple-200">
              <div className="w-full h-full bg-white rounded-2xl"></div>
            </div>
            {/* Top Indicator */}
            <div className="h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
            
            <div className="p-8 flex-grow relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-800">
                  {project.title}
                </h3>
                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-md uppercase tracking-tighter">
                  {project.title === "AI Resume Screening System" ? "Active Project" : "Core System Developed"}
                </span>
              </div>

              {/* Problem/Solution Blocks */}
              <div className="space-y-3 mb-6">
                <div className="text-sm">
                  <span className="font-bold text-red-600 block mb-1">The Challenge:</span>
                  <p className="text-slate-600 italic">"{project.problem}"</p>
                </div>
                <div className="text-sm">
                  <span className="font-bold text-green-600 block mb-1">The Solution:</span>
                  <p className="text-slate-700">{project.solution}</p>
                </div>
              </div>

              {/* Technologies Used */}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {project.tech.map((t, i) => (
                  <span 
                    key={i} 
                    className="text-[11px] font-medium bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-100"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 mt-6">
                {project.hasLiveDemo && (
                  <div className="flex-1">
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium text-center hover:bg-blue-700 hover:scale-105 transition-all duration-200 block"
                    >
                      Live Demo
                    </a>
                    {project.title === "AI Resume Screening System" && (
                      <p className="text-xs text-slate-500 italic mt-1 text-center">
                        (Note: If the app is sleeping, please click 'Wake up' to start the demo)
                      </p>
                    )}
                  </div>
                )}
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-4 py-2 rounded-lg font-medium text-center hover:scale-105 transition-all duration-200 border-2 ${
                    project.hasLiveDemo 
                      ? 'flex-1 border-slate-300 text-slate-600 hover:bg-slate-600 hover:text-white hover:border-slate-600' 
                      : 'w-full border-slate-300 text-slate-600 hover:bg-slate-600 hover:text-white hover:border-slate-600'
                  }`}
                >
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}