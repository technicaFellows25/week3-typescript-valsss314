import { BrowserRouter, Routes, Route } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Weeks from "./pages/Weeks.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Week from "./pages/Week.jsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/weeks" element={<Weeks />} />
        <Route path="/weeks/:number" element={<Week />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
