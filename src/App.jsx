import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";
import Footer from "./Pages/Footer";
import ProjectDetails from "./components/Gallery/ProjectDetails";
import Interior from "./Pages/Interior";
import ScrollToTop from "./Pages/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>

      <Navbar />

      <Routes>

        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* About */}
        <Route path="/about" element={<About />} />

        {/* Services */}
        <Route path="/services" element={<Services />} />

        {/* Gallery */}
        <Route path="/gallery" element={<Gallery />} />

        {/* Contact */}
        <Route path="/contact" element={<Contact />} />

        <Route path="/interior" element={<Interior />} />

        {/* Individual Project */}
        <Route
          path="/projects/:id"
          element={<ProjectDetails />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;