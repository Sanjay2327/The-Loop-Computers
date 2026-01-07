import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AdminAddProduct() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    specs: "",
    price: "",
    image: "",
    category: "laptop",
    isRefurbished: true,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("adminToken");

      await axios.post(
        "http://localhost:5000/api/products",
        form,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      navigate("/admin/products");
    } catch (err) {
      setError("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-semibold mb-6">Add Product</h1>

      {error && (
        <p className="mb-4 text-red-400">{error}</p>
      )}

      <form onSubmit={submitHandler} className="space-y-4">
        <input
          name="name"
          placeholder="Product name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 bg-zinc-900 rounded"
        />

        <input
          name="specs"
          placeholder="Specs (CPU, RAM, SSD)"
          value={form.specs}
          onChange={handleChange}
          required
          className="w-full p-3 bg-zinc-900 rounded"
        />

        <input
          name="price"
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          required
          className="w-full p-3 bg-zinc-900 rounded"
        />

        <input
          name="image"
          placeholder="Image URL"
          value={form.image}
          onChange={handleChange}
          className="w-full p-3 bg-zinc-900 rounded"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="w-full p-3 bg-zinc-900 rounded"
        >
          <option value="laptop">Laptop</option>
          <option value="accessory">Accessory</option>
          <option value="custom-pc">Custom PC</option>
        </select>

        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name="isRefurbished"
            checked={form.isRefurbished}
            onChange={handleChange}
          />
          Refurbished
        </label>

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded"
        >
          {loading ? "Saving..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}
