import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import { ImSpinner2 } from "react-icons/im";
import { GoogleAuthProvider } from "firebase/auth";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn, providerLogin, loading } = useContext(AuthContext);

  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        console.error(error.message);
        setLoginError(error.message);
      });
  };

  if (loading) {
    return <ImSpinner2 className="animate-spin mx-auto"></ImSpinner2>;
  }
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="text-center w-96 flex justify-center items-center mx-auto bg-white">
      <div className="p-5">
        <h2 className="text-2xl">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
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
            <label className="label">
              <span className="label-text">Forget Password?</span>
            </label>
            {errors.password && (
              <p className="text-red-600" role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
          <input
            className="btn hover:btn-success w-full mt-5"
            type="submit"
            value="Login"
          />
        </form>
        <p className="mt-3">
          No account?{" "}
          <Link to="/signup" className="text-green-600">
            Sign Up
          </Link>
        </p>
        <div className="divider">OR</div>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline hover:btn-success w-full mt-3"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
