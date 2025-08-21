import { useState } from "react";
import ContactPanel from '../components/ContactPanel.jsx'

const Contact = () =>{
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setShowContactForm(true)}
        className="rounded-md bg-peach px-4 py-2 text-white font-pangaia hover:bg-sky transition"
      >
        Contact
      </button>

      {showContactForm && (
        <ContactPanel onClose={() => setShowContactForm(false)} />
      )}
    </>
  );
}

export default Contact;