import React from "react"
import trollFace from "../images/troll-face.png"

export default function Header() {
  return (
    <header className="header--container">
      <div className="header--logo--container">
        <img src={trollFace} alt="troll face" className="header--logo"/>
        <h1 className="header--title">Meme Generator</h1>
      </div>
      <h2 className="header--project">React Course - Project 3</h2>
    </header>
  )
}