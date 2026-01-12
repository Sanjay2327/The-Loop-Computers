
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

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// // public pages
// import Home from "./Pages/Home";
// import Shop from "./Pages/Shop";
// import Cart from "./Pages/Cart";

// // admin pages
// import AdminLogin from "./Pages/AdminLogin";
// import AdminDashboard from "./Pages/AdminDashboard";
// import AdminProducts from "./Pages/AdminProducts";
// import AdminAddProduct from "./Pages/AdminAddProduct";
// import AdminEditProduct from "./Pages/AdminEditProduct";


// // layouts
// import AdminLayout from "./layouts/AdminLayout";
// import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";


// export default function App() {
//   return (
    
//       <Router>
//         <div className="min-h-screen flex flex-col bg-zinc-950 text-white">

//           <Navbar />
          
//           {/* PUBLIC ROUTES */}
//         <div className="flex-1">
//           <Routes>
//             <Route path="/"element={<><Home /></>} />
//             <Route path="/shop"element={<><Shop /></>} />
//             <Route path="/cart"element={<><Navbar /><Cart /></>} />
//             {/* ADMIN LOGIN */}
//             <Route path="/admin/login" element={<AdminLogin />} />

//            {/* ADMIN LAYOUT */}
//              <Route element={<ProtectedAdminRoute />}/>
//              <Route path="/admin" element={<AdminLayout />}/>
//              <Route index element={<AdminDashboard />} />
//              <Route path="products" element={<AdminProducts />} />
//              <Route path="products/add" element={<AdminAddProduct />} />
//              <Route path="products/edit/:id" element={<AdminEditProduct />} />
             
           
//           </Routes>
//         </div>  
//           <Footer />
          
//        </div>
//       </Router>
    
//   );
// }

// 3.
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// public pages
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";

// admin pages
import AdminLogin from "./Pages/AdminLogin";
import AdminDashboard from "./Pages/AdminDashboard";
import AdminProducts from "./Pages/AdminProducts";
import AdminAddProduct from "./Pages/AdminAddProduct";
import AdminEditProduct from "./Pages/AdminEditProduct";

// layouts & protection
import AdminLayout from "./layouts/AdminLayout";
import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";

// order success page
import OrderSuccess from "./Pages/OrderSuccess";
import AdminOrders from "./Pages/AdminOrders";

export default function App() {
  return (
    
      <div className="min-h-screen flex flex-col bg-zinc-950 text-white">

        {/* TOP NAVBAR (ONCE) */}
        <Navbar />

        {/* MAIN CONTENT */}
        <div className="flex-1">
          <Routes>

            {/* PUBLIC ROUTES */}
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="orders" element={<AdminOrders />} />



            {/* ADMIN LOGIN */}
            <Route path="/admin/login" element={<AdminLogin />} />

            {/* PROTECTED ADMIN ROUTES */}
            <Route element={<ProtectedAdminRoute />}>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="products" element={<AdminProducts />} />
                <Route path="products/add" element={<AdminAddProduct />} />
                <Route path="products/edit/:id" element={<AdminEditProduct />} />
              </Route>
            </Route>

          </Routes>
        </div>

        {/* FOOTER (ONCE) */}
        <Footer />

      </div>
   
  );
}

