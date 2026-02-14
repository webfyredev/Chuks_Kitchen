import { FaEnvelope, FaFacebook, FaGooglePlusG, FaLock, FaPhoneAlt } from "react-icons/fa";
import Footer from "../components/footer";
import sideBg from '../images/auth/signin.png'
import { buttonScaleEffects } from "../animation/animate";
import { motion } from 'framer-motion'
import { Link } from "react-router-dom";
import { useEffect } from "react";


export default function SignUp(){
    useEffect(() => {
        document.title = 'Chuks | Sign Up'
    })
    return(
        <>
                <div className="w-full h-140 flex justify-center items-center mt-5">
                <div className="w-[85%] md:w-[65%] h-[95%] flex">
                    <div className="hidden lg:flex w-1/2 h-full relative">
                        <img src={sideBg} alt="signin_bg" className="w-full h-full object-cover" />
                        <div className="absolute w-full h-full top-0 bg-[#FF7A18]/[70%] flex items-center justify-center flex-col">
                            <h3 className="font-semibold text-white text-2xl">
                                Chuks Kitchen
                            </h3>
                            <p className="w-65 text-[12px] text-white text-center mt-2">
                                Your journey to delicious, authentic Nigerian meals start here. Sign up o log in to order
                                your favourites today!.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex items-center justify-center">
                        <form action="" className="w-[90%] lg:w-[70%] h-full flex flex-col items-center">
                            <h3 className="logo-font mt-5 text-[#FF7A18] text-[20px]">
                                <Link to="/">
                                    Chuks Kitchen
                                </Link>
                            </h3>
                            <p className="font-semibold text-[15px]">
                                Create Your Account
                            </p>
                            <div className="flex flex-col w-full mt-2">
                                <label htmlFor="" className="text-[#3B4758] text-[9px]">Email</label>
                                <div className="w-full h-9 border flex items-center space-x-2 rounded-sm mt-1 px-2 border-[#BDBDBD]">
                                    <FaEnvelope  className="text-[#616161] text-[10px]"/>
                                    <input type="text" placeholder="name@gmail.com" className="h-full w-[97%] text-[10px] border-none outline-none" />
                                </div>
                            </div>
                            <div className="flex flex-col w-full mt-2">
                                <label htmlFor="" className="text-[#3B4758] text-[9px]">Phone number</label>
                                <div className="w-full h-9 border flex items-center space-x-2 rounded-sm mt-1 px-2 border-[#BDBDBD]">
                                    <FaPhoneAlt  className="text-[#616161] text-[10px]"/>
                                    <input type="number" placeholder="8123340690" className="h-full w-[97%] text-[10px] border-none outline-none" />
                                </div>
                            </div>
                            <div className="flex flex-col w-full mt-2">
                                <label htmlFor="" className="text-[#3B4758] text-[9px]">Password</label>
                                <div className="w-full h-9 border flex items-center space-x-2 rounded-sm mt-1 px-2 border-[#BDBDBD]">
                                    <FaLock  className="text-[#616161] text-[10px]"/>
                                    <input type="password" placeholder="**********" className="h-full w-[97%] text-[10px] border-none outline-none" />
                                </div>
                            </div>
                            <div className="flex flex-col w-full mt-2">
                                <label htmlFor="" className="text-[#3B4758] text-[9px]">Confirm Password</label>
                                <div className="w-full h-9 border flex items-center space-x-2 rounded-sm mt-1 px-2 border-[#BDBDBD]">
                                    <FaLock  className="text-[#616161] text-[10px]"/>
                                    <input type="password" placeholder="**********" className="h-full w-[97%] text-[10px] border-none outline-none" />
                                </div>
                            </div>
                            <div className="w-full flex items-center justify-start mt-2 space-x-1">
                                <input type="checkbox" />
                                <p className="text-[9px]">
                                    I agree to the the <a href="" className="text-[#1E88E5] text-[9px] font-semibold"> Terms & Conditions</a> and  <a href="" className="text-[#1E88E5] text-[9px] font-semibold"> Privacy Policy</a>
                                </p>
                                
                            </div>
                            <motion.button 
                                {...buttonScaleEffects}
                                type="submit" className="border mt-2 w-full h-10 text-[13px] rounded-md cursor-pointer bg-[#FF7A18] text-white font-semibold">
                                Continue
                            </motion.button>
                            <p className="text-[#1F2937] text-[9px] mt-1.5">
                                Or continue with
                            </p>
                            <button className="border w-full mt-2 h-8 text-[9px] rounded-md border-[#BDBDBD] flex items-center justify-center space-x-2 bg-white cursor-pointer">
                                <FaGooglePlusG className="mr-1 w-4 h-4"/>
                                Continue with Goggle
                            </button>
                            <button className="border w-full mt-2 h-8 text-[9px] rounded-md border-[#BDBDBD] flex items-center justify-center space-x-2 bg-white cursor-pointer">
                                <FaFacebook className="mr-1 w-4 h-4 text-[#337FFF]"/>
                                Continue with Apple
                            </button>
                            <p className="text-[8px] mt-2">Already have an account? <Link to="/signin" className="text-[#1C7FF9] hover:font-semibold transition-all duration-300">Sign In</Link></p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}