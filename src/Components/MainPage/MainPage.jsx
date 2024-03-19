import React, { useEffect, useState } from 'react'
import "./MainPage.css"
import { useNavigate } from 'react-router';
import { FaUser } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import ClipLoader from "react-spinners/ClipLoader";






const MainPage = () => {
    const Nav = useNavigate();
    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)
    const [recipe, setRecipe] = useState()


    const getAll = async (data) => {
        try {
            setLoading(true);
            const res = await axios.get(
                " https://recipetastebud.onrender.com/api/v1/viewall"

            );
            setRecipe(res?.data?.data)
            setLoading(false);
        } catch (err) {
            setLoading(false)
            console.log(err, "err message");
        }
    };



    useEffect(() => {
        getAll()
        const userData = localStorage.getItem("userInformation")
        setData(userData)
    }, [])

    useEffect(() => {
        console.log(loading);
        console.log(recipe?.[0]
        );
    }, [loading, recipe])

    return (
        <>
            <div className='homepagebody'>

                <div className='homepageheader'>
                    <div className='loadingstate' >
                        <ClipLoader
                            color="red"
                            loading={loading}
                            size={100}
                            aria-label="Loading Spinner"
                            data-testid="loader"
                        />
                    </div>
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
                    <div className='righthead1'>
                        {data ? <img src="./gif.png" alt="" /> :
                            <div className='righthead'>
                                <button onClick={() => Nav('/Login')}><FaUser /> LOGIN</button>
                                <button onClick={() => Nav('/Select')}><FaSignInAlt /> SIGN UP</button>
                            </div>}
                    </div>

                </div>
                <div className='bodypizza'>
                    <img src="./public/pizza.jpg" alt="" />
                </div>
                <div className='recipes'>
                    <h1>ALL RECIPES OF THE WEEK</h1>
                </div>
                <div className='fourpix'>
                    {recipe?.map((i) => (
                        <NavLink className='fourpix1' to={!data ? "/Login" : `/Allrecipes/${i._id}`}>
                            <img src={i?.profilePicture?.url} alt="" />
                            <div className='fourpix1text'>
                                <h1>{i?.title}</h1>
                            </div>
                        </NavLink>
                    ))}

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

export default MainPage
