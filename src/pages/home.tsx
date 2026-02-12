import { FaSearch } from "react-icons/fa";
import { buttonScaleEffects, scrollLeftEffects, scrollRightEffects, scrollUpEffect } from "../animation/animate";
import Navbar from "../components/navbar";
import heroBg from '../images/home/hero.png'
import { motion } from 'framer-motion'
import { chef_special, popular_categories } from "../utils/home";
import ctaBg from '../images/home/cta.png'
import Footer from "../components/footer";
import { useEffect } from "react";

export default function Home(){
    useEffect(() => {
        document.title = "Chuks | Home "
    })
    return(
        <>
            <Navbar />
            <div className="w-full h-152 relative overflow-hidden">
                <img src={heroBg} alt="hero bg" className="w-full h-full object-cover" />
                <div className="absolute w-full h-full top-0 bg-black/[45%] flex flex-col px-5 md:px-10">
                    <div className="flex flex-col absolute  top-50">
                        <motion.h3 
                            {...scrollUpEffect}
                            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                            The Heart of Nigerian Home <br />Cooking
                        </motion.h3>
                        <motion.p 
                            {...scrollLeftEffects}
                            className="text-base md:text-xl text-white font-semibold mt-5">
                            Handcrafted with passion, delivered with care.
                        </motion.p>
                        <motion.button 
                            {...scrollRightEffects}
                            {...buttonScaleEffects}
                            className="mt-5 bg-[#FF7A18] text-white w-40 py-2.5 text-[12px] rounded-lg cursor-pointer">
                            Discover what's new
                        </motion.button>
                    </div>
                </div>
                
            </div>
            <motion.div 
                {...scrollUpEffect}
                className="w-full h-15 absolute bottom-[-3%] flex items-center justify-center overflow-hidden">
                <div 
                    className="w-[90%] md:w-[80%] lg:w-[70%] h-[75%] px-3 rounded-md bg-white shadow-md text-[13px] hover:outline-2 hover:outline-[#FF7A18]/20 flex items-center space-x-3 transition-all duration-300">
                    <FaSearch  className="text-[#807373]"/>
                    <input type="text" className="text-[#1F2937] w-[95%] h-full outline-none" placeholder="What are you craving for today" />
                </div>

            </motion.div>
            <div className="w-full px-3 lg:px-5 py-5 lg:py-10 flex flex-col items-center mt-10 lg:mt-20 bg-[#F3F4F6]">
                <motion.h3 
                    {...scrollLeftEffects}
                    className="font-bold text-[#1F2937] text-2xl">
                    Popular Categories
                </motion.h3>
                <div className="w-full lg:w-[95%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 p-2 lg:p-5">
                    {popular_categories.map((data, index) => (
                        <motion.div 
                            {...scrollRightEffects}
                            key={index} className="rounded-md flex flex-col overflow-hidden mb-3 group">
                            <img src={data.image} alt={data.title} className="w-full h-50 object-cover rounded-t-md hover:scale-105 transition-all duration-300 cursor-pointer" />
                            <div className="w-full flex items-center p-8 justify-center bg-white rounded-b-md">
                                <h3 className="text-[#1F2937] font-semibold text-[13px] group-hover:text-[#FF7A18]">
                                    {data.title}
                                </h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="w-full px-3 lg:px-5 py-10 flex flex-col items-center bg-[#F3F4F6] mt-5 lg:mt-10 border">
                <motion.h3 
                    {...scrollLeftEffects}
                    className="font-bold text-[#1F2937] text-2xl">
                    Chef's Specials
                </motion.h3>
                <div className="w-full lg:w-[95%] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 p-2 lg:p-5">
                    {chef_special.map((data, index) => (
                        <motion.div 
                            {...scrollRightEffects}
                            key={index} className="rounded-md flex flex-col overflow-hidden mb-3 group">
                            <img src={data.image} alt={data.title} className="w-full h-50 object-cover rounded-t-md hover:scale-105 transition-all duration-300 cursor-pointer" />
                            <div className="w-full flex flex-col items-left bg-white rounded-b-md p-4">
                                <h3 className="text-[#1F2937] font-semibold text-[15px] group-hover:text-[#FF7A18]">
                                    {data.title}
                                </h3>
                                <p className="text-[13px] mt-2 text-[#1F2937]">
                                    {data.text}
                                </p>
                                <div className="flex items-center justify-between mt-5">
                                    <p className="text-[#FF7A18] font-semibold">
                                        #{data.price}
                                    </p>
                                    <motion.button 
                                        {...buttonScaleEffects}
                                        className="py-2 px-4 border text-[13px] rounded-lg font-semibold text-white bg-[#FF7A18] cursor-pointer">
                                        Add to cart
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="w-full h-100 relative">
                <img src={ctaBg} alt="cta_bg" className="w-full h-full object-cover object-center"/>
                <div className="absolute w-full h-full top-0 bg-[#1D1D1D]/[45%]">
                    <div className="absolute top-20 py-5 px-5 md:px-10">
                        <motion.h3 
                            {...scrollUpEffect}
                            className="font-bold leading-tight text-2xl md:text-3xl text-white">
                            Introducing Our New Menu Additions!
                        </motion.h3>
                        <motion.p 
                            {...scrollUpEffect}
                            className="font-semibold text-white mt-3 text-[14px]">
                            Explore exciting new dishes, crafted with the freshest <br />ingredents and authentic Nigeria flavors. Limited time  <br />offer!
                        </motion.p>
                        <motion.button 
                            {...scrollRightEffects}
                            {...buttonScaleEffects}
                            className="mt-5 bg-[#FF7A18] text-white w-40 py-2.5 text-[12px] rounded-lg cursor-pointer">
                            Discover what's new
                        </motion.button>
                    </div>
                </div>
            </div>
            <div className="w-full p-10 bg-white">

            </div>
            <Footer />
        </>
    )
}