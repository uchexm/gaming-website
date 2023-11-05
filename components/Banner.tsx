import "./Banner.css";

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row">
      {/* Left Side (Order 1 in medium and small screens) */}
      <div className="w-full md:w-1/2 order-1 md:order-1 p-8 left-div">
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

      {/* Right Side (Order 2 in medium and small screens) */}
      <div className="w-full md:w-1/2 order-2 md:order-2">
        <div className="flex md:absolute right-0 top-0">
          <img
            className="mix-blend-color-dodge w-full h-full"
            src="/images/artboard11.png"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
