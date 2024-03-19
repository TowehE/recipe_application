import React, { useEffect, useState } from 'react'
import "./Allrecipes.css"
import { FaSearch } from "react-icons/fa";
import { useParams } from 'react-router';
import axios from 'axios';
const Allrecipes = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [recipe, setRecipe] = useState()


    const getOne = async (data) => {
        try {
            setLoading(true);
            const res = await axios.get(
                `https://recipetastebud.onrender.com/api/v1/view/${id}`);
            setRecipe(res?.data?.data)
            setLoading(false);
        } catch (err) {
            setLoading(false)
            console.log(err, "err message");
        }
    };

    useEffect(() => {
        console.log(loading);
        console.log(recipe);
    }, [loading, recipe])

    useEffect(() => {
        getOne()
    }, [])
    return (
        <>
            <div className='recipebody'>
                <div className='uprecipe'>
                    <div className='uprecipepix'>
                    </div>
                    <div className='recipebodyinput'>
                        <div className='recipebodyinputin'>
                            <FaSearch />
                            <input type="text" name="" id="" placeholder="SEARCH ALL RECIPES" />
                        </div>
                        <button>Search</button>
                    </div>

                </div>
                <div className='recieveres'>
                    <div className='recievercard'>
                        <img src={recipe?.profilePicture?.url} alt="" />
                        <div style={{ padding: 15, display: "flex", flexDirection: "column", gap: 5 }}>
                            <h1>{recipe?.title}</h1>
                            <p><h5>Indredients :</h5> {recipe?.ingredients}</p>
                            <p><h5 style={{}}>Description :</h5> {recipe?.instructions}</p>
                        </div>

                    </div>

                </div>




            </div>
        </>
    )
}

export default Allrecipes; 
