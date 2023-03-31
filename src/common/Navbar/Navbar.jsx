import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Logo } from '../../images';
import './Navbar.css';

const Navbar = () => {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)

    const closeMobileMenu = () => setClick(false)
    return (
        <>
            <nav className='navbar'>
                <div className="container flex_space">
                    <div className="menu_icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>

                        <li><Link to="/" onClick={closeMobileMenu}><i class="fas fa-home"></i> Home</Link></li>
                        <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
                        <li><Link to="/gallery" onClick={closeMobileMenu}>Gallery</Link></li>
                        <li><Link to="/destination" onClick={closeMobileMenu}>Destination</Link></li>
                        <li><Link to="/blog" onClick={closeMobileMenu}>Blog</Link></li>
                        <li><Link to="/testimonail" onClick={closeMobileMenu}>Testimonail</Link></li>
                        <li><Link to="/contact" onClick={closeMobileMenu}>Contact Us</Link></li>

                    </ul>
                    <div className="login-area flex">
                        <li>
                            <Link to="/sign-in">
                            <i class="fas fa-user-tie"> Sigin </i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/regiter">
                                <i className='fa fa-user'>Regiter</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <button className='primary-btn'>Request a Quote</button>
                            </Link>
                        </li>
                    </div>
                </div>
            </nav>
            <header>
                <div className="container flex_space">
                    <div className="">
                      <img src={Logo} alt="logo" />
                    </div>
                    <div className="contact flex_space">
                         {/* Working Hours */}
                        <div className="box flex_space">
                           <div className="icons">
                            <i className='fa fa-clock'></i>
                           </div>
                           <div className="text">
                            <h4>Working Hours</h4>
                            <Link to="/contact">Monday - Sunday: 9.00am to 6.00 pm</Link>
                           </div>
                        </div>
                        {/* Call Us Hours */}
                        <div className="box flex_space">
                           <div className="icons">
                            <i className='fa fa-phone-volume'></i>
                           </div>
                           <div className="text">
                            <h4>Call Us Hours</h4>
                            <Link to="/contact">+84 3721 779 993</Link>
                           </div>
                        </div>
                        {/* Mail Us */}
                        <div className="box flex_space">
                           <div className="icons">
                            <i className='fa fa-envelope'></i>
                           </div>
                           <div className="text">
                            <h4>Mail Us</h4>
                            <Link to="/contact">vothanhlap450@gmail.com</Link>
                           </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar