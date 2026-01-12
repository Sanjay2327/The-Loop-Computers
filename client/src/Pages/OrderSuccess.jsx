import { Link } from "react-router-dom";

export default function OrderSuccess() {
  return (
    <div className="h-[70vh] flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold text-green-400">
        Order Confirmed 🎉
      </h1>
      <p className="mt-4 text-zinc-300">
        Your order has been placed successfully.
      </p>
      <Link
        to="/shop"
        className="mt-6 px-6 py-3 bg-indigo-600 rounded-lg"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
