import React from "react";

const AddProduct = ({ category }) => {
  const { _id, category_name, category_item } = category;
  const handleAddProduct = (data) => {
    console.log(data);
  };
  return (
    <div className="w-96">
      <form onSubmit={handleAddProduct}>
        <div>
          <label className="font-bold pl-5">Select Category:</label>
          <select
            name="category"
            className="select select-bordered w-full max-w-xs"
          >
            <option selected>iPhone</option>
            <option>Samsung</option>
            <option>OnePlus</option>
          </select>
        </div>
        <label className="font-bold pl-5">Name:</label>
        <input
          name="name"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full my-2"
          value=""
        />
        <label className="font-bold pl-5">Email:</label>
        <input
          name="email"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full my-2"
          defaultValue=""
        />

        <label className="font-bold pl-5">Phone Modal:</label>
        <input
          name="phoneModal"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full my-2"
          value=""
        />
        <label className="font-bold pl-5">Original Price:</label>
        <input
          name="originalPrice"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full my-2"
          value=""
        />
        <label className="font-bold pl-5">Selling Price:</label>
        <input
          name="sellingPrice"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full my-2"
          value=""
        />
        <label className="font-bold pl-5">Used Year:</label>
        <input
          name="usedYear"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full my-2"
          value=""
        />
        <label className="font-bold pl-5">Image Url:</label>
        <input
          name="image"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full my-2"
        />
        <label className="font-bold pl-5">Loaction:</label>
        <input
          name="location"
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full my-2"
        />
        <input
          className="btn hover:btn-success w-full mt-5"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddProduct;
