import LogoutButton from "./LogoutButton";

const NavBar = () => {
  return (
    <div className="navbar bg-base-100 rounded-lg mb-4">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Advisoropedia</a>
      </div>
      <div className="flex-none gap-4">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://avatars.githubusercontent.com/u/75885581?v=4"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                href="https://www.linkedin.com/in/miraj-asraf/"
                target="_blank"
                className="justify-between"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/Miraj8280/" target="_blank">GitHub</a>
            </li>
          </ul>
        </div>

        <div className="text-red-500 mx-4">
          <h3 title="Logout">{<LogoutButton />}</h3>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
