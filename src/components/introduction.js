import React from "react"
import { FaMapPin } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { IoMdContact } from "react-icons/io";
import { IoMdHand } from 'react-icons/io';
import { FaCode } from 'react-icons/fa';
import { FaKeyboard } from 'react-icons/fa';
import { FaSuitcase } from 'react-icons/fa';
import Logo from '../images/kh-logo-bounce.svg'
import scrollTo from 'gatsby-plugin-smoothscroll';
import "../components/css/introduction.css"

class Introduction extends React.Component {
  render() {
    return (
        <div
        style={{
          margin: `0 auto`,
          maxWidth: 980,
          padding: `0px 1.0875rem 1.45rem`,
          paddingTop: 0,
        }}
      >
        <img src={Logo} id="logo" alt="Kaitlin Huss"/> 
        <div id="intro">
          <p className="intro-heading"><FaKeyboard /> software developer</p>
          <p className="intro-heading"><FaSuitcase /> currently @ jpmorgan chase &amp; co.</p>
          <p className="intro-heading"><FaMapPin />tampa, fl </p>
          <p className="intro-link"><FaLinkedin /> linkedin.com/in/<a href="https://www.linkedin.com/in/kaitlinhuss" target="_blank" rel="noopener noreferrer">kaitlinhuss</a></p>
          <p className="intro-link"><FaGithub /> github.com/<a href="https://github.com/kaitlinhuss" target="_blank" rel="noopener noreferrer">kaitlinhuss</a></p>
          <button class="btn btn-outline-primary scrolldown-btn" onClick={() => scrollTo('#about')}><IoMdHand /></button>
          <button class="btn btn-outline-primary scrolldown-btn" onClick={() => scrollTo('#code')}><FaCode /></button>
          <button class="btn btn-outline-primary scrolldown-btn" onClick={() => scrollTo('#contact')}><IoMdContact /></button>
        </div>
      </div>
    )
  }
}

export default Introduction

