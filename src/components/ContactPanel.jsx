import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";

const ContactPanel = ({ onClose }) => {
  const form = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_0kf03ig', 'template_4n72uao', form.current, {
        publicKey: 'SmhOnVEe_yGsYJZoZ',
      })
      .then(()=> {
        setShowPopup(true);
        form.current.reset();
        setTimeout(() => setShowPopup(false), 3000);
      })
      .catch(() => {
        setErrorPopup(true);
        setTimeout(() => setErrorPopup(false), 4000);
      });
  };

  return (
    <div className="fixed inset-y-0 right-0 max-w-md w-full bg-myOcean p-6 shadow-xl z-50 transition-transform duration-300">
      <button onClick={onClose} className="absolute top-4 right-4 cursor-pointer text-white font-bold active:scale-110 sm:active:scale-100">✕</button>
      <h2 className="text-xl font-myHeader text-white mb-4">Contact me</h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <input type="text" name="user_name" placeholder="Name" className="font-myText text-myDark w-full bg-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-myBlue" />

        <input type="email" name="user_email" placeholder="Email" className="font-myText text-myDark w-full bg-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-myBlue" />
        
        <textarea name="message" placeholder="Message" className="font-myText text-myDark w-full bg-white rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-myBlue" rows="5" />

        <input type="submit" value="Submit" className="font-myText font-bold cursor-pointer text-white bg-myBlue px-4 py-2 rounded hover:bg-myDark active:scale-110 sm:active:scale-100"/>
      </form>

      {showPopup && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
          Thanks for reaching out. I'll get back to you shortly!
        </div>
      )}

      {errorPopup && (
        <div className="fixed bottom-6 right-6 bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg">
          Something went wrong. Please try again.
        </div>
      )}

      <div className="flex items-center pt-8 space-x-2">
        <a href="mailto:julia.s@live.nl" className="text-white hover:text-myDark">
          <MdAlternateEmail className="text-2xl" />
        </a>
        <p className="font-myText text-white font-bold">julia.s@live.nl</p>
      </div>

      <div className="flex items-center pt-2 space-x-2 mt-2">
        <a href="tel:+31614292489" className="text-white hover:text-myDark">
          <FaPhoneAlt className="text-xl" />
        </a>
        <p className="font-myText text-white font-bold">+316 14292489</p>
      </div>
    </div>
  );
};

export default ContactPanel;
