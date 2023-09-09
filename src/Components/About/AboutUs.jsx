import React from 'react'
import "./AboutUs.css"
import Button from "../Button/Button"
import Cta from './Cta/Cta'
import Companies from './Companies/Companies'

const AboutUs = () => {
    return (
        <>
            <div className="about-us-section">
                <div className="bannerimage">
                    <img src="./Images/about-us-image.png" alt="" />
                </div>

                <div className="about-us-card">
                    <div className="container">
                        <div className="flex-container">
                            <div className="section-1">
                                <p className='heading'>About us, who
                                    we are and why
                                    we do it</p>
                            </div>
                            <div className="margin"></div>
                            <div className="section-2">
                                <p className='para'>
                                "At NurtureNexus, we are a passionate and diverse group of individuals who believe in the power of community. Our platform is a hub of connection, collaboration, and growth, where like-minded people gather to share ideas, learn from each other, and create meaningful connections. 
                                </p>
                                <p className='para'>We're driven by the belief that together, we can achieve more than we ever could alone. Our mission is to foster an inclusive and supportive space where aspirations are nurtured, and possibilities are endless. Join us on this journey of unity and empowerment.</p>
                                <Button text="company@email.com" className="main-btn about-us-btn" path="" />
                            </div>
                        </div>
       
                    </div>
                    <div className="margin"></div>
                </div>
            </div>

            <Cta />
            <Companies />

        </>
    )
}

export default AboutUs
