import React from 'react'
import "../hojas-de-estilo/footer.css"


const Footer = () => {
  return (
    <footer>
   <div className='footer-paragraph'><p >Powered by</p></div> 

    <div className='footer-logo-and-icons'>
      <img src="/images/DH.png" alt="" width={200}/>
     
      <div>
        <a href="/#"><img className='footer-icons' src="/images/ico-facebook.png" alt="" /></a>
        <a href="/#"><img className='footer-icons' src="/images/ico-instagram.png" alt="" /></a>
        <a href="/#"><img className='footer-icons' src="/images/ico-whatsapp.png" alt="" /></a>
        <a href="/#"><img className='footer-icons' src="/images/ico-tiktok.png" alt="" /></a>
      </div>
    </div>
</footer>
  )
}

export default Footer
