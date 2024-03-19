import React, { useEffect, useState } from 'react'
import "./Login.css"
import { useNavigate } from 'react-router';
// import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios"
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
    const [loading, setLoading] = useState(false)

    const nav = useNavigate();

    const schema = yup.object().shape({
        email: yup.string().email().required("email is required"),
        password: yup.string().required("password is required"),
    });

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const res = await axios.post(
                " https://recipetastebud.onrender.com/api/v1/login",
                data
            );
            const userInformation = res.data
            localStorage.setItem("userInformation", JSON.stringify(userInformation))
            nav("/")
            console.log(userInformation)
            setLoading(false);
        } catch (err) {
            setLoading(false)
            console.log(err, "err message");
        }
    };
    useEffect(() => {
        console.log(loading)

    }, [loading])

    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='body30'>
                    <div className='bodywrapper30'>
                        <div className='u30'>
                            <img src="./public/pineapple.jpeg" alt="" />
                            <span>TasteBudRecipe</span>
                        </div>
                        <div className='sign'>
                            <h1>Log in</h1>
                            <p>to continue to TasteBudRecipe</p>
                        </div>
                        <div className='email'>
                            <span>Email address</span>
                            <input
                                type="email"
                                name='email'
                                {...register("email")}
                            />
                        </div>
                        {errors["email"] && <span style={{ color: "red", }}> {errors.email?.message}</span>}
                        <div className='pass'>
                            <span>Password</span>
                            <input type="text"
                                name='password'
                                {...register("password")}
                            />
                        </div>
                        {errors["password"] && <p style={{ color: "red" }}> {errors.password?.message}</p>}
                        <div className='cont'>
                            <div className='continue' onClick={handleSubmit(onSubmit)}>
                                <span >continue</span>
                                <ClipLoader
                                    color="red"
                                    loading={loading}
                                    size={30}
                                    aria-label="Loading Spinner"
                                    data-testid="loader"
                                />
                            </div>

                        </div>
                        <div className='noaccount'>
                            <p>No account? <span onClick={() => nav('/Select')}>Sign up</span></p>
                        </div>

                    </div>

                </div>

            </form>

        </>

    )
}


export default Login
