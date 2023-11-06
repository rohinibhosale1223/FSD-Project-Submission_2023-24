import React from 'react'
import "/Users/macbookair/Projects/AniWatch_Clone/aniwatch/src/CSS/Footer.css";

const Footer = () => {
  return (
    <div className='Footer'>
        <div className="Socials margin">
        <a href="https://www.facebook.com/" class="fa fa-facebook"> </a>
        <a href="https://twitter.com/login?lang=en" class="fa fa-twitter"> </a>
        <a href="https://www.youtube.com/" class="fa fa-youtube"> </a>
        <a href="https://www.instagram.com/" class="fa fa-instagram"> </a>
        </div>
        <h3 className='white margin'>Contact Us</h3>
        <h3 className='white margin'>Our Service</h3>
        <h3 className='white margin'>Privacy Policy</h3>
        <h3 className='white margin'>Terms and Conditions</h3>
        <h3 className='white margin'>Career</h3>
        <h3 className='white copyright'>Copyright © 2023 Inferno - All rights reserved || Designed By: Karan</h3>
    </div>
  )
}

export default Footer
