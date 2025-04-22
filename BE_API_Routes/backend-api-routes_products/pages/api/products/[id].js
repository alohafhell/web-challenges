import { getAllProducts } from "@/services/productServices";

export default function handler(req, res) {
  const { id } = req.query;
  const product = getAllProducts().find((product) => product.id === id);

  if (!product) {
    return res.status(404).json({ status: "Not Found" });
  }
  res.status(200).json(product);
}

// Endpoint for Single Listing
// Create an api route which returns a single product based on the id passed as query parameter.

// Create the file /api/products/[id].js.
// Switch to /api/products/[id].js; import the getProductById function from /services/productServices.js.
// Write a handler function which responds
// with a 200 status code and
// with the return value of getProductById(), parsed with the .json() method.
// To access the id from the url, destructure the id variable from request.query and pass id as argument to getProductById(id).
// Check your api route:

// switch to the browser and open /api/products/1: you should now see the product with id: 1.
