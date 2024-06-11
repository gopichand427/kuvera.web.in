import React from 'react'
import '../cssfiles/Footer.css'
import kuvera_logo from '../images/kuvera-logo-light.svg'
import kuvera_app_store from '../images/app-store.svg'
import kuvera_dowmload from '../images/download.png'

import { IoLogoYoutube , IoLogoFacebook,IoLogoTwitter,IoLogoInstagram,IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <div>
      <div className='first-section-1-footer'>
      <div className='first-section-footer'>
      <div className='first-section-sub1'>
      <img src = {kuvera_logo}  className='Kuvera-Log-footer' alt='logo' />
      <div className='icons-div'>
        <IoLogoYoutube className='icond-footer' />
        <IoLogoFacebook className='icond-footer'/>
        <IoLogoTwitter className='icond-footer'/>
        <IoLogoInstagram className='icond-footer'/>
        <IoLogoLinkedin className='icond-footer'/>
      </div>
      <button className='footer-button'>GET FINANCE HIHGEST</button>
      </div>

      <div  className='first-section-sub2'>
      <div className='About-us-section'>
        <h2>About Us</h2>
        <a href='/'>The Team</a>
        <a href='/'>Why Kuvera</a>
        <a href='/'>Press</a>
        <a href='/'>Terms & Conditions</a>
        <a href='/'>Privacy Policy</a>
        <a href='/'>Regulatory Disclosure</a>
      </div>

      <div className='About-us-section'>
        <h2>Investing</h2>
        <a href='/'>Switch to Direct Funds</a>
        <a href='/'>Save taxes</a>
        <a href='/'>Set a goal</a>
        <a href='/'>Explore funds</a>
      </div>

      <div className='About-us-section'>
        <h2>Top fund houses</h2>
        <a href='/'>Axis Mutual Funds</a>
        <a href='/'>SBI Mutual Funds</a>
        <a href='/'>Nippon Mutual Funds</a>
        <a href='/'>ICICI Mutual Funds</a>
      </div>

      <div className='About-us-section'>
        <h2>Learn more</h2>
        <a href='/'>Blog</a>
        <a href='/'>Tax</a>
        <a href='/'>Retirement</a>
        <a href='/'>Sitemap</a>
      </div>
      </div>
      </div>
      <div className='Footer-Line'></div>
      <div className='footer-div-1'>
        <p style={{color:'white'}}>2024 © Arevuk Advisory Services Pvt Ltd. Coded withHeartfrom India</p>
        <div className='footer-end-div'>
            <p style={{color:'white'}}>Download mobile apps</p>
            <div style={{marginTop:'-25px'}}>
            <img src = {kuvera_app_store}  className='app-img-footer' alt='kuvera_app_store' />
            </div>
            <div style={{marginBottom:'-20px'}}>
            <img src = {kuvera_dowmload}  className='android-app-img-footer' alt='kuvera_dowmload' />
            </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Footer
