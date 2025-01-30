import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import AboutUs from "./pages/AboutUs/AboutUs";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
