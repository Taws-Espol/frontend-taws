import './style.css'
import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return(
        <div className='Footer mt-24'>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:gap-10 pb-6" >
                <div className="contacto">
                    <h1 className='text-white font-bold text-4xl pb-4'>Contáctanos</h1>
                    <h2 className='text-white'>Bloque 15 - FIEC, Guayaquil 090150, Ecuador<br></br>taws@espol.edu.ec</h2>
                </div>
                <div className="redes">
                    <h1 className='text-white font-bold text-4xl pb-4'>Redes Sociales</h1>
                    <ul className="flex">
                        <a target="_blank"><li  className='mr-4'><SocialIcon target="_blank" url="https://twitter.com/TawsEspol" fgColor="#fff"/></li></a>
                         <a target="_blank"><li  className='mr-4'><SocialIcon target="_blank" url="https://www.facebook.com/tawsespol" fgColor="#fff"/></li></a>
                        <a target="_blank">  <li className='mr-4'><SocialIcon target="_blank" url="https://github.com/Taws-Espol" fgColor="#fff"/></li></a>
                    </ul>
                </div>
            </div>
            <p className='text-white text-center p-5 text-lg'>Copyright © {new Date().getFullYear()} TAWS. All rights reserved.</p>
        </div>
    )
}

export default Footer