// import { Link } from "react-router-dom";
// import { useCart } from "../Context/CartContext";



// export default function Navbar() {

//     const { cartItems } = useCart();

//   return (
//     <nav className="w-full border-b border-zinc-800 bg-zinc-950">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
//         {/* Logo */}
//         <Link to="" className="text-xl font-semibold tracking-wide">
//           <span className="text-indigo-400">⟳</span>{" "}
//           <span className="text-zinc-100">The Loop Computers</span>
//         </Link>

//         {/* Navigation */}
//         <div className="hidden md:flex gap-8 text-sm text-zinc-300">
//           <Link className="hover:text-white transition" to="/shop">Shop</Link>
//           <Link className="hover:text-white transition" to="/custom">Custom PC</Link>
//           <Link className="hover:text-white transition" to="/deals">Deals</Link>
//           <Link className="hover:text-white transition" to="/cart">Cart</Link>
//         </div>

//       </div>
//     </nav>
//   );
// }

// import { Link } from "react-router-dom";
// import { useCart } from "../Context/CartContext";

// export default function Navbar() {
//   const { totalQuantity } = useCart();

//   return (
//     <nav className="w-full bg-zinc-950 border-b border-zinc-800">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
//         {/* Logo */}
//         <Link to="/" className="text-xl font-semibold tracking-wide">
//           <span className="text-indigo-400">⟳</span>{" "}
//           <span className="text-zinc-100">The Loop Computers</span>
//         </Link>

//         {/* Navigation Links */}
//         <div className="flex gap-8 text-sm text-zinc-300">
//           <Link to="/" className="hover:text-white transition">
//             Home
//           </Link>

//           <Link to="/shop" className="hover:text-white transition">
//             Shop
//           </Link>

//           <Link to="/cart" className="hover:text-white transition">
//             Cart ({totalQuantity})
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// .3
// import logo from "../assets/logo.png";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   return (
//     <nav className="sticky top-0 z-50 backdrop-blur bg-black/60 border-b border-white/10">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
  
//         {/* LOGO + BRAND */}
//         <Link to="/" 
//         className="text-2xl font-extrabold tracking-wide bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
//           <img
//             src={logo}
//             alt="The Loop Computers"
//             className="h-9 w-9 object-contain"
//           />
//           THE LOOP COMPUTERS
//         </Link>

//            <div className="flex gap-6 text-sm font-medium">
//             <Link className="hover:text-blue-400 transition" to="/">Home</Link>
//             <Link className="hover:text-blue-400 transition" to="/shop">Shop</Link>
//             <Link className="hover:text-blue-400 transition" to="/cart">Cart</Link>
//             <Link className="hover:text-blue-400 transition" to="/admin">Admin</Link>
//            </div>

        
//       </div>
//     </nav>
//   );
// }

import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-black/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO + BRAND */}
        <NavLink
          to="/"
          className="flex items-center gap-3 group">
          {/* Logo with glow */}
          <div className="relative">
            <img
              src={logo}
              alt="The Loop Computers"
              className="h-9 w-9 object-contain relative z-10"
            />
            <div className="absolute inset-0 rounded-full blur-md bg-indigo-500 opacity-40 group-hover:opacity-70 transition" />
          </div>

          {/* Brand text */}
          <span className="text-2xl font-extrabold tracking-wide bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            The Loop
             Computers
          </span>
        </NavLink>

        {/* NAV LINKS */}
        <div className="flex items-center gap-6 text-sm font-medium">
          {[
            { name: "Home", path: "/"  },
            { name: "Shop", path: "/shop" },
            { name: "Cart", path: "/cart" },
            { name: "Admin", path: "/admin" },
          ].map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative transition ${
                  isActive
                    ? "text-indigo-400"
                    : "text-zinc-300 hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {/* Active underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 w-full bg-indigo-400 transition ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

