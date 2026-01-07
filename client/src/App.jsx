
// import { Routes, Route } from "react-router-dom";

// 1.
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import Cart from "./pages/Cart";
// import AdminLogin from "./Pages/AdminLogin";
// import AdminDashboard from "./Pages/AdminDashboard";

// export default function App() {
//   return (
//     <div className="min-h-screen bg-zinc-950 text-white">
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/admin/login" element={<AdminLogin />} />
//         <Route path="/admin" element={<AdminDashboard />} />
//       </Routes>
//     </div>
//   );
// }

// 2.

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

// public pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

// admin pages
// import AdminLogin from "./pages/AdminLogin";
import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminProducts from "./Pages/AdminProducts";
import AdminAddProduct from "./Pages/AdminAddProduct";

// layouts
import AdminLayout from "./layouts/AdminLayout";

export default function App() {
  return (
    
      <Routes>

        {/* PUBLIC ROUTES */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route
          path="/shop"
          element={
            <>
              <Navbar />
              <Shop />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <Cart />
            </>
          }
        />

        {/* ADMIN LOGIN */}
        <Route path="/admin/login" element={<AdminLogin />} />

        {/* ADMIN LAYOUT */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="products" element={<AdminProducts />} />
          <Route path="products/add" element={<AdminAddProduct />} />
        </Route>

      </Routes>
    
  );
}
