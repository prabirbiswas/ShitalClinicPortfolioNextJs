import "./App.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookAppointment from "./components/BookAppointment/BookAppointment";
import Error404 from "./components/Error404";
import Home from "./components/Home/Home";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/BookAppointment" element={<BookAppointment />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
