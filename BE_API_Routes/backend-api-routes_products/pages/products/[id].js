// Use the useRouter hook to access the id query parameter from router.query.
// Fetch from /api/products/[id] (you need to interpolate the query id accordingly).
// The return statement does not return a list, but a single product.
// Switch to the browser and open /products/[someId]: you should now see the product with the
// id you've passed in the url.

import { useRouter } from "next/router";
import Link from "next/link";
import useSWR from "swr";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) return;
  console.log(data);
  return (
    <>
      <small>ID: {id} </small>
      <h1>{data.name}</h1>
      <Link href="/">Back to all</Link>
    </>
  );
}
