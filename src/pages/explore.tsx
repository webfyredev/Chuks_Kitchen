import { scrollLeftEffects, scrollRightEffects, scrollUpEffect } from "../animation/animate";
import Navbar from "../components/navbar";
import exploreHeroBg from '../images/explore/hero.png'
import { motion } from 'framer-motion'
import { jollof_rice, popular_cats, soups } from "../utils/explore";
import { FaPlus } from "react-icons/fa";
import Footer from "../components/footer";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Explore(){
    useEffect(() => {
        document.title = 'Chuks | Explore'
    })
    const categories = ['Popular', 'Jollof Rice & Entrees', 'Swallow & Soup', 'Grills & sides', 'Beverages', 'Desserts'];
    return(
        <>
          <Navbar />
          <div className="w-full h-[568px] relative overflow-hidden">
            <img src={exploreHeroBg} alt="Explore Bg" className="w-full h-full object-cover" />
            <div className="absolute w-full h-full top-0 bg-black/[45%] px-10">
                <div className="absolute top-50">
                    <motion.h3 
                            {...scrollUpEffect}
                            className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Chuks Kitchen
                        </motion.h3>
                        <motion.p 
                            {...scrollLeftEffects}
                            className="text-base md:text-xl text-white font-semibold mt-5">
                            Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
                        </motion.p>
                </div>
            </div>
          </div>
          <div className="w-full px-3 py-5 flex flex-col items-center overflow-hidden">
                <div className="w-[95%] rounded-t-md bg-white mt-5">
                    <h3 className="font-semibold px-3 mt-3">
                        Menu Categories
                    </h3>
                    <ul className="flex flex-col space-y-1.5 mt-1.5">
                        {categories.map((data, index) => (
                            <button key={index} className="text-[13px] font-semibold px-3 py-2 cursor-pointer text-left hover:rounded-md transition-all duration-300 hover:bg-[#FFE1C4]"> {data}</button>
                        ))}
                    </ul>
                </div>
                <div className="w-full md:px-8 py-5 flex flex-col mt-5">
                    <h3 className="font-bold text-[#1F2937] text-xl">
                        Popular
                    </h3>
                    <div className="w-full py-5 mt-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {popular_cats.map((data, index) => {
                            const hideOnMobile = index < 3;
                            return(
                                <motion.div 
                                    {...scrollRightEffects}
                                    key={index} className={`${hideOnMobile ? "hidden md:flex" : "flex"} flex flex-row space-x-3 md:space-x-0 items-center bg-white  md:flex md:flex-col rounded-xl  md:mb-5 group overflow-hidden hover:shadow-sm hover:transition-all hover:duration-300 px-2 md:px-0`}>
                                    <img src={data.image} alt={data.title} className="rounded-sm md:rounded-t-xl w-[30%] md:w-full h-25 md:h-50 object-cover group-hover:scale-105 transition-all duration-300 cursor-pointer" />
                                    <div className="flex flex-col items-left justify-center px-2 md:py-5 bg-white md:rounded-b-xl h-35 md:h-40 w-[70%] md:w-full">
                                        <h3 className="text-[#1F2937] font-semibold text-[15px] group-hover:text-[#FF7A18] mb-2">
                                            {data.title}
                                        </h3>
                                        <p className="text-[13px] text-[#1F2937]">
                                            {data.text}
                                        </p>
                                        <div className="flex items-center justify-between mt-3 md:mt-5">
                                            <p className="text-[#FF7A18] font-semibold text-[13px]">
                                                #{data.price}
                                            </p>
                                            <FaPlus  className="mr-3 border w-6 h-6 p-1.5 rounded-full cursor-pointer bg-[#FF7A18] text-white"/>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                    <Link  to="/" className="mt-2 w-full flex md:hidden items-center justify-center text-[#1E88E5] font-semibold text-[13px] ">
                        View Categories
                    </Link>
                </div>
                <div className="w-full md:px-8 py-5 flex flex-col">
                    <h3 className="font-bold text-[#1F2937] text-xl">
                        Jollof Rice & Entrees
                    </h3>
                    <div className="w-full py-5 mt-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {jollof_rice.map((data, index) => (
                            <motion.div 
                                {...scrollRightEffects}
                                key={index} className="flex flex-row space-x-3 md:space-x-0 items-center bg-white  md:flex md:flex-col rounded-xl  md:mb-5 group overflow-hidden hover:shadow-sm hover:transition-all hover:duration-300 px-2 md:px-0">
                                <img src={data.image} alt={data.title} className="rounded-sm md:rounded-t-xl w-[30%] md:w-full h-25 md:h-50 object-cover group-hover:scale-105 transition-all duration-300 cursor-pointer" />
                                <div className="flex flex-col items-left justify-center px-2 md:py-5 bg-white md:rounded-b-xl h-35 md:h-40 w-[70%] md:w-full">
                                    <h3 className="text-[#1F2937] font-semibold text-[15px] group-hover:text-[#FF7A18] mb-2">
                                        {data.title}
                                    </h3>
                                    <p className="text-[13px] text-[#1F2937]">
                                        {data.text}
                                    </p>
                                    <div className="flex items-center justify-between mt-3 md:mt-5">
                                        <p className="text-[#FF7A18] font-semibold text-[13px]">
                                            #{data.price}
                                        </p>
                                        <FaPlus  className="mr-3 border w-6 h-6 p-1.5 rounded-full cursor-pointer bg-[#FF7A18] text-white"/>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <Link  to="/" className="mt-2 w-full flex md:hidden items-center justify-center text-[#1E88E5] font-semibold text-[13px] ">
                        View Categories
                    </Link>
                </div>
                <div className="w-full md:px-8 py-5 flex flex-col">
                    <h3 className="font-bold text-[#1F2937] text-xl">
                        Swallow & Soups
                    </h3>
                    <div className="w-full py-5 mt-3 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {soups.map((data, index) => (
                            <motion.div 
                                {...scrollRightEffects}
                                key={index} className="flex flex-row space-x-3 md:space-x-0 items-center bg-white  md:flex md:flex-col rounded-xl  md:mb-5 group overflow-hidden hover:shadow-sm hover:transition-all hover:duration-300 px-2 md:px-0">
                                <img src={data.image} alt={data.title} className="rounded-sm md:rounded-t-xl w-[30%] md:w-full h-25 md:h-50 object-cover group-hover:scale-105 transition-all duration-300 cursor-pointer" />
                                <div className="flex flex-col items-left justify-center px-2 md:py-5 bg-white md:rounded-b-xl h-35 md:h-40 w-[70%] md:w-full">
                                    <h3 className="text-[#1F2937] font-semibold text-[15px] group-hover:text-[#FF7A18] mb-2">
                                        {data.title}
                                    </h3>
                                    <p className="text-[13px] text-[#1F2937]">
                                        {data.text}
                                    </p>
                                    <div className="flex items-center justify-between mt-3 md:mt-5">
                                        <p className="text-[#FF7A18] font-semibold text-[13px]">
                                            #{data.price}
                                        </p>
                                        <FaPlus  className="mr-3 border w-6 h-6 p-1.5 rounded-full cursor-pointer bg-[#FF7A18] text-white"/>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <Link  to="/" className="mt-2 w-full flex md:hidden items-center justify-center text-[#1E88E5] font-semibold text-[13px] ">
                        View Categories
                    </Link>
                </div>
        </div>
        <div className="w-full p-10 bg-white">

            </div>
        
        <Footer />
        
        </>
    );
}