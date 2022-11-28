import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const BookingModal = ({ booking }) => {
  const { product_name, resale_price } = booking;
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const phoneModal = form.phoneModal.value;
    const email = form.email.value;
    const price = form.price.value;
    const phone = form.phone.value;
    const meetLocation = form.location.value;

    const bookingSubmit = {
      productName: phoneModal,
      name,
      price,
      meetLocation,
      email,
      phone,
    };
    fetch(
      "https://b612-used-products-resale-server-side-risaadodx.vercel.app/bookings",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(bookingSubmit),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Booking Confirmed");
        }
      });
    console.log(bookingSubmit);
  };
  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <form onSubmit={handleBooking}>
            <label
              htmlFor="booking-modal"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>

            <label className="font-bold pl-5">Name:</label>
            <input
              name="name"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full my-2"
              defaultValue={user?.displayName}
              disabled
            />
            <label className="font-bold pl-5">Email:</label>
            <input
              name="email"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full my-2"
              defaultValue={user?.email}
              disabled
            />
            <label className="font-bold pl-5">Price:</label>
            <input
              name="price"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full my-2"
              value={resale_price}
              disabled
            />
            <label className="font-bold pl-5">Phone Modal:</label>
            <input
              name="phoneModal"
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full my-2"
              value={product_name}
              disabled
            />
            <label className="font-bold pl-5">Phone:</label>
            <input
              name="phone"
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
      </div>
    </div>
  );
};

export default BookingModal;
