import { IoPerson } from "react-icons/io5";
import { FaKey } from "react-icons/fa";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-2xl bg-white">
        <h1 className="text-3xl font-semibold text-center text-green-500">
          Login
          <span className="text-blue-500"> | Advisoropedia Assignment</span>
        </h1>
        <div className="divider px-3 pt-2"></div>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base font-semibold label-text text-slate-600">
                Username
              </span>
            </label>
            <label className="input input-bordered flex items-center gap-2">
              <IoPerson className="w-5 h-5 text-gray-500" />
              <input
                type="text"
                className="grow"
                placeholder="Enter your username"
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
                placeholder="Enter your password"
              />
            </label>
          </div>
          
          <div>
            <button className="btn btn-outline btn-info btn-md w-full mt-4">Login</button>
          </div>

          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </a>
        </form>
      </div>
    </div>
  );
};

export default Login;
