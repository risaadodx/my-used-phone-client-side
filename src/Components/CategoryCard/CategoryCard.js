import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  const { _id, category_name, category_item, category_img } = category;
  return (
    <div>
      <div className="card w-86 md:w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            style={{ width: "400px", height: "300px" }}
            src={category_img}
            alt="Shoes"
          />
        </figure>
        <div className=" text-center py-10">
          <h2 className=" text-2xl font-bold">
            {category_name}
            <div className="badge badge-secondary ml-2">
              {category_item.length}
            </div>
          </h2>
          <Link to={`/products/${category._id}`}>
            <button className="btn mt-5">Browse</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
