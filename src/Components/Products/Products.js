import React from "react";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const products = useLoaderData();
  return (
    <div className="max-w-6xl mx-auto mt-20">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-12 ">
        {products.category_item.map((product) => (
          <ProductCard key={product._id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
