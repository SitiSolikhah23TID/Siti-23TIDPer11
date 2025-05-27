import { useState } from "react";
import "./assets/tailwind.css";
// import Dashboard2 from "./pages/Dashboard2";
// import Orders from "./pages/Orders";
// import Customers from "./pages/Customers";
// import NotFound from "./pages/NotFound";
// import Error400 from "./pages/Error400";
// import Error401 from "./pages/Error401";
// import Error403 from "./pages/Error403";
import { Route, Routes } from "react-router-dom";
// import MainLayout from "./layouts/MainLayout";
// import AuthLayout from "./layouts/AuthLayout";
// import Login from "./pages/auth/Login";
// // import Register from "./pages/auth/Register";
// import Forgot from "./pages/auth/Forgot";
import React from "react";
import { Suspense } from "react";
import Loading from "./components/Loading";
import AddCustomers from "./components/AddCustomers";
import MenuMakan from "./pages/MenuMakan";
import AboutSedap from "./components/AboutSedap";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

// import FooterSedap from "./pages/FooterSedap";

const Dashboard2 = React.lazy(() => import("./pages/Dashboard2"))
const Orders = React.lazy(() => import("./pages/Orders"))
const Customers = React.lazy(() => import("./pages/Customers"))
const NotFound = React.lazy(() => import("./pages/NotFound"))
const Error400 = React.lazy(() => import("./pages/Error400"))
const Error401 = React.lazy(() => import("./pages/Error401"))
const Guest = React.lazy(() => import("./pages/Guest"))
const Login = React.lazy(() => import("./pages/auth/Login"))
const Register = React.lazy(() => import("./pages/auth/Register"))
const Forgot = React.lazy(() => import("./pages/auth/Forgot"))
const MainLayout = React.lazy(() => import("./layouts/MainLayout"))
const AuthLayout = React.lazy(() => import("./layouts/AuthLayout"))

const GuestLayout = React.lazy(() => import("./layouts/GuestLayout"))
const HalamanGuest = React.lazy(() => import("./pages/HalamanGuest"));



const User = React.lazy(() => import("./pages/User"))

function App() {

  return (
    <Suspense fallback={<Loading />}>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard2 />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/error400" element={<Error400 />} />
        <Route path="/error401" element={<Error401 />} />
        <Route path="/Guest" element={<Guest />} />
        <Route path="/user" element={<User />} />
        <Route path="/addCustomers" element={<AddCustomers />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} /> 
      </Route>
      <Route path="/Guest" element={<Guest />} />
      <Route path="*" element={<NotFound />} />

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
      </Route>

      <Route element={<GuestLayout />}>
        <Route path="/halamanGuest" element={<HalamanGuest />} />
        <Route path="/menumakan" element={<MenuMakan />} />
        <Route path="/About" element={<AboutSedap />} />
      </Route>

    </Routes>
    </Suspense>
  );
}

export default App;
