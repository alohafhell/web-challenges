import { getAllProducts } from "@/services/productServices";

export default function handler(req, res) {
  const products = getAllProducts();

  if (!products) {
    return res.status(404).json({ status: "Not Found" });
  }

  res.status(200).json(products);
}

// Write a handler function which responds
// with a 200 status code and
// with the return value of getAllProducts, parsed with the .json() method.
