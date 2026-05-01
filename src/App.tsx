import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import OurDNA from "./pages/OurDNA";
import Features from "./pages/Features";
import Service from "./pages/Service";
import Exercise from "./pages/Exercise";
import GetStarted from "./pages/GetStarted";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-dna" element={<OurDNA />} />
          <Route path="/features" element={<Features />} />
          <Route path="/service" element={<Service />} />
          <Route path="/exercise" element={<Exercise />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}
