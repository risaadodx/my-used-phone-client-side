import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import useBuyer from "../../Hooks/useBuyer";
import Loading from "../../Pages/Shared/Loading/Loading";

const BuyerRoute = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [isBuyer, isBuyerLoading] = useBuyer(user?.email);
  const location = useLocation();

  if (isBuyerLoading) {
    return <Loading></Loading>;
  }

  if (user && isBuyer) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default BuyerRoute;
