import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";
import Review from "@/db/models/Review";
export default async function handler(request, response) {
  await dbConnect();

  console.log("request.method: ", request.method);

  if (request.method === "GET") {
    const product = await Product.find();
    // const reviews = await Review.find();

    response.status(200).json(product);

    return;
  }

  response.status(405).json({ status: "Method not allowed" });
}
