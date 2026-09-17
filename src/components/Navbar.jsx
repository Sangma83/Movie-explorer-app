import { BiCameraMovie } from "react-icons/bi";
import { MdOutlineImageSearch } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm justify-between flex">
  <div className="flex">
    <BiCameraMovie className="text-4xl"/>
    <a className="text-white border-2 border-blue-900 text-2xl">Movie<span className=" text-violet-900 font-extrabold">Explorer</span></a>
  </div>
  <div>
   <button className="btn btn-primary rounded-2xl btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"><MdOutlineImageSearch />Explore Movies</button>
  </div>
</div>
  )
}

export default Navbar