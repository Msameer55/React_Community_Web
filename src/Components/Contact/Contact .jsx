import React from 'react'
import "./Contact.css"
import Button from "../Button/Button"

const Contact = () => {
    return (
        <>
            <div className="contact-container">
                <div className="container">
                    <div className="flex-container">
                        <div className="col-1">
                            <p className='heading'>Get in touch
                                with us</p>
                            <p className='enquiry'>Enquiries</p>
                            <p className='mail'>company@email.com</p>
                            <p className='phone'>+62 007 008 009</p>
                        </div>
                        <div className="col-2">
                            <form action="#" method="post">
                                <div className="form-group inline">
                                    <div className="input-group">
                                        <label htmlFor="first-name">First Name:</label>
                                        <input type="text" id="first-name" name="first_name" required />
                                    </div>
                                    <div className="input-group">
                                        <label htmlFor="last-name">Last Name:</label>
                                        <input type="text" id="last-name" name="last_name" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone:</label>
                                    <input type="tel" id="phone" name="phone" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message:</label>
                                    <textarea id="message" name="message" rows="4" required />
                                </div>
                                <Button path="" className="home-btn" text="Let's talk" />
                            </form>

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact 
