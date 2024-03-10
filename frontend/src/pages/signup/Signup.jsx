import { IoPerson, IoPersonCircleOutline } from "react-icons/io5";
import GenderSelect from "./GenderSelect";
import { FaKey } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";

import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const Signup = () => {

  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const { loading, signup } = useSignup();

  const handleGenderSelect = (gender) => {
    setInputs({...inputs, gender});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col w-1/2 items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-2xl bg-white">
        <h1 className="text-3xl font-semibold text-center text-green-500">
          Signup
          <span className="text-blue-500"> | Advisoropedia Assignment</span>
        </h1>
        <div className="divider px-3 pt-2"></div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-slate-600 font-semibold">
                Full Name
              </span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <IoPersonCircleOutline className="w-6 h-7 text-gray-500" />
              <input
                type="text"
                className="grow"
                placeholder="Enter your full name"
                value={inputs.fullName}
                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
              />
            </label>
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text text-slate-600 font-semibold">
                Username
              </span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <IoPerson className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                className="grow"
                placeholder="Enter your username"
                value={inputs.username}
                onChange={(e) => setInputs({...inputs, username: e.target.value})}
              />
            </label>
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text text-slate-600 font-semibold">
                Password
              </span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <FaKey className="w-5 h-4 text-gray-500" />
              <input
                type="password"
                className="grow"
                placeholder="Enter a password"
                value={inputs.password}
                onChange={(e) => setInputs({...inputs, password: e.target.value})}
              />
            </label>
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text text-slate-600 font-semibold">
                Confirm Password
              </span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <RiLockPasswordFill className="w-6 h-5 text-gray-500" />
              <input
                type="password"
                className="grow"
                placeholder="Confirm your password"
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})}
              />
            </label>
          </div>

          {/* GENDER SELECT GOES HERE */}
          <GenderSelect 
            onGenderSelect={handleGenderSelect}
            selectedGender={inputs.gender}
          />
          <label className="hover:text-blue-500 flex items-center gap-2 my-2">
            {" "}
            <input
              type="checkbox"
              defaultChecked
              className="checkbox checkbox-xs"
            />{" "}
            Yes, I have read and consent to the terms and conditions*
          </label>

          <div></div>

          <div>
            <button className="btn btn-outline btn-success btn-md w-full mt-2" disabled={loading}>
            {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>

          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            Already have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
