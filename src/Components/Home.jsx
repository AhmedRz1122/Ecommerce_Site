import React from 'react'
import Mainimage from '../assets/Main_girl.jpg'
import Mainimage2 from '../assets/girl-removebg-preview.png'
import product1 from '../assets/jj.png'
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import './Home.css'

const Home = () => {
    return (

        <div className="Home">
            <motion.div className="left_side"
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
            >
                <h1 className='Home_title'>Shopping is the best at Brunos</h1>
                <p className='Home_description'>The only app in the market where it helps you communicate quick and easy through an app at work. it helps you communicate quick and easy through an app at work.</p>
                <button className='view_product_btn'>View Product</button>
                <div className="left_side_uset">
                    <span>
                        <h3>5M</h3>
                        <p>Active Users</p>
                    </span>
                    <span>
                        <h3>3K+</h3>
                        <p>Playable VR Games</p>
                    </span>
                </div>
            </motion.div>

            <motion.div className="right_side"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="leftsub_right">
                    <img src={Mainimage2} alt="Girl Image for the Home Page" className='main_image' />
                </div>
                <div className="rightsub_right">

                    <img src={product1} alt="" className='product_image' />
                    <div className="rs_one">
                        <h1>Purple Top</h1>
                        <p>$24.99</p>
                    </div>
                    <div className="rstwo">
                        <span><FaStar className='star_icon' /></span>
                        <span><FaStar className='star_icon' /></span>
                        <span><FaStar className='star_icon' /></span>
                        <span><FaStar className='star_icon' /></span>
                        <span><FaStar className='star_icon' /></span>
                    </div>

                    <div className="rs_three">
                        <span><CiHeart className='heart_icon' /></span>
                    </div>


                </div>
            </motion.div>

        </div>

    )
}

export default Home




