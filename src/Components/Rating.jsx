import React from 'react'
import { FaStar } from "react-icons/fa";
import bgimg from '../assets/bgasset5.png'
import './Rating.css'

const Rating = () => {
    return (
        <div className='rating'>
            <div className="title_main">
                <h1 className='rating_title'>
                    <span className='span1'>4.6</span>
                    <span className='span2'>Out of 5.0</span>
                </h1>

                <div className="image_asset">
                    <img src={bgimg} alt="rating logo" />
                </div>

                <div className="rs_two">
                    <span><FaStar color='#FAB83B' /></span>
                    <span><FaStar color='#FAB83B' /></span>
                    <span><FaStar color='#FAB83B' /></span>
                    <span><FaStar color='#FAB83B' /></span>

                </div>
            </div>

            <div className="rating_container">
                <div className="rating_container_left">

                    <div className='rating_left_one'>

                        <div className="header_ratingbox">

                            <div className="newway">
                                <h3>My new way to shop!</h3>
                                <div className="star_rating">
                                    <span><FaStar color='#FAB83B' /></span>
                                    <span><FaStar color='#FAB83B' /></span>
                                    <span><FaStar color='#FAB83B' /></span>
                                    <span><FaStar color='#FAB83B' /></span>
                                </div>
                            </div>

                            <div className="Molly_Kemp">
                                <p className='date'>March 27</p>
                                <p className='author_name'>Molly Kemp</p>
                            </div>

                        </div>

                        <p className='cont1'>The only app in the market where it helps you communicate quick through an app at work. it helps you communicate quick and easy through an app at work.</p>

                    </div>

                    <div className='rating_left_two'>

                        <div className="heading_rs2">
                            <div className="ease">

                                <h3>So easy to order!</h3>
                                <div className="star_rating">
                                    <span><FaStar color='#FAB83B' /></span>
                                    <span><FaStar color='#FAB83B' /></span>
                                    <span><FaStar color='#FAB83B' /></span>
                                    <span><FaStar color='#FAB83B' /></span>
                                    <span><FaStar color='#FAB83B' /></span>
                                </div>
                            </div>

                            <div className="Bear_Smith">
                                <p className='date'>April 15</p>
                                <p className='author_name'> Bear Smith</p>
                            </div>
                        </div>

                        <p className='cont2'>The only app in the market where it helps you communicate quick through an app at work. it helps you communicate quick and easy through an app at work.</p>


                    </div>




                </div>

                
                <div className="rating_container_right">

                    <div className='rating_right_one'>

                        <div className="heading_ro">
                            <div className="favourite_fiance">
                                <h3>My Fiance's favourite Shop</h3>
                                <div className="star_rating">
                                    <span><FaStar color='#FAB83B' /></span>
                                    <span><FaStar color='#FAB83B' /></span>
                                    <span><FaStar color='#FAB83B' /></span>
                                    <span><FaStar color='#FAB83B' /></span>
                                    <span><FaStar color='#FAB83B' /></span>
                                </div>
                            </div>
                            <div className="Jenna_Sels">
                                <p className='date'>May 01</p>
                                <p className='author_name'> Jenna Sels</p>
                            </div>
                        </div>
                        <p className='cont3'>The only app in the market where it helps you communicate quick  and easy through an app at work. It helps you communicate quick and easy through an app at work.</p>


                    </div>


                    <div className='rating_right_two'>

                        <div className="heading_rt">

                            <div className="new_style">
                                <h3>New Style new Me!</h3>
                                <div className="star_rating">
                                    <span><FaStar color='#FAB83B' /></span>
                                    <span><FaStar color='#FAB83B' /></span>
                                    <span><FaStar color='#FAB83B' /></span>
                                    <span><FaStar color='#FAB83B' /></span>
                                    <span><FaStar color='#FAB83B' /></span>
                                </div>
                            </div>

                            <div className="Sara_Malls">
                                <p className='date'>March 10</p>
                                <p className='author_name'> Sara Malls</p>
                            </div>
                        </div>

                        <p className='cont4'>The only app in the market where it helps you communicate quick and easy through an app at work.</p>

                    </div>

                </div>
            </div>


        </div>
    )
}

export default Rating