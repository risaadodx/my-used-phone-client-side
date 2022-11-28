import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useAdmin from "../../Hooks/useAdmin";
import useBuyer from "../../Hooks/useBuyer";
import useSeller from "../../Hooks/useSeller";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email);
  const [isBuyer] = useBuyer(user?.email);
  const [isSeller] = useSeller(user?.email);
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content ">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {isBuyer && (
              <li>
                <Link to="/dashboard/myOrders">My Orders</Link>
              </li>
            )}
            {isSeller && (
              <li>
                <Link to="/dashboard/addProduct">Add Product</Link>
              </li>
            )}
            {isSeller && (
              <li>
                <Link to="/dashboard/myProducts">My Products</Link>
              </li>
            )}
            {isAdmin && (
              <li>
                <Link to="/dashboard/allBuyers">Buyers</Link>
              </li>
            )}
            {isAdmin && (
              <li>
                <Link to="/dashboard/allSellers">Sellers</Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
