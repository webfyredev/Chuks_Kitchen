import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import sideBg from '../images/auth/signin.png'
import { omboard } from "../utils/omboard";
import { motion } from 'framer-motion'
import { buttonScaleEffects } from "../animation/animate";
import { useEffect } from "react";
export default function Omboarding(){
    useEffect(() => {
        document.title = 'Chuks | Omboarding'
    })
    return(
        <>
            {/* <Navbar /> */}
            <div className="w-full h-140 flex justify-center items-center mt-5">
            <div className="w-[85%] md:w-[75%] lg:w-[65%] h-[95%] flex">
                <div className="hidden lg:flex w-1/2 h-full relative">
                    <img src={sideBg} alt="signin_bg" className="w-full h-full object-cover" />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col space-y-10 md:space-y-15 bg-white">
                    <div className="flex w-full px-5 py-2 justify-between items-center">
                        <h3 className="logo-font text-[#FF7A18] text-[20px]">
                            <Link to="/">
                                Chuks Kitchen
                            </Link>
                        </h3>
                        <button className="px-5 py-1.5 border text-[13px] rounded-md border-[#1E88E5] text-[#1E88E5] cursor-pointer hover:bg-[#1E88E5] hover:text-white transition-all duration-300">
                            <Link to="/signin">
                                Sign In
                            </Link>
                        </button>
                    </div>
                    <div className="w-full flex flex-col px-5 md:mt-5">
                        <h3 className="font-semibold">
                            Your Authentic Taste of Nigeria
                        </h3>
                        <p className="text-[12px] mt-3">
                            Experience homemade flavors delivered fresh to your desk or home. We bring the rich culinary heritage of Nigeria right to your doorstep
                        </p>
                        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                            {omboard.map((data) => (
                                <div className="flex items-center space-x-2">
                                    <data.icon  className="w-7 h-7 p-2 rounded-md bg-[#FFE1C4] text-[#FF7A18]"/>
                                    <p className="font-semibold text-[12px]">{data.title}</p>
                                </div>
                        
                            ))}
                        </div>
                        <motion.button 
                            {...buttonScaleEffects}
                            className="w-full border mt-7 h-10 text-[12px] cursor-pointer rounded-md font-semibold text-white bg-[#FF7A18]">
                            <Link to="/orders">
                                Start Your Order
                            </Link>
                        </motion.button>
                        <motion.button 
                            {...buttonScaleEffects}
                            className="w-full border border-[#1E88E5] text-[#1E88E5] mt-3 h-10 text-[12px] cursor-pointer rounded-md font-semibold">
                            <Link to="/explore">
                                Learn More About Us
                            </Link>
                        </motion.button>
                    </div>
                    <div className="w-full px-5 flex items-center justify-center space-x-3 text-[10px]">
                        <p>@copy; 2024 Chuks Kitchen.</p>
                        <a href="#" className="text-[#1E88E5] hover:font-semibold">Privacy Policy</a>
                        <a href="#" className="text-[#1E88E5] hover:font-semibold">Terms of Service</a>

                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}