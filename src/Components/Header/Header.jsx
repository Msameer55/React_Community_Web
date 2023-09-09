import React from 'react'
import "./Header.css"
import { NavLink } from 'react-router-dom'
import Button from '../Button/Button'

const Header = () => {
    // const [active, setActive] = useState("nav-container")


// const toggleNav = () => {
//     setActive("nav-container active")
//     console.log('active')
// }
// const closeNav = () => {
//     setActive("nav-container")
//     console.log("not-active")
// }
    return (
        <>
            <div className="header-container">
                <div className="container">
                    <div className="flex-container">
                        <div className="navbar">
                            <div className="logo">
                                <NavLink to="/">
                                    <img src="./Images/Logo.png" alt="Logo" />
                                </NavLink>

                            </div>

                            <div className='navbar'>
                                <ul className="nav-lists" >
                                    <li className="nav-items"><NavLink to="/features">
                                        Features
                                    </NavLink></li>
                                    <li className="nav-items"><NavLink to="/plan">
                                        Plan
                                    </NavLink></li>
                                    <li className="nav-items"><NavLink to="/about-us">
                                        About
                                    </NavLink></li>
                                    <li className="nav-items"><NavLink to="/contact">
                                        Contact
                                    </NavLink></li>
                                </ul>
                                {/* <div className="nav-close-icon mobile-icons">
                                    <AiOutlineClose onClick={closeNav} className='close-menu icons' />
                                </div> */}
                            </div>
{/* 
                            <div className="nav-menu-icon mobile-icons"  >
                                <RxHamburgerMenu onClick={toggleNav} className="open-menu icons" />
                            </div> */}
                        </div>
                        <Button text="Get started" className="main-btn" path="/contact" />
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header
