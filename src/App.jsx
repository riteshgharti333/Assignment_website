import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import AboutUs from "./pages/AboutUs/AboutUs";
import ServiceOne from "./pages/Services/ServiceOne/ServiceOne";
import ServiceTwo from "./pages/Services/ServiceTwo/ServiceTwo";
import ServiceThree from "./pages/Services/ServiceThree/ServiceThree";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/socio-economic-development" element={<ServiceOne />} />
          <Route
            path="/bridging-the-gap-between-the-government-and-the-common-masses"
            element={<ServiceTwo />}
          />

          <Route path="/youth-development" element={<ServiceThree />} />
          <Route path="/contact-us" element={<Contact />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
