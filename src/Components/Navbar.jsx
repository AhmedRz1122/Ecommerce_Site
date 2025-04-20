import React from 'react'
import './Navbar.css'
import Main_logo from '../assets/Main_logo.jpg'
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <div className="left_container">
                    <li><img src={Main_logo} alt="#" class="logo" /></li>
                    <li>
                        <h1 className="logo-text">Brunos Shopping</h1>
                    </li>
                </div>

                <div className="right_container">

                    <div className="left_catergories">
                        <li>Summer Shop</li>
                        <li>Categories</li>
                        <li>tracking</li>
                    </div>

                    <div className="right_button">
                        {/* Hamburger Menu Button */}
                        <li><button className='Hamburger'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button></li>
                    </div>
                </div>

            </div>

        </motion.nav>






    )
}

export default Navbar
