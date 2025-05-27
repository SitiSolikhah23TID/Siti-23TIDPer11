import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from 'react-icons/hi';

const FooterSedap = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo & Deskripsi */}
        <div className="md:col-span-1">
          <h2 className="text-white text-2xl font-bold flex items-center gap-1">
            <span className="text-green-500">🌿</span> Sedap
          </h2>
          <p className="mt-4 text-sm">
            Atiam rhoncus sit amet adip scing sed ipsum. Lorem ipsum dolor sit amet adipiscing sem neque.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white text-md font-semibold mb-4">Contact</h3>
          <p className="flex items-center gap-2 mb-2 text-sm"><HiOutlinePhone className="text-green-500" /> 666 888 0000</p>
          <p className="flex items-center gap-2 mb-2 text-sm"><HiOutlineMail className="text-green-500" /> info@company.com</p>
          <p className="flex items-center gap-2 text-sm"><HiOutlineLocationMarker className="text-green-500" /> 66 top brooklyn street. New York</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white text-md font-semibold mb-4">Links</h3>
          <ul className="space-y-2 text-sm">
            <li>Top Sellers</li>
            <li>Shopping</li>
            <li>About Store</li>
            <li>Contact</li>
            <li>Help</li>
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-white text-md font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>New Products</li>
            <li>My Account</li>
            <li>Support</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-md font-semibold mb-4">Newsletter</h3>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-2 mb-3 rounded-sm text-black"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded-sm w-full font-semibold">
            Subscribe
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-8" />

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <a href="#"><FaTwitter className="hover:text-white" /></a>
          <a href="#"><FaFacebookF className="hover:text-white" /></a>
          <a href="#"><FaInstagram className="hover:text-white" /></a>
        </div>
        <p>© Copyright 2025 by Company.com</p>
      </div>
    </footer>
  );
};

export default FooterSedap;
