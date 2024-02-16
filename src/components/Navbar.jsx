import React, { useState } from "react";
import {
    FaBars,
    FaSearch,
    FaShoppingBag,
    FaTimes,
    FaUser,
} from "react-icons/fa";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import Jewelry from "../pages/itemPages/Jewelry";
import Clothing from "../pages/itemPages/Clothing";
import Login from "../pages/Login/Login";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { title: "Home", path: "/" },
        { title: "Jewelry & Accessories", path: "/jewelry" },
        { title: "Clothing & Shoes",  path: "/clothing" },
        { title: "Home & Living", path: "/homeliving" },
        { title: "Wedding & Party", path: "/weddingParty" },
        { title: "Toys & Entertainment", path: "/toysEntertainment" },
        { title: "Art & Collectibles", path: "/artCollectibles" },
        { title: "Craft Supplies & Tools", path: "/craftSuppliesTools" },
    ];
    return (
        <div>
            <header className="max-w-screen-2xl xl:px-14 px-4 absolute top-0 left-0 right-0">
                <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
                    {/* <FaSearch className="text-Black w-5 h-5 cursor-pointer hidden md:block" /> */}

                    {/* logo */}
                    <a href="/">
                        <img style={{width:"30px"}} src={logo} alt="" />
                    </a>

                    {/* account and shopping btn */}
                    <div className="text-lg text-Black sm:flex items-center gap-4 hidden">
                        <a href="/login" className="flex items-center gap-2">
                             <FaUser /> Account{" "}
                        </a>
                        <a href="/" className="flex items-center gap-2">
                            <FaShoppingBag /> Shoping{" "}
                        </a>
                    </div>

                    {/* navbar for sm devices */}
                    <div className="sm:hidden">
                        <button onClick={toggleMenu}>
                            {isMenuOpen ? (
                                <FaTimes className="w-5 h-5 text-Black" />
                            ) : (
                                <FaBars className="w-5 h-5 text-Black" />
                            )}
                        </button>
                    </div>
                </nav>

                <hr />

                {/* category items  */}
                <div className="pt-4">
                    <ul className="lg:flex items-center justify-between text-Black hidden">
                        {navItems.map(({ title, path }) => (
                            <li key={title} className="hover:text-orange-500">
                                <Link to={path}>{title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* only mobile menu items  */}
                <div>
                    <ul
                        className={`bg-Black text-white px-4 py-2 rounded ${isMenuOpen ? "" : "hidden"
                            }`}
                    >
                        {navItems.map(({ title, path }) => (
                            <li key={title} className="hover:text-orange-500 my-3 cursor-pointer">
                                <Link to={path}>{title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </header>
            {/* <Jewelary/> */}
            {/* <Jewelry/> */}
        </div>
    );
};

export default Navbar;
