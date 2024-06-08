import "./App.css";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
