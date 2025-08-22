'use client'

import { useState } from 'react'
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ContactPanel from '../components/ContactPanel.jsx'
import { Outlet } from "react-router-dom";

const Layout = () => {
  const [showContactForm, setShowContactForm] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Header setShowContactForm={setShowContactForm} />
      <main className="flex-grow">
        <Outlet context={{ setShowContactForm }} />
        {showContactForm && (
          <ContactPanel onClose={() => setShowContactForm(false)} />
        )}
      </main>
      <Footer setShowContactForm={setShowContactForm} />
    </div>
  )
}

export default Layout