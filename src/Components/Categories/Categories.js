import React, { useEffect, useState } from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

const Categories = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://b612-used-products-resale-server-side-risaadodx.vercel.app/products"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="max-w-6xl md:mx-auto mt-20 mx-5">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-12 ">
        {products.map((category) => (
          <CategoryCard key={category._id} category={category}></CategoryCard>
        ))}
      </div>
    </div>
  );
};

export default Categories;
