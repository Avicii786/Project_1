import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/pages/Home";
import Services from "./Components/pages/Services";
import Products from "./Components/pages/Products";
import SignUp from "./Components/pages/SignUp";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/services" exact element={<Services />} />
        <Route path="/products" exact element={<Products />} />
        <Route path="/sign-up" exact element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
