import './styles/index.css'
import {Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import NoPage from "./pages/NoPage";
import Resume from "./pages/Resume.jsx";
import Weather from './components/Weather.jsx'
import Memory from './components/games/memory/Memory.jsx';



function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NoPage />} />
        <Route path="Resume" element={<Resume />} />
        <Route path="Weather" element={<Weather />} />
        <Route path="Memory" element={<Memory />} />
      </Route>
    </Routes>
  )
}

export default App