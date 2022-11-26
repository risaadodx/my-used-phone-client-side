import React from "react";

const ProductCard = ({ product, setBooking }) => {
  const {
    seller_name,
    product_name,
    image,
    original_price,
    resale_price,
    location,
    year_of_use,
  } = product;
  return (
    <div>
      <div className="card px-5 w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            style={{ width: "400px", height: "300px" }}
            src={image}
            alt="Shoes"
          />
        </figure>
        <div className=" text-center py-10">
          <h2 className=" text-2xl font-bold">{product_name}</h2>
        </div>
        <div className=" pb-10">
          <p>Location: {location}</p>
          <hr className="mt-2 mb-5" />
          <h3>
            Original Price:{" "}
            <span className="text-green-600 font-bold">{original_price}</span>{" "}
            Tk
          </h3>
          <h3>
            Selling Price:{" "}
            <span className="text-green-600 font-bold">{resale_price}</span> Tk
          </h3>
          <hr className="mt-5" />
          <p className="font-bold">Seller: {seller_name}</p>

          <p>Used: {year_of_use} year</p>
        </div>

        <label
          onClick={() => setBooking(product)}
          htmlFor="booking-modal"
          className="btn hover:btn-success mb-2"
        >
          Book Now
        </label>
      </div>
    </div>
  );
};

export default ProductCard;
