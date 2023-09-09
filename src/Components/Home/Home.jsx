import React from 'react'

import "./Home.css"
import Button from '../Button/Button'
import Same from '../Same/Same'



const Home = () => {
    return (
        <>
            <div className="hero-background">
                <img src="./Images/background.png" alt="img" />
                <div className="content container">
                    <div className="heading">
                        <p>Connect, <span className='green'>Engage, </span>Thrive: <br />
                            Welcome to <span className='green'>NurtureNexus</span> </p>
                    </div>
                    <div className="sub-heading">
                        <p>"Join a Vibrant Online Hub Where NurtureNexus Comes Together Immerse yourself in the dynamic energy of NurtureNexus, a thriving virtual community where aspirations converge and possibilities flourish"</p>
                    </div>

                    <div className="button-container">
                        <Button text="Get started" path="/contact" className="home-btn" />
                        <Button text="Our Work" className="secondary-btn home-btn" />
                    </div>


                </div>

            </div>
            <div className="section-container-1">
                <Same tagline=" Unite. Collaborate. Achieve."
                 heading="Embrace Unity, Ignite Collective Impact" 
                 para="At Our NurtureNexus, we firmly believe that unity is the cornerstone of progress. Our platform is more than just a space for connection; it's a sanctuary where diverse minds converge to achieve a common purpose. By embracing unity, we amplify our impact and create a ripple effect of positive change. In a world where collaboration fuels innovation and shared goals drive transformation, NurtureNexus stands as a testament to the boundless potential of a united community. Join us as we celebrate diversity, nurture connections, and empower each other to create lasting, meaningful change. Together, we can achieve what's never been accomplished alone." 
                 imgSrc1= "./Images/Image.png"
                 imgSrc2= "./Images/Image-1.png"
                 />
            </div>
      
           
        </>
    )
}

export default Home
