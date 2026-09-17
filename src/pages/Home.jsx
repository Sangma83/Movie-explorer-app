import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import heroImg from "../assets/hero.jpg"
import { AiOutlineRise } from "react-icons/ai";


const Home = () => {
  return (
    <>
    <Navbar/>
  {/* <div className="flex justify-center items-center">
    <img src={heroImg} alt="heroSection" />
  </div> */}
 <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      
    `url(${heroImg})`
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content mt-120">
    <div>
        <p className="uppercase bg-gradient-to-t from-violet-600 to-cyan-300 bg-clip-text text-transparent font-extrabold shadow-2xl">Welcome to Movie Explorer</p>
      <h1 className="text-6xl font-extrabold">Discover <br/> <span className="bg-gradient-to-b from-violet-900 to-cyan-500 bg-clip-text text-transparent shadow-black">Amazing Movies</span></h1>
      <p className="py-6 text-2xl">
        Explore and discover your favorite movies from around the world.Find new releases,trending hits and timeless classics - all in one place.
      </p>
      <button className="btn btn-primary rounded-2xl"><AiOutlineRise />Explore Now</button>
    </div>
  </div>
</div>
    <Footer/>
    </>
  )
}

export default Home