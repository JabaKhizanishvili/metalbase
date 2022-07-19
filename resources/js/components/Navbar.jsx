import React from "react";
import { Link, usePage } from '@inertiajs/inertia-react'
// import Logo from "../assets/images/logo.png";
import { FaPhone } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { BiChevronDown } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { RiMenuAddFill } from "react-icons/ri";
// import Ge from "../assets/images/icons/ge.png";
// import En from "../assets/images/icons/en.png";
import { categories, categoryDropdown, navigations } from "./NavData";
import { useState } from "react";
import { contactInfo } from "./Data";

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
    const { errors, gphone, gemail, gaddress, locales, currentLocale, locale_urls } = usePage().props;
    return (
        <div className="text-sm relative z-50 h-12 bg-custom-blue-900 lg:h-auto flex items-center justify-between">
            <Link href="/" className="lg:hidden pl-3">
                <img src="/assets/images/logo.png" alt="" className="w-52 py-1" />
            </Link>
            <button
                className="text-white lg:hidden px-3"
                onClick={() => setShowMenu(true)}
            >
                <RiMenuAddFill className="w-6 h-6" />
            </button>
            <div
                className={`fixed left-0 top-0 w-full h-screen flex flex-col justify-center items-center  lg:relative lg:h-auto bg-white lg:block transition duration-500 lg:!translate-y-0 lg:!opacity-100 ${showMenu ? "translate-y-0" : "-translate-y-full"
                    }  `}
            >
                <button
                    className="absolute top-14 right-3 lg:hidden"
                    onClick={() => setShowMenu(false)}
                >
                    <IoCloseOutline className="w-6 h-6" />
                </button>
                <div className="lg:bg-custom-blue-900   lg:text-white  ">
                    <div className="wrapper flex items-center justify-between">
                        <div className="flex items-center whitespace-nowrap lg:mb-0 mb-5 -ml-6 lg:ml-0">
                            <Link href="/" className="hidden lg:inline-block">
                                <img src="/assets/images/logo.png" alt="" className="w-80  h-auto py-1" />
                            </Link>
                            <div>
                                {navigations.map((nav, index) => {
                                    return (
                                        <Link
                                            key={index}
                                            href={nav.link}
                                            className=" lg:ml-8 ml-3 text-xs lg:text-sm inline-block"
                                        >
                                            {nav.text}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="flex items-center">
                            <a
                                href={`tel:${gphone.value}`}
                                className="lg:relative lg:bottom-auto lg:left-auto mr-6 absolute bottom-3 left-3 "
                            >
                                <FaPhone className="inline-block mr-2" />
                                {gphone.value}
                            </a>

                            {/* languages */}



                            <div className="lg:relative lg:top-auto lg:left-auto inline-block absolute top-14 left-3 group">
                                <div className="w-6 h-6 overflow-hidden">
                                    <img src="/assets/images/icons/ge.png" alt="" />
                                </div>

                                <div className="absolute right-0 top-full w-full pt-2 lg:hidden group-hover:block">
                                    <a href="#">
                                        <img src="/assets/images/icons/en.png" alt="" />
                                    </a>
                                    <a href="#">
                                        <img src="/assets/images/icons/en.png" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white box-border">
                    <div className="wrapper flex justify-between items-center ">
                        <div>
                            <div className="lg:inline-block block text-center px-4 lg:py-5 py-3 whitespace-nowrap  hover:bg-custom-blue-500/[.1] box-border group cursor-pointer relative ">
                                რკინეული
                                <BiChevronDown className="inline-block -mt-1 transition group-hover:rotate-180" />
                                <div className="absolute lg:left-0 left-1/2 -translate-x-1/2 lg:translate-x-0 top-full bg-white py-5 px-3 z-40 transition opacity-0 invisible translate-y-5 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0  lg:border-transparent border-custom-blue-500/[.1] border">
                                    {categoryDropdown.map((item, index) => {
                                        return (
                                            <Link
                                                key={index}
                                                href={item.link}
                                                className=" lowercase whitespace-nowrap block py-1 px-3 w-full bg-zinc-100 hover:bg-zinc-200 mb-1"
                                            >
                                                {item.text}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                            {categories.map((item, index) => {
                                return (
                                    <Link key={index} href={item.link}>
                                        <div className="lg:inline-block block text-center px-4 lg:py-5 py-3 whitespace-nowrap  hover:bg-custom-blue-500/[.1]">
                                            {item.text}
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                        <div className="lg:relative lg:top-auto lg:right-auto flex items-center justify-between bg-custom-blue-900/[.1] h-12 px-5 lg:w-72 absolute top-0 right-0 w-full">
                            <input
                                type="text "
                                className="h-full w-full outline-0  bg-transparent  text-sm placeholder:text-custom-blue-900"
                                placeholder="მოძებნე პროდუქტი"
                            />
                            <FiSearch className=" shrink-0 w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
