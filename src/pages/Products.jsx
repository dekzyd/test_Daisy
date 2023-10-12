import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "../utils";
import { useLoaderData } from "react-router-dom";

const url = "/products";
export const loader = async ({ request }) => {
  // get search params
  // #1 for individual queries
  // const params = new URL(request.url).searchParams;
  // const search = params.get("search");
  // #2 for all queries
  const params = Object.fromEntries([...new URL(request.url).searchParams]);

  const response = await customFetch(url, { params: params });
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta, params };
};

const Products = () => {
  const products = useLoaderData();
  // console.log(products);
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
