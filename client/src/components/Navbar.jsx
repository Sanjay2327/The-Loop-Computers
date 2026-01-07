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

import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

export default function Navbar() {
  const { totalQuantity } = useCart();

  return (
    <nav className="w-full bg-zinc-950 border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold tracking-wide">
          <span className="text-indigo-400">⟳</span>{" "}
          <span className="text-zinc-100">The Loop Computers</span>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 text-sm text-zinc-300">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>

          <Link to="/shop" className="hover:text-white transition">
            Shop
          </Link>

          <Link to="/cart" className="hover:text-white transition">
            Cart ({totalQuantity})
          </Link>
        </div>
      </div>
    </nav>
  );
}
