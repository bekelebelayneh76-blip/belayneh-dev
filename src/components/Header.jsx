
import Typewriter from 'typewriter-effect';
import { INFO } from '../data/constants';
import profileImage from '../assets/profile.jpg';
import { Link } from 'react-router-dom';

/**
 * Header Component
 * Highlights the user's identity as a Computer Science student.
 * Removes generic developer titles as per user request.
 */
export default function Header() {
  return (
    <header className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-950 text-white py-5 px-6 text-center overflow-hidden">
      {/* Visual background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-center gap-4 mb-4">
          <div className="w-75 h-75 rounded-full overflow-hidden border-6 border-slate-700/60 shadow-lg shadow-blue-500/20">
            <img src={profileImage} alt={INFO.name} className="w-full h-full object-cover" />
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-blue-200 tracking-wide">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
            {INFO.role} @ {INFO.university}
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
            <Typewriter
              options={{
                strings: [INFO.name, ...INFO.titles],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 40,
                pauseFor: 1500,
              }}
            />
          </h1>
        </div>

        {/* Academic focus description */}
        <p className="text-base md:text-lg text-slate-200 max-w-3xl mx-auto mb-4 leading-relaxed hover:text-blue-400 transition-colors duration-300">
          A {INFO.role} at {INFO.university} dedicated to bridging the gap between academic theory and real-world application. I focus on building intelligent systems and mastering modern web technologies to solve the complex challenges of tomorrow.
        </p>

        {/* Navigation Actions */}
        <div className="flex flex-wrap justify-center gap-4">
          <Link 
            to="/projects" 
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-900/20 active:scale-95"
          >
            View Projects
          </Link>
          <Link 
            to="/contact" 
            className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/20 backdrop-blur-sm transition-all active:scale-95"
          >
            Contact Me
          </Link>
        </div>
      </div>
    </header>
  );
}