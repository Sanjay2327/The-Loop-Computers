// import { useCart } from "../Context/CartContext";

// export default function Cart() {
//   const { cartItems, removeFromCart } = useCart();

//   if (cartItems.length === 0) {
//     return (
//       <div className="p-12 text-center text-zinc-400">
//         Your cart is empty
//       </div>
//     );
//   }

//   return (
//     <section className="max-w-4xl mx-auto px-6 py-12 space-y-6">
//       <h2 className="text-3xl font-semibold mb-6">Your Cart</h2>

//       {cartItems.map((item) => (
//         <div
//           key={item.id}
//           className="flex items-center justify-between bg-zinc-900 border border-zinc-800 p-4 rounded-lg"
//         >
//           <div>
//             <h3 className="font-medium">{item.name}</h3>
//             <p className="text-sm text-zinc-400">
//               Qty: {item.qty}
//             </p>
//           </div>

//           <div className="flex items-center gap-4">
//             <span className="text-indigo-400 font-semibold">
//               ₹{item.price}
//             </span>
//             <button
//               onClick={() => removeFromCart(item.id)}
//               className="text-sm text-red-400 hover:text-red-500"
//             >
//               Remove
//             </button>
//           </div>
//         </div>
//       ))}
//     </section>
//   );
// }


import api from "../services/api";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, subtotal, clearCart } = useCart();

    const placeOrderHandler = async () => {
    const orderData = {
      items: cartItems.map((item) => ({
        productId: item._id,
        name: item.name,
        price: item.price,
        qty: item.qty,
        image: item.image,
      })),
      totalAmount: subtotal,
    };

    try {
      await api.post("/api/orders", orderData);
      clearCart();
      navigate("/order-success");
    } catch (error) {
      alert("Failed to place order");
    }
  };


  if (cartItems.length === 0) {
    return (
      <div className="p-12 text-center text-zinc-400">
        Your cart is empty
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-semibold mb-8">Your Cart</h2>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-zinc-900 border border-zinc-800 p-4 rounded-lg"
          >
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-sm text-zinc-400">
                Qty: {item.qty}
              </p>
            </div>

            <div className="flex items-center gap-6">
              <span className="text-indigo-400 font-semibold">
                ₹{item.price}
              </span>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-sm text-red-400 hover:text-red-500"
              >
                Remove
              </button>
              {/* Checkout Button */}
      <div className="mt-6 text-right">
        <button className="px-6 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition text-white font-medium">
          Proceed to Checkout
        </button>
      </div>
            </div>
          </div>
        ))}
      </div>

      {/* Subtotal */}
      <div className="mt-10 flex items-center justify-between border-t border-zinc-800 pt-6">
        <span className="text-lg">Subtotal</span>
        <span className="text-2xl font-bold text-indigo-400">
          ₹{subtotal.toLocaleString()}
        </span>
      </div>

      
    </section>
  );
}
