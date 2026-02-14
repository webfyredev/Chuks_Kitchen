import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-router-dom"
export default function Footer(){
    const scrollUpIcon = () => {
        window.scrollTo({
            top : 0,
            behavior : "smooth"
        })
    }
    return(
        <>
            <footer className="w-full flex flex-col items-center lg:px-20 py-10 bg-[#62422E]">
                <div className="w-full p-5 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div className="flex flex-col w-full">
                        <h3 className="logo-font text-4xl text-[#FF7A18] cursor-pointer">
                            <Link to="/">
                                Chuks Kitchen
                            </Link>
                        </h3>
                        <p className="text-white text-[15px]">
                            Bringing the authentic flavors of Nigerian home cooking  to your table with passion and care.
                        </p>
                    </div>
                    <div className="flex flex-col items-left">
                        <h3 className="footer-font-400 text-white">
                            Quick Links
                        </h3>
                        <ul className="flex flex-col space-y-3.5 mt-3">
                            <li className="text-[12px] cursor-pointer text-white poppins-font-400 hover:font-semibold">
                                <Link to="/">
                                    Home
                                </Link>
                            </li>
                            <li className="text-[12px] cursor-pointer text-white poppins-font-400 hover:font-semibold">
                                <Link to="/explore">
                                    Explore
                                </Link>
                            </li>
                            <li className="text-[12px] cursor-pointer text-white poppins-font-400 hover:font-semibold">
                                <Link to="/orders">
                                    My Order
                                </Link>
                            </li>
                            <li className="text-[12px] cursor-pointer text-white poppins-font-400 hover:font-semibold">
                                <Link to="/">
                                    Account
                                </Link>
                            </li>
                            <li className="text-[12px] cursor-pointer text-white poppins-font-400 hover:font-semibold">
                                <Link to="/">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col items-left">
                        <h3 className="footer-font-400 text-white">
                            Contact Us
                        </h3>
                        <ul className="flex flex-col space-y-3.5 mt-3">
                            <li className="text-[12px] cursor-pointer text-white poppins-font-400 hover:font-semibold">
                                <a href="tel: +234 801 234 5678">
                                    +234 801 234 5678
                                </a>
                            </li>
                            <li className="text-[12px] cursor-pointer text-white poppins-font-400 hover:font-semibold">
                                <a href="mailto:hello@chukskitchen.com">
                                    hello@chukskitchen.com
                                </a>
                            </li>
                            <li className="text-[12px] cursor-pointer text-white poppins-font-400 hover:font-semibold">
                                123 Taste Blvd, Lagos Nigeria
                            </li>
                        </ul>
                    </div>
                    <ul className="flex flex-col space-y-3.5 mt-3">
                            <li className="text-[12px] cursor-pointer text-white poppins-font-400 hover:font-semibold">
                                <a href="#">
                                    Facebook
                                </a>
                            </li>
                            <li className="text-[12px] cursor-pointer text-white poppins-font-400 hover:font-semibold">
                                <a href="#">
                                    Twitter
                                </a>
                            </li>
                            <li className="text-[12px] cursor-pointer text-white poppins-font-400 hover:font-semibold">
                                <a href="#">
                                    Linkedin
                                </a>
                            </li>
                            <li className="text-[12px] cursor-pointer text-white poppins-font-400 hover:font-semibold">
                                <a href="#">
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    <div>

                    </div>
                </div>
                <div className="w-full flex items-center justify-between px-5 mt-5">
                    <p className="poppins-font-300 text-[13px] text-white">&copy; 2020 Life Media. All rights reserved.</p>
                    <button onClick={scrollUpIcon} className="p-3 rounded-full bg-[#0081FE] text-white cursor-pointer">
                        <FaArrowUp />
                    </button>
                </div>
                
            </footer>
        </>
    )
}