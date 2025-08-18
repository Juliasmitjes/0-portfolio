import React from 'react'

const navLinks = [
  { name: 'About me', href: '#' },
  { name: 'Resume', href: '#' },
  { name: 'Projects', href: '#' },
]

const Header = () => {
  return (
    <nav className="bg-myWarm fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 py-2">

        {/* logo en titel links */}
        <a href="#" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            alt="Logo"
            className="h-8"
          />
          <span className="text-2xl font-myHeader text-myBlue">
            JS PORTFOLIO
          </span>
        </a>

        {/* nav-links, knop en hamburger rechts*/}
        <div className="flex items-center space-x-4">
          
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="px-3 py-2 text-myDark font-myText hover:text-myBlue"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="hidden ml-9 md:inline-flex items-center font-myText px-4 py-2 bg-myBlue text-white rounded-lg text-sm font-medium hover:bg-myDark focus:outline-none focus:ring-2 focus:ring-blue-300"
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
  )
}

export default Header