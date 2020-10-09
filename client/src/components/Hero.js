import React from 'react'
import {Link} from "react-router-dom"
import BackgroundImage from "../media/background.jpg"

export default function Hero() {

  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.3)), url(${BackgroundImage})`
  
  return (
    <div className="Hero">
      <h1>survey lizard.</h1>
      <Link to={process.env.PUBLIC_URL + '/createsurvey'}><button className="rounded center">Get Started</button></Link>
    </div>
  )
}
