import { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

// Import Components
import Header from "./components/Header";
import Footer from "./components/Footer";

// Import Pages
import HomePage from "./pages/HomePage";
import MediaGallery from "./pages/MediaGallery";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import RetreatsPage from "./pages/RetreatsPage";
import TeamPage from "./pages/TeamPage";
import ContactPage from "./pages/ContactPage";

// Import Global Components
import FloatingClientsPanel from "./components/FloatingClientsPanel";
import BackgroundMusicPlayer from "./components/BackgroundMusicPlayer";
import ScrollToTop from "./components/ScrollToTop";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

function App() {
  const helloWorldApi = async () => {
    try {
      const response = await axios.get(`${API}/`);
      console.log(response.data.message);
    } catch (e) {
      console.error(e, `errored out requesting / api`);
    }
  };

  useEffect(() => {
    helloWorldApi();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <BackgroundMusicPlayer />
        <FloatingClientsPanel />
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/media" element={<MediaGallery />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/retreats" element={<RetreatsPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
