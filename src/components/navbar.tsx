import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link, NavLink } from "react-router-dom"
import { motion } from 'framer-motion'
import { buttonScaleEffects, scrollRightEffects } from "../animation/animate"
export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
            <nav className="w-full px-5 md:px-10 py-2 flex flex-row items-center justify-between relative">
                <h3 className="logo-font text-2xl md:text-3xl lg:text-4xl text-[#FF7A18] cursor-pointer">
                    <Link to="/">
                        Chuks Kitchen
                    </Link>
                </h3>
                <ul className="hidden lg:flex space-x-20">
                    <li className="text-[#1F2937] text-[13px] cursor-pointer px-4 py-2 rounded-lg hover:text-[#FF7A18] hover:bg-[#FF7A18]/10  font-semibold transition-all duration-300">
                        <NavLink to="/" end className={({isActive}) => `${isActive ? 'text-[#FF7A18] ' : 'text-[#1F2937]'}`}>
                            Home
                        </NavLink>
                    </li>
                    <li className="text-[#1F2937] text-[13px] cursor-pointer px-4 py-1.5 rounded-lg hover:text-[#FF7A18] hover:bg-[#FF7A18]/10 font-semibold transition-all duration-300">
                        <NavLink to="/explore" className={({isActive}) => `${isActive ? 'text-[#FF7A18]' : 'text-[#1F2937]'}`}>
                            Explore
                        </NavLink>
                    </li>
                    <li className="text-[#1F2937] text-[13px] cursor-pointer px-4 py-1.5 rounded-lg hover:text-[#FF7A18] hover:bg-[#FF7A18]/10 font-semibold transition-all duration-300">
                        <NavLink to="/orders" className={({isActive}) => `${isActive ? 'text-[#FF7A18]' : 'text-[#1F2937]'}`}>
                            My Orders
                        </NavLink>
                    </li>
                    <li className="text-[#1F2937] text-[13px] cursor-pointer px-4 py-1.5 rounded-lg hover:text-[#FF7A18] hover:bg-[#FF7A18]/10 font-semibold transition-all duration-300">
                        <NavLink to="/account" className={({isActive}) => `${isActive ? 'text-[#FF7A18]' : 'text-[#1F2937]'}`}>
                            Account
                        </NavLink>
                    </li>
                </ul>
                <button className="hidden lg:flex mr-5 border px-8 py-2 text-[13px] font-semibold cursor-pointer rounded-lg text-white bg-[#FF7A18]">
                    Login
                </button>
                <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer flex lg:hidden w-10 h-10 items-center justify-center text-[#FF7A18] hover:text-[#1F2937] transition-all">
                    {isOpen ? <FaTimes  size={20}/> : <FaBars  size={20}/>}
                </button>
                {isOpen && (
                    <motion.div
                        {...scrollRightEffects} 
                        className="lg:hidden flex w-full h-auto px-2 absolute top-14 left-0 h-50 z-50 bg-white flex-col">
                        <ul className="space-y-3 mt-2">
                            <li className="text-[#1F2937] text-[13px] cursor-pointer px-4 py-2 rounded-lg hover:text-[#FF7A18] hover:bg-[#FF7A18]/10  font-semibold transition-all duration-300">
                                <NavLink to="/" end className={({isActive}) => `${isActive ? 'text-[#FF7A18] ' : 'text-[#1F2937]'}`}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="text-[#1F2937] text-[13px] cursor-pointer px-4 py-1.5 rounded-lg hover:text-[#FF7A18] hover:bg-[#FF7A18]/10 font-semibold transition-all duration-300">
                                <NavLink to="/explore" className={({isActive}) => `${isActive ? 'text-[#FF7A18]' : 'text-[#1F2937]'}`}>
                                    Explore
                                </NavLink>
                            </li>
                            <li className="text-[#1F2937] text-[13px] cursor-pointer px-4 py-1.5 rounded-lg hover:text-[#FF7A18] hover:bg-[#FF7A18]/10 font-semibold transition-all duration-300">
                                <NavLink to="/orders" className={({isActive}) => `${isActive ? 'text-[#FF7A18]' : 'text-[#1F2937]'}`}>
                                    My Orders
                                </NavLink>
                            </li>
                            <li className="text-[#1F2937] text-[13px] cursor-pointer px-4 py-1.5 rounded-lg hover:text-[#FF7A18] hover:bg-[#FF7A18]/10 font-semibold transition-all duration-300">
                                <NavLink to="/account" className={({isActive}) => `${isActive ? 'text-[#FF7A18]' : 'text-[#1F2937]'}`}>
                                    Account
                                </NavLink>
                            </li>
                        </ul>
                        <motion.button 
                            {...buttonScaleEffects}
                            className="border w-full h-10.5 mb-5 mt-2 border-none bg-[#FF7A18] text-white text-[13px] rounded-md cursor-pointer font-semibold">
                            Login
                        </motion.button>
                    </motion.div>
                )}
            </nav>
        </>
    )
}