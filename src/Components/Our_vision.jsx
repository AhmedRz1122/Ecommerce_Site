import React from 'react'
import vis1 from '../assets/vision1.jpg'
import vis2 from '../assets/vision2.jpg'
import vis3 from '../assets/vision3.jpg'
import './Our_vision.css'

const Our_vision = () => {
    return (
        <div className='Our_vision'>
            
            <div className="vision_header">
                <h1 className='vision_title'>Our Vision</h1>
                <p className='vision_description'>The only app in the market where it helps you communicate quick and easy through an app at work. It helps you communicate quick and easy through an app at work.</p>
            </div>

            <div className='Our_vision_left'>

                <div className="Our_vision_left_con1">
                    <img src={vis1} alt="Model Girl Fashion" className='vis1'/>
                </div>
                <div className="Our_vision_left_con2">
                    <h3>Fashion for everyone</h3>
                    <p>The only app in the market where it helps you communicate quick</p>
                    <p><a href="#">Read More</a></p>
                </div>
            </div>

            <div className="our_vision_middle">
                    <img src={vis2} alt="Fashion girl 2 in the middle of the vision page" className='vis2' />
                    <div className="overlay"></div>
                    <button className='view_btn'>View</button>

            </div>

            <div className="our_vision_right">
                <div className="Our_vision_right_con1">
                    <h3>No Such thing as expensive</h3>
                    <p>The only platform that sells tings for the lowest market value for you</p>
                    <p><a href="#">Read More</a></p>
                </div>
                <div className="Our_vision_right_con2">
                    <img src={vis3} alt="Man wearing fashion clothes" className='vis3' />
                </div>

            </div>

            <button className='btn_view_more'>View More</button>
        </div>
    )
}

export default Our_vision