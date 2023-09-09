import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <div className="footer-container">
                <div className="container">
                    <div className="flex-container">
                        <div className="col-1">
                            <img src="./Images/Logo.png" alt="Logo" />
                            <p className="text">
                                Empowering Together: Nurturing Growth Through Unity.</p>
                        </div>
                        <div className="col-2">
                            <div className="images-container">
                             
                                <img src="./Images/insta.png" alt="Instagram" />
                                <img src="./Images/twitter.png" alt="Twitter" />
                                <img src="./Images/git.png" alt="Git" />
                                <img src="./Images/hug.png" alt="Hug" />
                            </div>
                        </div>

                       
                    </div>
                    <div className="text-align"><p>© 2100 Company, Inc. All rights reserved.</p></div>
                </div>
            </div>

        </>
    )
}

export default Footer
