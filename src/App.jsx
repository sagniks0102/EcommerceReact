import { useState } from "react";

import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Jewelry from "./pages/itemPages/Jewelry";
import Login from "./pages/Login/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
      {/* <Login/> */}
      {/* <Jewelry/> */}
    </>
  );
}

export default App;
