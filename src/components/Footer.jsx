'use client' 

import { FaGithub, FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-myDark pb-6">
    <footer className="bg-myWarm md:flex md:items-center md:justify-between p-10 pt-20 mx-6">
        <ul className="flex items-center flex-wrap mb-6 md:mb-0">
            <li><a href="#" className="text-myDark font-myText hover:text-myBlue text-lg ml-10 mr-4 md:mr-6">Julia Smitjes</a></li>
        </ul>
        <div className="flex sm:justify-center space-x-6 mr-10">
            <a href="#" className="text-myDark font-myText hover:text-myBlue">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <FaGithub className="text-2xl"/>
                </svg>
            </a>
            <a href="#" className="text-myDark font-myText hover:text-myBlue">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <MdAlternateEmail className="text-2xl"/>
                </svg>
            </a>
            <a href="#" className="text-myDark font-myText hover:text-myBlue">
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