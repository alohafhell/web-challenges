import Product from "@/db/models/Product";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    if (!product) {
      response.status(404).json({ status: "Not Found" });
      return;
    }
    response.status(200).json(product);
    return;
  }
  response.status(405).json({ status: "Method not allowed" });
}

// Switch to pages/api/products/[id].js and adapt it as explained above:

// To find a single product by its id, you can use the Product model and
// the .findById() method: Product.findById(id).
// Delete lib/products.js because it is not used anymore.
// Open the browser and check the details pages: they should now work as well!
