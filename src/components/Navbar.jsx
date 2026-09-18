import { FcClapperboard } from "react-icons/fc";
import { MdOutlineImageSearch } from "react-icons/md";
import { Link } from "react-router";

const Navbar = () => {

  return (
    <div className="max-w-[1800px] mx-auto navbar justify-between bg-[#090914] text-white px-5 py-3 shadow-sm absolute top-0 z-20 w-ful"> 
      <div className="flex items-center gap-2">
        <FcClapperboard className="text-4xl" />
        <a className="text-2xl font-extrabold">
          Movie<span className="text-blue-600">Explorer</span>
        </a>
      </div>
      <div className="flex items-center gap-5">
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
      <div>
        <Link to="/movies" className="btn btn-primary rounded-2xl btn-md">
          <MdOutlineImageSearch />
          Explore Movies
        </Link>
      </div>
    </div>
  );
};

export default Navbar;