import { FcClapperboard } from "react-icons/fc";
import { MdOutlineImageSearch, MdMenu } from "react-icons/md";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="max-w-[1800px] mx-auto navbar justify-between bg-[#090914] text-white px-5 py-3 shadow-sm absolute top-0 z-20 w-full">

      <div className="flex items-center gap-2">
        <FcClapperboard className="text-4xl" />

        <Link to="/" className="text-2xl font-extrabold">
          Movie<span className="text-blue-600">Explorer</span>
        </Link>
      </div>

      <div className="hidden md:flex items-center gap-5">
        <Link to="/" className="link link-hover hover:text-blue-400">
          Home
        </Link>

        <Link to="/movies" className="link link-hover hover:text-blue-400">
          Movies
        </Link>

        <Link to="/movies" className="link link-hover hover:text-blue-400">
          TV Shows
        </Link>

        <Link to="/movies" className="link link-hover hover:text-blue-400">
          About
        </Link>
      </div>

      <div className="flex items-center gap-2">

        <Link
          to="/movies"
          className="hidden sm:flex btn btn-primary rounded-2xl btn-md"
        >
          <MdOutlineImageSearch />
          Explore Movies
        </Link>

        <div className="dropdown dropdown-end md:hidden">
          <button
            tabIndex={0}
            className="btn btn-ghost text-white"
          >
            <MdMenu className="text-3xl" />
          </button>

          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 w-44 rounded-box bg-[#090914] p-2 shadow-lg"
          >
            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/movies">Movies</Link>
            </li>

            <li>
              <Link to="/movies">TV Shows</Link>
            </li>

            <li>
              <Link to="/movies">About</Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;

