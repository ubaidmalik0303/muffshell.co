import React from 'react'
import { FaPinterest, FaInstagram, FaFacebook } from "react-icons/fa"

const Footer = () => {
    return (
        <footer style={{ backgroundColor: "#373737" }} className='py-2'>
            <p className='text-center text-white'>MuffShell.co, AllRights Reserved - Designed By Ubaid Malik</p>
            <div className="d-flex justify-content-center">
                <FaFacebook className='mx-2' size={25} color="white" />
                <a href="https://www.instagram.com/muffshellstore/"><FaInstagram className='mx-2' size={25} color="white" /></a>
                <a href="https://www.pinterest.com/muffshell/_created/"><FaPinterest className='mx-2' size={25} color="white" /></a>
            </div>
        </footer>
    )
}

export default Footer