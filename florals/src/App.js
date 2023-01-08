import { Routes, Route } from "react-router-dom";
import Collections from "./components/collections/Collections";
import NavBar from "./components/navbar/NavBar";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Footer from "./common/footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/collections" exact element={<Collections />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
