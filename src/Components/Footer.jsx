import React from 'react';
import Bruno from '../assets/mainlogo.png';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <footer className='footer'>
                <div className="footer_container">
                    <div className="footer_container_left">
                        <div className="left_footer">
                            <img src={Bruno} alt="Main logo of the Bruno Fashion Website" className='Bruno_main' />
                        </div>
                        <div className="right_footer">
                            <h3>Brunos Shopping</h3>
                            <p>The only clothing shop you need</p>
                        </div>
                    </div>

                    <div className="fc">
                        <h2>Products</h2>
                        <ul>
                            <li>Spring</li>
                            <li>Special</li>
                            <li>Designer</li>
                            <li>Make your own</li>
                        </ul>
                    </div>

                    <div className="fc">
                        <h2>Resources</h2>
                        <ul>
                            <li>Report Issue</li>
                            <li>Blog</li>
                            <li>Newsletter</li>
                            <li>Careers</li>
                        </ul>
                    </div>

                    <div className="fc">
                        <h2>Social</h2>
                        <ul>
                            <li>Community</li>
                            <li>Twitter</li>
                            <li>Facebook</li>
                            <li>Instagram</li>
                        </ul>
                    </div>
                </div>

                <div className="copyright">
                    {/* <div className='cop1'></div>
                    <div className='cop2'></div> */}
                    
                    <p className='copyright_text'>
                        
                        <img src={Bruno} alt="" />
                        <p>
                            <span>@2024 Bruno Shopping</span>
                            <span>- all rights reserved made with Figma and free for you</span>
                        </p>
                        <div className="copylogo">
                            <span><FaXTwitter /></span>
                            <span><FaFacebook /></span>
                            <span><BsInstagram /></span>
                        </div>
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;