import { useState } from "react";
import ContactPanel from '../components/ContactPanel.jsx'

const Contact = () =>{
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <>
      {showContactForm && (
        <ContactPanel onClose={() => setShowContactForm(false)} />
      )}
    </>
  );
}

export default Contact;