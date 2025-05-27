import { FaLeaf } from "react-icons/fa";

export default function LogoSedap() {
    return (
        <div className="relative w-full h-100 overflow-hidden">
            {/* Gambar background */}
            <img
                src="https://ik.imagekit.io/tvlk/blog/2022/08/top-view-table-full-delicious-food-composition_23-2149141352.webp" 
                alt="Background Logo"
                className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            
            {/* Logo di tengah */}
            <div className="relative flex justify-center items-center h-full z-10">
                <FaLeaf className="text-green-600 text-7xl mr-2" />
                <h1 className="text-9xl font-bold text-white">
                    Sedap<span className="text-green-600 text-8xl">.</span>
                </h1>
            </div>
        </div>
    );
}
