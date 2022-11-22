import React from "react"
import Info from "./Info"
import About from "./About"
import Intrests from "./Intrests"
import Footer from "./Footer"
import "../style/card.css"

function Card() {
  return (
    <div className="card">
   <Info />
   <About />
   <Intrests />
   <Footer />
    </div>
  );
}

export default Card;