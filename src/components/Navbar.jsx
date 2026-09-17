import { FcClapperboard } from "react-icons/fc";
import { MdOutlineImageSearch } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar justify-between bg-[#090914] text-white px-5 py-3 shadow-sm absolute top-0 z-20 w-ful">
      
      <div className="flex items-center gap-2">
        <FcClapperboard className="text-4xl" />

        <a className="text-2xl font-extrabold">
          Movie<span className="text-blue-600">Explorer</span>
        </a>
      </div>

      <div>
        <button className="btn btn-primary rounded-2xl btn-sm">
          <MdOutlineImageSearch />
          Explore Movies
        </button>
      </div>

    </div>
  );
};

export default Navbar;