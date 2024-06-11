import React from 'react';
import { useState } from 'react';
import kuvera_logo from '../images/Kuvera_Logo.png'
import '../cssfiles/Navbar.css';
import { HiChevronDown , } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";




const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isOpendropdown1, setIsOpendropdown1] = useState(false);
    const [isOpendropdown2, setIsOpendropdown2] = useState(false);

    const [isOpendropdown3, setIsOpendropdown3] = useState(false);
    const [isOpendropdown4, setIsOpendropdown4] = useState(false);


    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
        
      } else {
        setIsSticky(false);
      }
    };
  
    React.useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    const isOpenEventHandler1 = () =>{
        setIsOpendropdown2(false)
        setIsOpendropdown1(!isOpendropdown1)
    }

    const isOpenEventHandler2 = () =>{
        setIsOpendropdown2(!isOpendropdown2)
        setIsOpendropdown1(false)
    }

    const isOpenEventHandler3 = () =>{

        const isrotatedId3 = document.querySelector('.downArow3');
        const isrotatedId4 = document.querySelector('.downArow4');
        isrotatedId3.classList.toggle('downArow-rotat')
        isrotatedId4.classList.toggle('downArow-rotat-0')
        setIsOpendropdown4(false)
        setIsOpendropdown3(!isOpendropdown3)
    }


    const isOpenEventHandler4 = () =>{
      const isrotatedId3 = document.querySelector('.downArow3');
      const isrotatedId4 = document.querySelector('.downArow4');

      isrotatedId3.classList.toggle('downArow-rotat-0')
      isrotatedId4.classList.toggle('downArow-rotat')
        setIsOpendropdown4(!isOpendropdown4)
        setIsOpendropdown3(false)
    }

    const isNavBarOnclick = () =>{
      const NavBarId = document.querySelector('.navbar');
      NavBarId.classList.toggle('navbar-show')
    }





  return (
        
    <div>
        <div className={`navbar-container ${isSticky ? 'sticky' : ''}`} >
        <div style={{display:'flex'}}>
        <div onClick={isNavBarOnclick} className='main-buttons'>
            <div className='buttons'></div>
            <div className='buttons'></div>
            <div className='buttons'></div>
        </div>
          <a href='/'>
            <img src = {kuvera_logo}  className='Kuvera-Log' alt='logo' />
          </a>
          <button className='options-div'>
          <ul>
            <li className='text-a' onClick={isOpenEventHandler1}>Invest</li>
            <li className='text-a' onClick={isOpenEventHandler1} style={{marginLeft:'-30px',marginTop:'3px'}}><HiChevronDown/></li>
            <li className='text-a' onClick={isOpenEventHandler2}>Features</li>
            <li className='text-a' onClick={isOpenEventHandler2} style={{marginLeft:'-30px',marginTop:'3px'}}><HiChevronDown/></li>
          </ul>
          </button>
          </div>
          <div className='section-2'>
            <FaSearch />
            <a className='text-a' href='/'>Log in</a>
          </div>
        </div>
        {isOpendropdown1 &&(        
            <ul className="dropdown">
                <a href='/' className='text-a'>Explore</a>
                <a href='/' className='text-a'>Mutual Funds</a>
                <a href='/' className='text-a'>Fixed Deposit</a>
                <a href='/' className='text-a'>Stocks</a>
                <a href='/' className='text-a'>SaveSmart</a>
            </ul>)}
        {isOpendropdown2 &&(
            <ul className="dropdown" style={{left:"350px"}}>
                <a href='/' className='text-a'>Calculators</a>
                <a href='/' className='text-a'>Set a goal</a>
                <a href='/' className='text-a'>TradeSmart</a>
                <a href='/' className='text-a'>Family Account</a>
                <a href='/' className='text-a'>Tax Harveesting</a>
                <a href='/' className='text-a'>Save Texes</a>
                <a href='/' className='text-a'>Consolidate</a>
            </ul>)}
            <nav className='navbar'>
            <div className='Offcanva-header'>
            <a href='/'>
            <img src = {kuvera_logo}  className='Kuvera-Log' alt='logo' style={{marginLeft:'20px'}} />
          </a>
          <div onClick={isNavBarOnclick} className='main-buttons-2'>
          <div className='buttons-1'></div>
          <div className='buttons-2'></div>
          </div>
            </div>
            <div style={{backgroundColor:'black',height:'1px'}}></div>
                <div className='navbar-section-1'>
                    <button onClick={isOpenEventHandler3} className='ofcanva-sections'>Invest<span><HiChevronDown className='downArow3' /></span></button>
                    {isOpendropdown3 &&(
                    <div className='dropdown-section'>
                        <a href='/' className='text-a'>Explore</a>
                        <a href='/' className='text-a'>Mutual Funds</a>
                        <a href='/' className='text-a'>Fixed Deposit</a>
                        <a href='/' className='text-a'>Stocks</a>
                        <a href='/' className='text-a'>SaveSmart</a>
                    </div>)}
                    <button onClick={isOpenEventHandler4} className='ofcanva-sections'>Features<span><HiChevronDown className='downArow4' /></span></button>
                    {isOpendropdown4 &&(
                    <div className='dropdown-section'>
                        <a href='/' className='text-a'>Calculators</a>
                        <a href='/' className='text-a'>Set a goal</a>
                        <a href='/' className='text-a'>TradeSmart</a>
                        <a href='/' className='text-a'>Family Account</a>
                        <a href='/' className='text-a'>Tax Harveesting</a>
                        <a href='/' className='text-a'>Save Texes</a>
                        <a href='/' className='text-a'>Consolidate</a>
                    </div>)}
                    <a href='/'  className='ofcanva-sections' style={{paddingLeft:'6px'}}>About</a>
                    <a href='/'  className='ofcanva-sections' style={{paddingLeft:'6px'}}>Blog</a>

                    <div style={{display:'flex',flexDirection:'column',textAlign:'start',gap:'10px',marginTop:'10px',marginLeft:'10px'}}>
                        <a href='/'  className='ofcanva-sections'>Log in</a>
                        <a href='/'  className='ofcanva-sections'>Sign Up</a>
                    </div>
                </div>
                <div style={{display:'flex',gap:'10px',justifyContent:'center',marginTop:'10px'}}>
                  <a href='/' style={{color:'blue'}}>Terms</a>
                  <a href='/' style={{color:'blue'}}>Privacy Policy</a>
                </div>
            </nav>
    </div>

  )
}

export default Navbar
