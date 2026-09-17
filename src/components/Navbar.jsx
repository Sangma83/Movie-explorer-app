import { useState } from "react";
import { FcClapperboard } from "react-icons/fc";
import { MdOutlineImageSearch } from "react-icons/md";

const Navbar = () => {
    const [click, setClick] = useState(false);
    console.log(click);
  return (
    <div className="navbar shadow-sm justify-between flex fixed bg-gradient-to-t from-transparent to-violet-950/90">
  <div className="flex">
    <FcClapperboard className="text-3xl"/>
    <a className="font-['Apple Color Emoji'] text-white text-2xl font-extrabold">Movie<span className=" text-blue-600">Explorer</span></a>
  </div>
  {setClick ?  <div>
   <button className="btn btn-primary rounded-2xl btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"><MdOutlineImageSearch />Explore Movies</button>
  </div> : false}
</div>
  )
}

export default Navbar