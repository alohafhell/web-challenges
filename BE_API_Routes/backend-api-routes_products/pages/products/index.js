// Import the useSWR hook, create a fetcher and fetch /api/products.
// Map over the fetched data object to create a list of all products
// where you display their information.
// Switch to the browser and open /products: you should now see a
// (rarely styled) list of all products.
// ✨ Great work, you've consumed your own api route to display its data in the frontend!

import useSWR from "swr";
import Link from "next/link";

export default function productList() {
  const { data, isLoading } = useSWR("/api/products");

  if (isLoading) {
    <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }
  console.log("where u at");
  return (
    <ul>
      {data.map((product) => (
        <li key={product.id}>
          <Link href={"/${product.id"}>{product.name}</Link>
        </li>
      ))}
    </ul>
  );
}
