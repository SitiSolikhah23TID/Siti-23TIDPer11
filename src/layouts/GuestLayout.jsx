import HeaderSedap from "../components/HeaderSedap";
import MenuMakan from "../pages/MenuMakan";


export default function GuestLayout({ children }) {
    return (
        <div id="app-container" className="bg-gray-100 min-h-screen flex">
        <div id="layout-wrapper" className="flex flex-row flex-1">
          <div id="main-content" className="flex-1 p-4">
            <HeaderSedap />

            <MenuMakan/>
          </div>
        </div>
      </div>

    );
}
