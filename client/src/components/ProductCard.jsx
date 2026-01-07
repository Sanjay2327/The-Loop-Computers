// export default function ProductCard({ product }) {
//   return (
//     <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-indigo-500/40 transition">
      
//       {/* Image */}
//       <div className="h-48 bg-zinc-800 flex items-center justify-center">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="h-full object-contain"
//         />
//       </div>

//       {/* Content */}
//       <div className="p-4 space-y-2">
//         <h3 className="text-lg font-semibold text-zinc-100">
//           {product.name}
//         </h3>

//         <p className="text-sm text-zinc-400">
//           {product.specs}
//         </p>

//         <div className="flex items-center justify-between pt-3">
//           <span className="text-indigo-400 font-bold text-lg">
//             ₹{product.price}
//           </span>

//           <button className="px-4 py-2 text-sm rounded-lg bg-indigo-500 hover:bg-indigo-600 transition">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useCart } from "../Context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden hover:border-indigo-500/40 transition">
      <div className="h-48 bg-zinc-800 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="h-full object-contain"
        />
      </div>

      <div className="p-4 space-y-2">
        <h3 className="text-lg font-semibold text-zinc-100">
          {product.name}
        </h3>

        <p className="text-sm text-zinc-400">{product.specs}</p>

        <div className="flex items-center justify-between pt-3">
          <span className="text-indigo-400 font-bold text-lg">
            ₹{product.price}
          </span>

          <button
            onClick={() => addToCart(product)}
            className="px-4 py-2 text-sm rounded-lg bg-indigo-500 hover:bg-indigo-600 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
