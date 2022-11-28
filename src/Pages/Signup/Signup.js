import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { ImSpinner2 } from "react-icons/im";
import useToken from "../../Hooks/useToken";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { createUser, updateUser, loading } = useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const handleLogin = (data) => {
    console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully!");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.email, data.name, data.role);
          })
          .catch((e) => console.log(e));
      })
      .catch((error) => {
        console.error(error);
        setSignUpError(error.message);
      });
  };

  const saveUser = (email, name, role) => {
    const user = { email, name, role };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  //Loading spinner//
  if (loading) {
    return <ImSpinner2 className="animate-spin mx-auto"></ImSpinner2>;
  }
  return (
    <div className="text-center w-96 flex justify-center items-center mx-auto bg-white">
      <div className="p-5">
        <h2 className="text-2xl">Sign UP</h2>
        <hr className="mt-5" />
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className=" w-full ">
            <div>
              <label className="label">
                <span className="label-text">Account Type</span>
              </label>
              <select
                {...register("role")}
                className="select select-bordered w-full max-w-xs"
              >
                <option value="buyer" selected>
                  buyer
                </option>
                <option value="seller">seller</option>
              </select>
            </div>
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full "
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-600" role="alert">
                {errors.name?.message}
              </p>
            )}
          </div>
          <div className=" w-full ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full "
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-600" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className=" w-full ">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              className="input input-bordered w-full "
              {...register("password", { required: "Password is required" })}
            />

            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <input
            className="btn hover:btn-success w-full mt-5"
            type="submit"
            value="Sign Up"
          />
          {signUpError && <p className="text-red-600">{signUpError}</p>}
        </form>
        <p className="mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600">
            Login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline hover:btn-success w-full mt-3">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Signup;
