import { IoPerson } from "react-icons/io5";
import { FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col mt-5 w-1/2 items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-2xl bg-white">
        <h1 className="text-3xl font-semibold text-center text-green-500">
          Login
          <span className="text-blue-500"> | Advisoropedia Assignment</span>
        </h1>
        <div className="divider px-3 pt-2"></div>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base font-semibold label-text text-slate-600">
                Username
              </span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <IoPerson className="w-5 h-5 text-gray-600" />
              <input
                type="text"
                className="grow"
                placeholder="Demo username: miraj_asraf"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text font-semibold text-slate-600">
                Password
              </span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
            <FaKey className="w-5 h-4 text-gray-500" />
              <input
                type="password"
                className="grow"
                placeholder="Demo password: Miraj#123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          
          <div>
            <button className="btn btn-outline btn-info btn-md w-full mt-4" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Login"
              )}
            </button>
          </div>

          <Link
            to={"/signup"}
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
