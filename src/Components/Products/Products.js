import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "../BookingModal/BookingModal";
import ProductCard from "../ProductCard/ProductCard";

const Products = () => {
  const products = useLoaderData();

  const [booking, setBooking] = useState(null);
  return (
    <div className="max-w-6xl mx-auto mt-20">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mt-12 ">
        {products.category_item.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
            setBooking={setBooking}
          ></ProductCard>
        ))}
      </div>
      {booking && <BookingModal booking={booking}></BookingModal>}
    </div>
  );
};

export default Products;
