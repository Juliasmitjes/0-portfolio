'use client'

import { useState } from 'react'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ContactPanel from '../components/ContactPanel.jsx'
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [showContactForm, setShowContactForm] = useState(false)

  return (
    <>
    <Header setShowContactForm={setShowContactForm}/>
    <Outlet context={{ setShowContactForm }} />
    {showContactForm && (
      <ContactPanel onClose={() => setShowContactForm(false)} />
    )}
    <Footer setShowContactForm={setShowContactForm}/>
    </>
  )
}

export default Layout