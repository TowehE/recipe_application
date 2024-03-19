import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { SpinnerCircular } from 'spinners-react'
import { useNavigate } from 'react-router';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios"


const Chef = () => {
    const [loading, setLoading] = useState(false);
    const nav =useNavigate()
    

    const schema = yup.object().shape({
        fullName: yup.string().required("firstname and lastname seprated by a space "),
        userName: yup.string().required("username is requierd"),
        email: yup.string().email().required("email is required"),
        password: yup.string().matches("").required(""),
    });

    const { register, handleSubmit, formState:{errors}, } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = async (data) => {
        try {
            setLoading(true);
            const res = await axios.post(
                " https://recipetastebud.onrender.com/api/v1/signup",
                data
            );
            const userInformation = res.data.data
            localStorage.setItem("userInformation", JSON.stringify(userInformation))
            nav("/login")
            console.log(userInformation)
            setLoading(false);
        } catch (err) {
            console.log(err, "err message");
        }
    };


    return (
        <>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="SignUpContentDownWrap1">
                    <div className="SignUpContentDownInitials">
                        <p>Create an account to get started</p>
                    </div>
                    <div className="SignUpContentDownForm">
                        <div className="SignUpContentDownFormNames">
                            <div className="SignUpContentDownFormFName">
                                <div className="SignUpContentDownFormFNameLabels">
                                    <label htmlFor="">Full Name</label>

                                </div>
                                <div className="SignUpContentDownFormFNameInputs">
                                    <input
                                        type="text" placeholder="Input Full Name"
                                        {...register("fullName")} />
                                </div>
                                <p style={{ color: "red" }}> {errors.fullName?.message}</p>
                            </div>
                        </div>
                        <div className="SignUpContentDownFormMail">
                            <div className="SignUpContentDownFormMailLabels">
                                <label htmlFor="">User Name</label>
                            </div>
                            <div className="SignUpContentDownFormMailInputs">
                                <input
                                    type="text" placeholder="Input Username"
                                    {...register("userName")} />
                            </div>
                            <p style={{ color: "red" }}> {errors.userName?.message}</p>
                        </div>
                        <div className="SignUpContentDownFormPhone">
                            <div className="SignUpContentDownFormPhoneLabels">
                                <label htmlFor="">Email Address</label>
                            </div>
                            <div className="SignUpContentDownFormPhoneInputs">
                                <input
                                    type='email' placeholder='Input Email' 
                                    {...register("email")} 
                                />
                            </div>
                            <p style={{ color: "red" }}> {errors.email?.message}</p>
                        </div>
                        <div className="SignUpContentDownFormPwd">
                            <div className="SignUpContentDownFormPwdLabels">
                                <label htmlFor="">Password</label>

                            </div>
                            <div
                                className="SignUpContentDownFormPwdInputs"

                            >
                                <input

                                    placeholder="Input Password"
                                    {...register("password")} />
                                <div
                                    className="SignUpContentDownFormPwdEyes"
                                >

                                </div>
                            </div>
                            <p style={{ color: "red" }}> {errors.password?.message}</p>
                        </div>

                        <div>

                        </div>
                    </div>
                    <div className="SignUpContentDownBtn">
                        <button>sign up</button>
                    </div>
                </div>

            </form>

        </>
    )
}

export default Chef

