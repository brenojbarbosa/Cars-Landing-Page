import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import CarHome from "./CarHome";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<CarHome />} />
          <Route path="/about" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
