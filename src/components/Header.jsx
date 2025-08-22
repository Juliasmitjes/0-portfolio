import { HashLink } from 'react-router-hash-link';
import { useState, useEffect } from 'react';


'use client' 

const navLinks = [
  { name: 'About me', href: '/#aboutme' },
  { name: 'Resume', href: '/#resume-section' },
  { name: 'Projects', href: '/#projects-section' },
]

const Header = ({setShowContactForm}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10); 
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`bg-myOcean sticky top-0 z-50 transition-all duration-600 ${
        scrolled ? 'opacity-80 pt-0 backdrop-blur-sm' : 'pt-6'}`}>

    <nav className={`bg-myWarm md:flex md:items-center md:justify-end py-4 px-8 mx-6 transition-all ${
      scrolled ? 'border-b border-myDark backdrop-blur-sm' : ''}`}>

    <div className="flex items-center flex-wrap">
        
        <div className="flex items-center space-x-4">
          
          <ul className="hidden md:flex font-bold items-center space-x-8">
            {navLinks.map(link => (
              <li key={link.name}>
                <HashLink
                  to={link.href}
                  className="px-3 py-2 text-myOcean text-lg font-myText hover:text-myBlue"
                >
                  {link.name}
                </HashLink>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={() => setShowContactForm(true)}
            className="hidden ml-9 md:inline-flex items-center font-myText px-4 py-2 bg-myOcean text-white rounded-lg text-lg cursor-pointer font-bold hover:bg-myDark focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Contact
          </button>

          {/* Mobiel NOG DOEN */}
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>     
    </nav>
  </div>
)};

export default Header