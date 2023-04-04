import React from 'react'
import "../hojas-de-estilo/img-iconos.css"


const Footer = () => {
  return (
    <footer>
        <div className='footer'> </div>
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' />
        <img className='img-iconos' src="/images/ico-facebook.png"alt ="facebook"/>
        <img className='img-iconos' src="/images/ico-instagram.png"alt ="instagram"/>
        <img className='img-iconos' src="/images/ico-whatsapp.png"alt ="whatsapp"/>
        <img className='img-iconos' src="/images/ico-tiktok.png"alt ="tiktok"/>
    </footer>
  )
}

export default Footer
