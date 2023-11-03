import Image from "next/image";
import { Button } from "./ui/button";

const Hero: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2 p-4 md:pl-24 pl-8">
        <h1 id="header" className="text-3xl font-bold">
          LET YOUR <br /> MIND <span id="explore">EXPLORE</span>
          <br /> NEW WORLD
        </h1>
        <p className="p1 text-gray-600 mt-4">
          Playing electronic games, whether through consoles, computers, mobile
          phones, or another medium altogether. Gaming is a nuanced term that
          suggests regular gameplay, possibly as a hobby.
        </p>
        <div className="mt-6 hidden md:flex">
          <button className="bt1 relative w-24 h-12 mr-4 bg-transparent">
            <span className="z-100">BUY NOW</span>
            <img
              alt="button"
              src="/images/Rec1.svg"
              className="absolute inset-0 w-full h-full"
            />
          </button>
          <button className="bt1 relative w-24 h-12 bg-transparent">
            <span className="z-10">PLAY NOW</span>
            <img
              alt="button"
              src="/images/Rec2.svg"
              className="absolute inset-0 w-full h-full"
            />
          </button>
        </div>
        <div className="stats hidden md:flex">
          <div className="hidden md:block">
            <em>300+ look</em>
            <p>Unique Style</p>
          </div>
          <div className="hidden md:block">
            <em>200+</em>
            <p>Projects Finished</p>
          </div>
          <div className="hidden md:block">
            <em>500+</em>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 p-4 md:pl-24 pl-8">
        <img alt="lady" src="/images/img2.png" className="w-full imgg1" />
      </div>
      <div className="line lg:hidden md:hidden sm:flex">
        <div className="flex space-x-4 items-center">
          <img alt="star" src="/images/Star.svg" />
          <div className="text-lg" id="sta2">
            Action - packed
          </div>
          <img alt="star" src="/images/Star.svg" />
          <div className="text-lg" id="sta2">
            Mind -Bending
          </div>

          <img alt="star" src="/images/Star.svg" />
        </div>
        <div className="mt-6 sm:inline md:hidden lg:hidden">
          <button className="bt1 relative w-24 h-12 mr-4 bg-transparent">
            <span className="z-100 sm:inline md:hidden lg:hidden">BUY NOW</span>
            <img
              alt="button"
              src="/images/Rec1.svg"
              className="absolute inset-0 w-full h-full"
            />
          </button>
          <button className="bt1 relative w-24 h-12 bg-transparent">
            <span className="z-10 sm:inline md:hidden lg:hidden">
              PLAY NOW now
            </span>
            <img
              alt="button"
              src="/images/Rec2.svg"
              className="absolute inset-0 w-full h-full"
            />
          </button>
        </div>
        <div className="stats sm:inline md:hidden lg:hidden">
          <div className="sm:inline md:hidden lg:hidden">
            <em>300+</em>
            <p>Unique Style</p>
          </div>
          <div className="sm:inline md:hidden lg:hidden">
            <em>200+</em>
            <p>Projects Finished</p>
          </div>
          <div className="sm:inline md:hidden lg:hidden">
            <em>500+</em>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
