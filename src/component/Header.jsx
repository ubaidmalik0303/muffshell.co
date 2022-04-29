import React from 'react'
import "../styles/header.css"
import { FaPinterest, FaInstagram, FaFacebook, FaBars } from "react-icons/fa"

const Header = () => {
  return (
    <header className='container-fluid header'>
        <label htmlFor="toggle-check">
            <FaBars className='toggle-icon' size={30} color="white" />
        </label>
        <div className="container">
            <div className='logo-text'>MuffShell</div>
            <input type="checkbox" name="" id="toggle-check" />
            <div className='navbar'>
                <ul>
                    <li><a href="#slider">Images</a></li>
                    <li><a href="#pill-organizer">Pill Organizer</a></li>
                    <li><a href="#pill-crusher">Pill Crusher</a></li>
                    <li><a href="#features">Features</a></li>
                </ul>
            </div>
            <div className='social-icons'>
                <div><a href=""><FaFacebook size={25} color="white" /></a></div>
                <div><a href="https://www.instagram.com/muffshellstore/"><FaInstagram size={25} color="white" /></a></div>
                <div><a href="https://www.pinterest.com/muffshell/_created/"><FaPinterest size={25} color="white" /></a></div>
            </div>
        </div>
    </header>
  )
}

export default Header