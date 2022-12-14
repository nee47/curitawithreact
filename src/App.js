import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/productos/*" element={<Gallery />} />
          <Route path="/productos/:id/*" element={<ProductDetail />} />
        </Routes>

        <Footer />
      </Router>
    </>
  );
}

export default App;
