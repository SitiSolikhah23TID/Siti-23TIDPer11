import { FaFacebookF, FaTwitter, FaInstagram, FaUser } from "react-icons/fa";
import { FiPhone, FiMail } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaLeaf } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import LogoSedap from "./LogoSedap";

export default function HeaderSedap() {
    return (
        <header className="w-full h-auto text-sm font-light bg-white">
            {/* Top Bar */}
            <div className="flex justify-between items-center bg-gray-100 px-8 py-2 text-gray-600">
                <div className="flex items-center space-x-4">
                    <Link to="/login" className="hover:text-green-600">Login / Register</Link>
                    <span>|</span>
                    <div className="flex items-center space-x-2">
                        <FiMail />
                        <span>info@sedap.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <FiPhone />
                        <span>+62 8571 1442 1642</span>
                    </div>
                    <span>|</span>
                    <div className="flex items-center space-x-2">
                        <FaLeaf className="text-green-600" />
                        <span className="font-bold">Sedap</span>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <a href="https://www.facebook.com/groups/1048628362285878/?ref=share&mibextid=NSMWBT"><FaFacebookF /></a>
                    <a href="https://x.com/epicurina"><FaTwitter /></a>
                    <a href="https://www.instagram.com/miesedaapid/"><FaInstagram /></a>
                    <div className="flex items-center space-x-1 cursor-pointer">
                        <img src="/img/inggris.png" alt="Englis" className="w-4 h-4 rounded" />
                        <span>English</span>
                        <MdKeyboardArrowDown />
                    </div>
                </div>
            </div>

            {/* Navigation Menu */}
            <div className="flex justify-between items-center px-8 py-4 bg-white">
                <nav>
                    <ul className="flex space-x-6 text-gray-700 font-medium">
                        <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-green-600 font-semibold" : "hover:text-green-600"}>
                            Home
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/About" className={({ isActive }) => isActive ? "text-green-600 font-semibold" : "hover:text-green-600"}>
                            About
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/menumakan" className={({ isActive }) => isActive ? "text-green-600 font-semibold" : "hover:text-green-600"}>
                            Shop
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/customers" className={({ isActive }) => isActive ? "text-green-600 font-semibold" : "hover:text-green-600"}>
                            News
                        </NavLink>
                        </li>
                        <li>
                        <NavLink to="/user" className={({ isActive }) => isActive ? "text-green-600 font-semibold" : "hover:text-green-600"}>
                            Contact
                        </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center space-x-4">
                    <button className="text-gray-600 hover:text-green-600">
                        <FaUser />
                    </button>
                    <button className="relative text-gray-600 hover:text-green-600">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5"
                            viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M2.25 3h1.5l.401 2.007M6.75 14.25A3 3 0 1012 14.25m6.75 0A3 3 0 1018 14.25m-8.25-6h10.5l-.375 2M9 14.25H6.75m12 0H18m-3.75 0H9" />
                        </svg>
                        <span className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full text-xs px-1">2</span>
                    </button>
                </div>
            </div>

            {/* Logo Sedap dengan Background */}
            <LogoSedap />
        </header>
    );
}
