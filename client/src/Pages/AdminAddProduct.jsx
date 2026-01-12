import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

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

    if (!form.image) {
    setError("Please upload image first");
    setLoading(false);
    return;
  }

    try {
      const token = localStorage.getItem("adminToken");

      await api.post("/api/products", form);

      navigate("/admin/products");
    } catch (err) {
      setError("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  const uploadImageHandler = async (e) => {
  const file = e.target.files[0];
  const formData = new FormData();
  formData.append("image", file);

  try {
    const { data } = await api.post("/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    setForm((prev) => ({
      ...prev,
      image: data.imageUrl,
    }));
  } catch (error) {
    alert("Image upload failed");
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
          type="file"
          onChange={uploadImageHandler}
          className="w-full p-2 bg-zinc-900"
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
