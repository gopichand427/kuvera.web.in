import React from 'react'
import { useState } from 'react'
import '../cssfiles/LandingPage.css'
import landingimage_1 from '../images/intro-ill (1).svg'
import landingimage_2 from '../images/stocks-ill.svg'
import landingimage_3 from '../images/save-smart-widget-content.svg'
import landingimage_4 from '../images/ill-cm.svg'
import landingimage_5 from '../images/android-blue.svg'
import landingimage_6 from '../images/apple-blue.svg'
import landingimage_22 from '../images/start-investing-today-ill.svg'


import landingimage_7 from '../images/tax-saver-icon.svg'
import landingimage_8 from '../images/icon.svg'
import landingimage_9 from '../images/trade-smart-ic.svg'
import landingimage_10 from '../images/family-account-icon.svg'
import landingimage_12 from '../images/automated-tracking-icon.svg'
import landingimage_11 from '../images/set-a-goal-icon.svg'
import landingimage_13 from '../images/why-kuvera-ill.svg'
import landingimage_14 from '../images/38-funds-ill.svg'
import landingimage_15 from '../images/completely-free-ill.svg'

import landingimage_16 from '../images/krati_golash.png'
import landingimage_17 from '../images/aniket_jha.png'
import landingimage_18 from '../images/deepak_s (1).png'
import landingimage_19 from '../images/anand_b.png'
import landingimage_20 from '../images/harshil_gandhakwala.png'
import landingimage_21 from '../images/niladri_d.png'

const LandingPage = () => {

    const [isopen1, setIsopen1] = useState(true);
    const [isopen2, setIsopen2] = useState(false);
    const [isopen3, setIsopen3] = useState(false);

    const [isImage1, setIsImage1] = useState(true)
    const [isImage2, setIsImage2] = useState(false)
    const [isImage3, setIsImage3] = useState(false)

    const onClickOpen1 = () =>{
        setIsopen1(!isopen1);
        setIsImage1(!isImage1);
        setIsImage2(false);
        setIsImage3(false);
        setIsopen2(false);
        setIsopen3(false);
    }

    const onClickOpen2 = () =>{
        setIsImage1(false);
        setIsImage2(true);
        setIsImage3(false);
        setIsopen1(false);
        setIsopen2(true);
        setIsopen3(false);
    }

    const onClickOpen3 = () =>{
        setIsImage1(false);
        setIsImage2(false);
        setIsImage3(true);
        setIsopen1(false);
        setIsopen2(false);
        setIsopen3(true);
    }
    
  return (
    <div>
      <div className='first-section-div'>
      <div>
      {isImage1 &&(
        <img src = {landingimage_1}  className='lanndingimage' alt='landingimage' />
      )}

      {isImage2 &&(
        <img src = {landingimage_2}  className='lanndingimage' alt='landingimage' />
      )}

      {isImage3 &&(
        <img src = {landingimage_3}  className='lanndingimage' alt='landingimage' />
      )}

      <h3>Online investment in India simplified- Kuvera</h3>
      <p>Zero fee. Higher return.</p>
      <div>
        <button>Login</button>
        <button>Sign Up</button>
      </div>
      </div>

      <div>
        <div>
            <div className='section-sub-div'>
            <div style={{display:'flex',columnGap:'30px'}}>
            <div>
                <h3 onClick={onClickOpen1}>Mutual Funds</h3>
                <div className='line-div-blue'></div>
            </div>
            <div>
                <h3 onClick={onClickOpen2}>Stocks</h3>
                <div className='line-div-blue'></div>
            </div>
            <div>
                <h3 onClick={onClickOpen3}>SaveSmart</h3>
                <div className='line-div-blue'></div>
            </div>
            </div>
{isopen1 &&(<div className='section-sub-div-1'>

        <div style={{gap:'30px',marginTop:'20px'}}>
                        <a className='landing-a' href='/'>Quant Infrastructure Growth Direct Plan</a>
                        <div className='MutualFunds-subdiv'>
                            <div>
                                <p>NAV</p>
                                <p>$45.4023 <span style={{color:'green', fontSize:'12px'}}>-0.16%</span></p>
                            </div>
                            <div>
                                <p>1Y</p>
                                <p>82.08%</p>
                            </div>
                            <div>
                                <p>3Y</p>
                                <p>37.21%</p>
                            </div>
                            </div>
                            <div className='line-div'></div>
                        </div>
                        
                        <div style={{gap:'30px',marginTop:'20px'}}>
                        <a className='landing-a' href='/'>Invesco India Infrastructure Growth Direct Plan</a>
                        <div className='MutualFunds-subdiv'>
                            <div>
                                <p>NAV</p>
                                <p>$75.6100 <span style={{color:'green', fontSize:'12px'}}>0.85%</span></p>
                            </div>
                            <div>
                                <p>1Y</p>
                                <p>76.57%</p>
                            </div>
                            <div>
                                <p>3Y</p>
                                <p>35.69%</p>
                            </div>
                            </div>
                            <div className='line-div'></div>
                        </div>

                        <div style={{gap:'30px',marginTop:'20px'}}>
                        <a className='landing-a' href='/'>LIC MF Infrastructure Growth Direct Plan</a>
                        <div className='MutualFunds-subdiv'>
                            <div>
                                <p>NAV</p>
                                <p>$51.6169<span style={{color:'green', fontSize:'12px'}}>-0.97%</span></p>
                            </div>
                            <div>
                                <p>1Y</p>
                                <p>76.26%</p>
                            </div>
                            <div>
                                <p>3Y</p>
                                <p>35.43%</p>
                            </div>
                            </div>
                            <div className='line-div'></div>
                        </div>
</div> )}

{isopen2 &&(<div className='section-sub-div-1'>

<div style={{gap:'30px',marginTop:'20px'}}>
                <a className='landing-a' href='/'>REC Ltd</a>
                <div className='MutualFunds-subdiv'>
                    <div>
                        <p>Price</p>
                        <p>511.05</p>
                    </div>
                    <div>
                        <p>1Y</p>
                        <p>+242.99%</p>
                    </div>
                    <div>
                        <p>Market cap</p>
                        <p>1.3 Lac Cr</p>
                    </div>
                    </div>
                    <div className='line-div'></div>
                </div>
                
                <div style={{gap:'30px',marginTop:'20px'}}>
                <a className='landing-a' href='/'>Bharat Heavy Electricals Ltd</a>
                <div className='MutualFunds-subdiv'>
                    <div>
                        <p>Price</p>
                        <p>$284.40</p>
                    </div>
                    <div>
                        <p>1Y</p>
                        <p>+231.39%</p>
                    </div>
                    <div>
                        <p>Market cap</p>
                        <p>99,029.9 Cr</p>
                    </div>
                    </div>
                    <div className='line-div'></div>
                </div>

                <div style={{gap:'30px',marginTop:'20px'}}>
                <a className='landing-a' href='/'>Trent Ltd</a>
                <div className='MutualFunds-subdiv'>
                    <div>
                        <p>Price</p>
                        <p>4,950.00</p>
                    </div>
                    <div>
                        <p>1Y</p>
                        <p>+210.19%</p>
                    </div>
                    <div>
                        <p>Market cap</p>
                        <p>1.8 Lac Cr</p>
                    </div>
                    </div>
                    <div className='line-div'></div>
                </div>
</div> )}

{isopen3 &&(<div className='section-sub-div-1'>

<div style={{gap:'30px',marginTop:'20px'}}>
                <a className='landing-a' href='/'>Quant Infrastructure Growth Direct Plan</a>
                <div className='MutualFunds-subdiv'>
                    <div>
                        <p>NAV</p>
                        <p>$45.4023 <span style={{color:'green', fontSize:'12px'}}>-0.16%</span></p>
                    </div>
                    <div>
                        <p>1Y</p>
                        <p>82.08%</p>
                    </div>
                    <div>
                        <p>3Y</p>
                        <p>37.21%</p>
                    </div>
                    </div>
                    <div className='line-div'></div>
                </div>
                
                
</div> )}
                
            </div>
        </div>
      </div>
      </div>

      <div className='second-section-div'>
      <div className='second-section-sub-div'>
      <a href='/'><img src = {landingimage_5}  className='lanndingimage-icons' alt='landingimage_5' /></a>
      <a href='/'><img src = {landingimage_6}  className='lanndingimage-icons' alt='landingimage_6' /></a>
      <div style={{textAlign:'start'}}>
      <p style={{marginBottom:'-10px'}}>Mobile First</p>
      <h1>Available on all devices</h1>
      </div>
      </div>
      <div>
      <img src = {landingimage_4}  className='lanndingimage' alt='landingimage_4' />
      </div>
      </div>

      <div className='thered-section-div'>
      <p style={{marginBottom:'-15px'}}>Invest your way</p>
      <h2>One login. All features.</h2>

      <div className='thered-sectionsub-div'>
        <div className='thered-section-subdiv'>
        <img src = {landingimage_7}  className='lanndingi-icons' alt='landingimage_4' />
        <h3>Tax saver</h3>
        <p style={{fontSize:'11px',marginTop:'-15px'}}>Lowest lock-ins. Simple withdrawals. Potentially better returns. ELSS is the new hero to save the day!</p>
        <div style={{display:'flex',flexDirection:'column',rowGap:'45px'}}>
            <a href='/'>Learn More</a>
            <button className='button-1'>Explore ELLS funds</button>
        </div>
        </div>

        <div className='thered-section-subdiv'>
        <img src = {landingimage_8}  className='lanndingi-icons' alt='landingimage_8' />
        <h3>Tax harvesting</h3>
        <p style={{fontSize:'11px',marginTop:'-15px'}}>Minimise your long term tax impact by realising up to ₹1 Lakh of Long Term Capital Gain (LTCG) every year with no tax.</p>
        <div style={{display:'flex',flexDirection:'column',rowGap:'30px'}}>
            <a href='/'>Learn More</a>
            <button className='button-1'>Explore ELLS funds</button>
        </div>
        </div>

        <div className='thered-section-subdiv'>
        <img src = {landingimage_9}  className='lanndingi-icons' alt='landingimage_9' />
        <h3>TradeSmart</h3>
        <p style={{fontSize:'11px',marginTop:'-15px'}}>Switching away from commission laden regular mutual funds used to be cumbersome. We have changed that!</p>
        <div style={{display:'flex',flexDirection:'column',rowGap:'30px'}}>
            <a href='/'>Learn More</a>
            <button className='button-1'>Explore ELLS funds</button>
        </div>
        </div>

        <div className='thered-section-subdiv'>
        <img src = {landingimage_10}  className='lanndingi-icons' alt='landingimage_10' />
        <h3>Family account</h3>
        <p style={{fontSize:'11px',marginTop:'-15px'}}>Just Sign up with one account, and manage investments for your relatives and family members.</p>
        <div style={{display:'flex',flexDirection:'column',rowGap:'45px'}}>
            <a href='/'>Learn More</a>
            <button className='button-1'>Upgrade To Family account</button>
        </div>
        </div>

        <div className='thered-section-subdiv'>
        <img src = {landingimage_11}  className='lanndingi-icons' alt='landingimage_11' />
        <h3>Automated tracking</h3>
        <p style={{fontSize:'11px',marginTop:'-15px'}}>Consolidate and track your entire Mutual Fund portfolio with highest level of privacy protection.</p>
        <div style={{display:'flex',flexDirection:'column',rowGap:'20px',alignSelf:'flex-end'}}>
            <a href='/'>Learn More</a>
            <button className='button-1'>Consolidate & track</button>
        </div>
        </div>

        <div className='thered-section-subdiv'>
        <img src = {landingimage_12}  className='lanndingi-icons' alt='landingimage_12' />
        <h3>Set a goal</h3>
        <p style={{fontSize:'11px',marginTop:'-15px'}}>A new car, owning your own home, sending your kids to study abroad - you have many reasons to invest.</p>
        <div style={{display:'flex',flexDirection:'column',rowGap:'45px',alignSelf:'flex-end'}}>
            <a href='/'>Learn More</a>
            <button className='button-1'>Set a goal</button>
        </div>
        </div>
      </div>

      
      </div>

      <div className='fourth-section-div'>
            <div>
                <h3>Oct 2017</h3>
                <p>We pioneered commission free Direct Plan investing.</p>
            </div>

            <div>
                <h3>Super support</h3>
                <p>Handled by a caring team on chat, email and tweet!</p>
                <p>Reach us at <a>support@kuvera.in</a></p>
            </div>

            <div>
                <h3>Stop paying commission</h3>
                <p>Switch to commission free Direct Plans on Kuvera.</p>
            </div>
      </div>

      <div className='fiveth-section-div'>
            <div className='fiveth-sectionsub-div'>
                
                <p style={{textAlign:'start'}}>Why Kuvera</p>
                <h3 style={{textAlign:'start'}}>Because, your best interest is ours too.</h3>

                <div style={{display:'flex',columnGap:'20px', flexWrap:'wrap'}}>
                <div>
                <div className='fiveth-sectionsub-subdiv'>
                    <div className='fiveth-sectionsub-subdiv-1'>
                        <h3>Expert team</h3>
                        <p>We are data driven ex-money managers & technologists. We know how to make financial management easy.
                        More about our team</p>
                    </div>

                    <div className='fiveth-sectionsub-subdiv-1'>
                        <h3>Only direct plans</h3>
                        <p>We offer Direct Plans. So you never pay the commissions (up to 1.5%) that you would in a Regular Plan. That adds up, up to 35% more in just 20 years!</p>
                    </div>
                </div>

                <div className='fiveth-sectionsub-subdiv'>
                    <div className='fiveth-sectionsub-subdiv-1'>
                        <h3>Bank level security</h3>
                        <p>We employ the latest security protocols & partner with reputable institutions to keep your money safe.</p>
                    </div>

                    <div className='fiveth-sectionsub-subdiv-1'>
                        <h3>SEBI registered</h3>
                        <p>We are registered with the Securities and Exchange Board of India (SEBI) as an Investment Advisor (INA200005166).</p>
                    </div>
                </div>
                </div>
                <img src = {landingimage_13}  className='lanndingimage' alt='landingimage_13' />
                </div>

                <button>Start investing</button>

            </div>

      </div>

      <div className='sixth-section-div'>
      <img src = {landingimage_15}  className='lanndingimage' alt='landingimage_15' />
      <div>
        <h1>The first free investment management platform</h1>
        <p>No conflict of interest. Nada.</p>
      </div>
      </div>

      <div className='seventh-sections-dive'>
      <div className='seventh-sectionsub1-dive'>
        <p>Industry Leading</p>
        <h2>46 Fund houses</h2>
        <img src = {landingimage_14}  className='lanndingimage' alt='landingimage_14' />
      </div>
      <div className='seventh-sectionsub2-dive'>
      <div>
      <p>360 ONE</p>
      <p>ADITYA BIRLA SUN LIFE</p>
      <p>BAJAJ FINSERV ASSET MANAGEMENT</p>
      <p>BANK OF INDIA</p>
      <p>HDFC</p>
      <p>INDIA BULLS</p>
      <p>INVESCO</p>
      <p>JM FINANCIAL</p>
      <p>KOTAK</p>
      <p>L&T</p>
      <p>UNION</p>
      </div>

      <div>
      <p>360 ONE</p>
      <p>ADITYA BIRLA SUN LIFE</p>
      <p>BAJAJ FINSERV ASSET MANAGEMENT</p>
      <p>BANK OF INDIA</p>
      <p>HDFC</p>
      <p>INDIA BULLS</p>
      <p>INVESCO</p>
      <p>JM FINANCIAL</p>
      <p>KOTAK</p>
      <p>L&T</p>
      <p>UNION</p>
      </div>

      </div>

      </div>

      <div className='eighth-section-div'>
      <div className='eighth-section-card'>
        <div className='eighth-section-card1 '>
        <div>
        <img src = {landingimage_16}  className='lanndingimage-persons' alt='landingimage_16' />
        <p>The platform is super easy to use & navigate and provides just the information you need!</p>
        </div>
        <div>
            <h6>Krati Golash</h6>
            <p>IT Marketer, 28, Madhya Pradesh</p>
            <a href='/'>Read Krati's story</a>
        </div>
        </div>

        <div className='eighth-section-card1'>
        <div>
        <img src = {landingimage_20}  className='lanndingimage-persons' alt='landingimage_20' />
        <p>I found Kuvera when I searched "Best online Platform to invest in mutual fund".</p>
        </div>
        <div>
            <h6>Harshil Gandhakwala</h6>
            <p>PSU Banker, 28, Ahmedabad</p>
            <a href='/'>Read Harshil's story</a>
        </div>
        </div>

        <div className='eighth-section-card1'>
        <div>
        <img src = {landingimage_17}  className='lanndingimage-persons' alt='landingimage_17' />
        <p>Each time I get a notification email stating that a certain feature has been added…I have just two words – oh wow.</p>
        </div>
        <div>
            <h6>Aniket Jha</h6>
            <p>NGO, 31, Bangalore</p>
            <a href='/'>Read Aniket  story</a>
        </div>
        </div>

        <div className='eighth-section-card1'>
        <div>
        <img src = {landingimage_19}  className='lanndingimage-persons' alt='landingimage_19' />
        <p>TradeSmart is a great feature. I cannot imagine a site like this 5 years back!</p>
        </div>
        <div>
            <h6>Anand B</h6>
            <p>Software Engineer, 38, Bangalore</p>
            <a href='/'>Read Anand B story</a>
        </div>
        </div>

        <div className='eighth-section-card1'>
        <div>
        <img src = {landingimage_21}  className='lanndingimage-persons' alt='landingimage_21' />
        <p>Kuvera has goal planning, portfolio recommendation and also TradeSmart which really helps to save on taxes and exit loads.</p>
        </div>
        <div>
            <h6>Niladri Dutta</h6>
            <p>Software Engineer, 29, Bangalore</p>
            <a href='/'>Read Niladri Dutta story</a>
        </div>
        </div>

        <div className='eighth-section-card1'>
        <div>
        <img src = {landingimage_18}  className='lanndingimage-persons' alt='landingimage_18' />
        <p>I am truly impressed by the import portfolio and STP/ SWP option in Kuvera.</p>
        </div>
        <div>
            <h6>Deepak Sahu</h6>
            <p>Data Engineer, 25, Mumbai</p>
            <a href='/'>Read Deepak Sahu story</a>
        </div>
        </div>
        </div>
        


      </div>

      
      <div className='sixth-section-div'>
      <img style={{marginTop:'30px'}} src = {landingimage_22} className='lanndingimage'  alt='landingimage_22' />
      <div>
        <h1>Start investing today</h1>
        <p>Don’t wait. 1L today will buy a lot less in 10 years if not invested to grow. Take 2 minutes to sign up. The future you will be grateful</p>
        <button style={{backgroundColor:' rgb(45, 181, 239)',color:'black'}} className='button-1'>Start investing</button>
      </div>
      </div>
      


    </div>
  )
}

export default LandingPage
