import React from "react"
import "../style/info.css"
import photo from"../assets/christina-min.jpg"
import linkedIn from"../assets/linkedin.png"
import mail from"../assets/mail.png"

export default function Info(){
    return(
        <header>
            <img className="profile-picture" src={photo} alt="Laura"/>
            <h1 className="title">Laura Smith</h1>
            <h5 className="job">Frontend Developper</h5>
            <h6 className="website">laurasmith.website</h6>
            <div className="buttons">
            <div className="mail-button">
                <img className="mail"src={mail} alt="logo mail"/>
                <h5 className="mail-text">Email</h5>
            </div>
            <div className="linkedin-button">
                <img className="linkedin"src={linkedIn} alt="logo de LinkedIn"/>
                <h5 className="linkedin-text">LinkedIn</h5>
            </div>
            </div>

        </header>
    )
}