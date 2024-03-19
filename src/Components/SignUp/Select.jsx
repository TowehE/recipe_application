import "./Select.css"
import React from 'react'
// import { HiWrenchScrewdriver } from "react-icons/hi2";
import { SlUserFollowing } from "react-icons/sl";
import { GiCookingPot } from "react-icons/gi";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";
// import { useNavigate } from "react-router";





const Select = () => {
    // const Nav = useNavigate();
    return (
        <>
            <div className="bodyselect">
                <div className="bodyselectwrapper">
                    <img src="./public/pineapple.png" alt="" />
                    <p>Select user type</p>
                </div>
                <div className="bodyboxing">
                    <div className="bodybox">
                        <div className="bodybox3">
                            <Link to="/Chef" className="bodyboxi">
                                <div >
                                    <GiCookingPot style={{ width: "100%", height: "50%" }} />
                                    <p style={{ color: "orange" }}>Chef</p>
                                </div>
                            </Link>
                            <Link className="bodyboxii" to="/SignUp">
                                <div >
                                    <SlUserFollowing style={{ width: "100%", height: "50%" }} />
                                    <p style={{ color: "white" }}>User</p>
                                </div>
                            </Link>
                        </div>
                        <div className="bodyboxtext">
                            <p>You will only have permission to view the context
                                but you can't edit or <br />make changes as a user</p>
                        </div>

                    </div>


                </div>
                <div className="downback">
                    <div className="downbackbutton">
                        <button>
                            <FaBackward />
                            <Link to="/SignUp">
                                <span>BACK</span>
                            </Link>

                        </button>

                    </div>

                </div>

            </div>

        </>
    )
}
export default Select;
