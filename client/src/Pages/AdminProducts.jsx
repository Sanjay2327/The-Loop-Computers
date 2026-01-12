import { useEffect, useState } from "react";
import axios from "axios";
import api from "../services/api";

export default function AdminProducts() {
  
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { data } = api.get("/api/products");
  

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const token = localStorage.getItem("adminToken");

        const { data }  = await api.get("/api/products");

        setProducts(data);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <p className="text-zinc-400">Loading products...</p>;
  }

  if (error) {
    return <p className="text-red-400">{error}</p>;
  }

  const deleteHandler = async (id) => {
    if (!window.confirm("Delete this product?")) return;

    try {
      await api.delete(`/api/products/${id}`);
      setProducts((prev) => prev.filter((p) => p._id !== id));
    } catch (error) {
      alert("Failed to delete product");
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Products</h1>

      <div className="overflow-x-auto">
        <table className="w-full border border-zinc-800 text-sm">
          <thead className="bg-zinc-900">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Price</th>
              <th className="p-3 text-left">Category</th>
              <th className="p-3 text-left">Refurbished</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product._id}
                className="border-t border-zinc-800 hover:bg-zinc-900"
              >
                <td className="p-3">{product.name}</td>
                <td className="p-3">₹{product.price}</td>
                <td className="p-3">{product.category}</td>
                <td className="p-3">
                  {product.isRefurbished ? "Yes" : "No"}
                </td>
                <td className="p-2 flex gap-4"> 
                  <button
                    onClick={() =>
                      navigate(`/admin/products/edit/${product._id}`)
                    }
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => deleteHandler(product._id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
