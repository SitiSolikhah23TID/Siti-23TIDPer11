import React from 'react';
import HeaderSedap from '../components/HeaderSedap';
import MenuMakan from '../components/ProductCard';

function HalamanGuest() {
    return (
        <div className="flex relative">
            <HeaderSedap />
            <main className="ml-64 p-8 w-full">
                {/* Konten utama halaman guest */}
                <h1 className="text-2xl font-bold">Welcome to Sedap Market!</h1>
                <p className="mt-4 text-gray-600">Enjoy quality delicious food products from us.</p>
            </main>
            <div>
                <MenuMakan />
            </div>
        </div>
    );
}

export default HalamanGuest;
