import React from "react"
import "../style/footer.css" 
import twitter from "../gray-twitter.png" 
import facebook from "../gray-facebook.png" 
import instagram from "../gray-instagram.png" 
import github from "../gray-github.png" 

export default function Footer(){
    return(
        <footer>
        <img className="icon" src={twitter} alt="Twitter icon"/>
        <img className="icon" src={facebook} alt="Facebook icon"/>
        <img className="icon" src={instagram} alt="Instagram icon"/>
        <img className="icon-github" src={github} alt="Github icon"/>
        </footer>
    )
}