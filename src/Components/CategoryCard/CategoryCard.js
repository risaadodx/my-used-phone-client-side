import React from "react";

const CategoryCard = ({ category }) => {
  const { _id, category_name, category_item, category_img } = category;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
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
          <button className="btn mt-5">Browse</button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
