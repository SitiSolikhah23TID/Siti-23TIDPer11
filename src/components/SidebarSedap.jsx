import { FaLeaf, FaHome, FaInfoCircle, FaStore, FaNewspaper, FaPhone } from "react-icons/fa";

export default function SidebarSedap() {
    return (
        <aside className="h-screen w-64 bg-white border-r shadow-md fixed top-0 left-0 z-50">

            {/* Navigation */}
            <nav className="px-6 py-8">
                <ul className="space-y-6 text-gray-700 text-base font-medium">
                    <li>
                        <a href="#" className="flex items-center space-x-3 hover:text-green-600 transition-colors">
                            <FaHome />
                            <span>Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-3 hover:text-green-600 transition-colors">
                            <FaInfoCircle />
                            <span>About</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-3 hover:text-green-600 transition-colors">
                            <FaStore />
                            <span>Shop</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-3 hover:text-green-600 transition-colors">
                            <FaNewspaper />
                            <span>News</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center space-x-3 hover:text-green-600 transition-colors">
                            <FaPhone />
                            <span>Contact</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

