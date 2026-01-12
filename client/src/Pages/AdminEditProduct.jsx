import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

export default function AdminEditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    specs: "",
    price: "",
    image: "",
    category: "",
    isRefurbished: false,
  });

  const [loading, setLoading] = useState(true);

  // 🔹 Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await api.get(`/api/products/${id}`);
        setForm({
          name: data.name,
          specs: data.specs,
          price: data.price,
          image: data.image,
          category: data.category,
          isRefurbished: data.isRefurbished,
        });
        setLoading(false);
      } catch (error) {
        alert("Failed to load product");
      }
    };

    fetchProduct();
  }, [id]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await api.put(`/api/products/${id}`, form);
      navigate("/admin/products");
    } catch (error) {
      alert("Update failed");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="max-w-xl">
      <h1 className="text-2xl font-semibold mb-6">Edit Product</h1>

      <form onSubmit={submitHandler} className="space-y-4">
        <input
          className="w-full p-2 bg-zinc-900"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Name"
        />

        <input
          className="w-full p-2 bg-zinc-900"
          value={form.specs}
          onChange={(e) => setForm({ ...form, specs: e.target.value })}
          placeholder="Specs"
        />

        <input
          type="number"
          className="w-full p-2 bg-zinc-900"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          placeholder="Price"
        />

        <input
          type="file"
          onChange={uploadImageHandler}
          className="w-full p-2 bg-zinc-900"
        />


        {/* <input
          className="w-full p-2 bg-zinc-900"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
          placeholder="Image URL"
        /> */}

        <select
          className="w-full p-2 bg-zinc-900"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        >
          <option value="laptop">Laptop</option>
          <option value="accessory">Accessory</option>
          <option value="custom-pc">Custom PC</option>
        </select>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={form.isRefurbished}
            onChange={(e) =>
              setForm({ ...form, isRefurbished: e.target.checked })
            }
          />
          Refurbished
        </label>

        <button className="bg-blue-600 px-4 py-2 rounded">
          Update Product
        </button>
      </form>
    </div>
  );
}
