// import Footer from "../components/Footer"
// import Navbar from "../components/Navbar"
import heroImg from "../assets/hero2.png"
import { AiOutlineRise } from "react-icons/ai";
import { Link } from "react-router";


const Home = () => {
  return (
    <>   
 <section
  className="hero min-h-screen"
  style={{
    backgroundImage:
      
    `url(${heroImg})`
  }}
>
  <div className="hero max-w-[1800px] mx-auto absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
<div className="hero-content text-neutral-content text-left justify-start items-end w-full px-5 sm:px-8 md:px-12 lg:px-20 py-16 sm:py-20 md:py-24">
  <div className="w-full max-w-2xl">
    <p className="uppercase bg-gradient-to-b from-violet-500 to-cyan-300 bg-clip-text text-transparent font-extrabold mb-3 sm:mb-5 text-sm sm:text-base md:text-lg">
      Welcome to Movie Explorer
    </p>

    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
      Discover <br />
      <span className="bg-gradient-to-b from-violet-900 to-cyan-500 bg-clip-text text-transparent">
        Amazing Movies
      </span>
    </h1>

    <p className="py-4 sm:py-5 md:py-6 text-base sm:text-lg md:text-xl lg:text-2xl mt-2 sm:mt-4">
      Explore and discover your favorite movies from around the world. Find
      new releases, trending hits and timeless classics - all in one place.
    </p>

    <Link to="/movies" className="btn btn-primary mt-7">
      <AiOutlineRise />
      Explore Now
    </Link>
  </div>
</div>
</section>
    </>
  )
}

export default Home