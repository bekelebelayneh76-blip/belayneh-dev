import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900/95 text-white py-10 px-16 sticky top-0 z-50 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl tracking-tight">
          <span className="font-bold text-white">Belayneh</span>
          <span className="font-medium text-blue-400">.dev</span>
        </Link>
        
        <div className="hidden md:flex gap-10 text-sm font-medium uppercase tracking-wide">
          <Link to="/" className={`hover:text-blue-400 transition-colors ${location.pathname === '/' ? 'border-b-2 border-blue-500' : ''}`}>Home</Link>
          <Link to="/about" className={`hover:text-blue-400 transition-colors ${location.pathname === '/about' ? 'border-b-2 border-blue-500' : ''}`}>About</Link>
          <Link to="/projects" className={`hover:text-blue-400 transition-colors ${location.pathname === '/projects' ? 'border-b-2 border-blue-500' : ''}`}>Projects</Link>
          <Link to="/contact" className={`hover:text-blue-400 transition-colors ${location.pathname === '/contact' ? 'border-b-2 border-blue-500' : ''}`}>Contact</Link>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a0a1a] py-4 px-16">
          <div className="flex flex-col gap-4 text-sm font-medium uppercase tracking-wide">
            <Link to="/" className={`hover:text-blue-400 transition-colors ${location.pathname === '/' ? 'text-blue-400' : ''}`} onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/about" className={`hover:text-blue-400 transition-colors ${location.pathname === '/about' ? 'text-blue-400' : ''}`} onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/projects" className={`hover:text-blue-400 transition-colors ${location.pathname === '/projects' ? 'text-blue-400' : ''}`} onClick={() => setIsOpen(false)}>Projects</Link>
            <Link to="/contact" className={`hover:text-blue-400 transition-colors ${location.pathname === '/contact' ? 'text-blue-400' : ''}`} onClick={() => setIsOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}