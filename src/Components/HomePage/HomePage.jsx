import React from 'react'
import "./HomePage.css"
import { useNavigate } from 'react-router';
import { FaUser } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";






const HomePage = () => {
    const Nav = useNavigate();
    return (
        <>
        <div className='homepagebody'>
            <div className='homepageheader'>
                <div className='leftlogo'>
                    <img src="./public/pineapple.jpeg" alt="" />
                    <span>TasteBudRecipe</span>
                </div>
                <div className='middlehead'>
                <ul>
                  <li>Home</li>
                  <li>Contest</li>
                  <li>Contact</li>
                  <li>About</li>
                </ul>
                </div>
                <div className='righthead'>
                <button onClick={()=> Nav ('/Login')}><FaUser /> LOGIN</button>
                <button onClick={()=> Nav ('/Select')}><FaSignInAlt /> SIGN UP</button>
                </div>

            </div>
            <div className='bodypizza'>
                <img src="./public/pizza.jpg" alt="" />
            </div>
            <div className='recipes'>
                <h1>RECIPES OF THE WEEK</h1>
            </div>
            <div className='fourpix'>
                <div className='fourpix1'>
                <img src="./public/soup.jpg" alt="" onClick={()=> Nav ('/Select')}/>
                <div className='fourpix1text'>
                    <h1>SOUP</h1>
                </div>
                </div>
                <div className='fourpix2'>
                <img src="./public/pasta.jpg" alt="" onClick={()=> Nav ('/Select')} />
                <div className='fourpix2text'>
                    <h1>PASTA</h1>
                </div>
                </div>
                <div className='fourpix3'>
                <img src="./public/stew.jpg" alt="" onClick={()=> Nav ('/Select')}/>
                <div className='fourpix3text'>
                    <h1>STEW</h1>
                </div>
                </div>
                <div className='fourpix4'>
                <img src="./public/rice.jpg" alt="" onClick={()=> Nav ('/Select')}/>
                <div className='fourpix4text'>
                    <h1>RICE</h1>
                </div>
                </div>

            </div>
            <div className='footer'>
                <div className='leftsidetop'>
                    <div className='leftsidetopimage'>
                        <img src="./public/pineapple.png" alt="" />
                        <span>TasteBudRecipe</span>
                    </div>
                    <div className='leftsidespace'>
                    </div>
                    <div className='leftsidewrite'>
                        <span>McKinney,Texas </span>
                        <span>(455) 555-8585 </span>
                        <span>hello@tastebudrecipe.com</span>
                    </div>
            </div>
            <div className='downtown'>
                <p>2024 Copyright © tastebudrecipe.com, All Rights Reserved</p>
            </div>
            <div className='downdown'>
            <FaTwitter />
            <FaYoutube />
            <FaFacebookF />





            </div>
                
        </div>
        
        
    </div>

</>
    )
}

export default HomePage
