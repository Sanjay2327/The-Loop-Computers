import { useEffect, useState } from "react";
import api from "../services/api";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.get("/api/orders").then((res) => setOrders(res.data));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Orders</h1>

      {orders.map((order) => (
        <div
          key={order._id}
          className="bg-zinc-900 p-4 mb-4 rounded"
        >
          <p>Total: ₹{order.totalAmount}</p>
          <p>Status: {order.orderStatus}</p>
          <p>Payment: {order.paymentMethod}</p>
        </div>
      ))}
    </div>
  );
}
