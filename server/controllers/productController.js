// import Product from "../models/Product.js";

// export const getProducts = async (req, res) => {
//   try {
//     const products = await Product.find();
//     res.json(products);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// import Product from "../models/Product.js";

// export const getProducts = async (req, res) => {
//   try {
//     console.log("GET /api/products called");

//     const products = await Product.find();

//     console.log("Products fetched:", products);

//     res.status(200).json(products);
//   } catch (error) {
//     console.error("ERROR in getProducts:", error);
//     res.status(500).json({
//       message: "Failed to fetch products",
//       error: error.message,
//     });
//   }
// };


import Product from "../models/Product.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error.message);
    res.status(500).json({ message: error.message });
  }
};
