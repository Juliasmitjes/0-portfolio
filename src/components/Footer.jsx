'use client' 

import { FaGithub, FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { HashLink } from 'react-router-hash-link';

const navLinks = [
  { name: 'Julia Smitjes', href: '/#aboutme' },
]


const Footer = () => {
  return (
<div className="bg-myOcean">
    <footer className="bg-myOcean md:flex md:items-center md:justify-between px-10 py-6">
     <ul className="flex items-center flex-wrap mb-6 md:mb-0">
        {navLinks.map((link, index) => (
            <li key={index}>
            <HashLink
                to={link.href}
                className="text-white font-myText hover:text-myDark text-lg ml-10 mr-4 md:mr-6"
            >
                {link.name || "Link"}
            </HashLink>
            </li>
        ))}
     </ul>
        <div className="flex sm:justify-center space-x-6 mr-10">
            <a href="https://github.com/Juliasmitjes/0-portfolio" className="text-white font-myText hover:text-myDark">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <FaGithub className="text-2xl"/>
                </svg>
            </a>
            <a href="mailto:julia.s@live.nl" className="text-white font-myText hover:text-myDark">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <MdAlternateEmail className="text-2xl"/>
                </svg>
            </a>
            <a href="tel:+31614292489" className="text-white font-myText hover:text-myDark">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <FaPhoneAlt className="text-2xl"/>
                </svg>
            </a>
        </div>
    </footer>
    </div>
  )
}

export default Footer