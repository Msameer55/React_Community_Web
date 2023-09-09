import React from 'react'
import Button from '../Button/Button'


const Same = ({tagline, para, heading, imgSrc1, imgSrc2}) => {
    return (
        <>
            <div className="container">
                <div className="flex-container">
                    <div className="col-1">
                        <div className="tagline"><p>
                            {tagline}</p> </div>
                        <p className='heading'>{heading}</p>
                        <p className='para'>{para}</p>
                        <div className="button-container">
                            <Button text="Get started" path="/contact" className="main-btn home-btn" />
                        </div>

                    </div>
                    <div className="col-2">

                        <div className="images">
                            <img src={imgSrc1} alt="Collaboration Image" className='img-1' />
                            <img src={imgSrc2} alt="Collaboration Image2" className='img-2' />
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Same
