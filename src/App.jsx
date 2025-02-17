import { useEffect, useRef, useState } from "react";
import MySection from "./components/MySection";
import "./style.css";
import Projects from "./components/Projects";
import ViewMore from "./components/ViewMore";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <MySection />
      <Projects />
      <ViewMore />
      <Footer />
      <div className="topBlur" />
      <div className="centerBlur" />
      <div className="bottomBlur" />
    </>
  );
}

export default App;
