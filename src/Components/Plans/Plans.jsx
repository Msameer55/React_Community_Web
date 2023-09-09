import React from 'react'
import "./Plans.css"
import { TiTick } from "react-icons/ti"
import { PlansApi } from './PlansApi'
import Marquee from "react-fast-marquee";

const Plans = () => {
    return (
        <>
            <div className="pricing-section">
                <div className="pricing-container">
                    <div className="container">

                        <div className="text-container">
                            <p className="heading">
                                Pricing
                                Plans
                            </p>
                            <p className="para">
                                Discover the perfect pricing plan that aligns with your needs and goals. We offer flexible options designed to cater to individuals, teams, and organizations of all sizes. Join NurtureNexus and unlock a world of opportunities, connections, and growth.
                            </p>
                        </div>


                    </div>
                </div>
                <div className="pricing-cards">


                    {
                        PlansApi.map((plans, index) => {
                            return (
                                <>
                                    <div className="card" key={index}>
                                        <p className="plan">{plans.plan}</p>
                                        <p className="rate">{plans.rate}<span className='month'>{plans.month}</span></p>
                                        <p className="para">{plans.para}</p>
                                        <div className="lists">
                                            {
                                                plans.lists.map((list) => {
                                                    return (
                                                        <>
                                                            <p className="products"><TiTick className='tick-sign' />{list.products}</p>
                                                            <p className="subscriber"><TiTick className='tick-sign' />{list.subscriber}</p>
                                                            <p className="analytics"><TiTick className='tick-sign' />{list.analytics}</p>
                                                            <p className="response-time"><TiTick className='tick-sign' />{list.response}</p>
                                                            {list.automation && <p className="automation"><TiTick className='tick-sign' />{list.automation}</p>}
                                                            {
                                                                list.integration && <p className="integration"><TiTick className='tick-sign' />{list.integration}</p>
                                                            }
                                                        </>
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>


                <div className="marquee-section">

                    <div className="marquee-items">
                    <Marquee>
                       <img src="./Images/1.png" alt="Marquee" />
                       <img src="./Images/2.png" alt="Marquee" />
                       <img src="./Images/3.png" alt="Marquee" />
                       <img src="./Images/4.png" alt="Marquee" />
                       <img src="./Images/5.png" alt="Marquee" />
                       <img src="./Images/6.png" alt="Marquee" />
                       <img src="./Images/7.png" alt="Marquee" />
                       <img src="./Images/8.png" alt="Marquee" />
                       <img src="./Images/9.png" alt="Marquee" />
                       <img src="./Images/10.png" alt="Marquee" />
                       <img src="./Images/11.png" alt="Marquee" />
                       <img src="./Images/12.png" alt="Marquee" />
                       <img src="./Images/13.png" alt="Marquee" />
                       <img src="./Images/14.png" alt="Marquee" />
                       <img src="./Images/15.png" alt="Marquee" />
                       <img src="./Images/16.png" alt="Marquee" />
                       <img src="./Images/17.png" alt="Marquee" />
                       <img src="./Images/18.png" alt="Marquee" />
                       <img src="./Images/19.png" alt="Marquee" />
                       <img src="./Images/20.png" alt="Marquee" />
                    </Marquee>
                    </div>
                </div>
                <div className="margin"></div>




            </div>

        </>
    )
}

export default Plans
