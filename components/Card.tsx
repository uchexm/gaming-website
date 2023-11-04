import "./Card.css";

const Card: React.FC = () => {
  return (
    <div className="card flex flex-col">
      <div className="action flex">
        <div className="rect">
          <img className="rectangle" src="images/tra.png" alt="rectangle" />
        </div>
        <div className="tx text md:w-2/3">
          <h2 id="discover" className="text-2xl font-semibold">
            Discover the
            <br />
            <span id="virtual" className="text-blue-600">
              virtual
            </span>{" "}
            reality <br />
            gaming
          </h2>
          <p id="fix" className="text-gray-600 mt-2">
            A well-designed gaming header often incorporates elements <br />
            such as game characters, iconic symbols, vibrant colors, and <br />
            dynamic visuals to convey excitement, adventure, and the <br />{" "}
            immersive nature of gaming.
          </p>
          <button className="bt1 relative w-24 h-12 bg-transparent">
            <span className="z-10">PLAY NOW</span>
            <img
              alt="button"
              src="/images/Rec2.svg"
              className="absolute inset-0 w-full h-full"
            />
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="hidden md:hidden lg:flex ">
          <div className="" id="sta3">
            paning
          </div>
          <img alt="star" src="/images/Star.svg" />
          <div className="" id="sta3">
            Action - packed
          </div>
          <img alt="star" src="/images/Star.svg" />
          <div className="" id="sta3">
            Mind -Bending
          </div>
          <img alt="star" src="/images/Star.svg" />
          <div className="" id="sta3">
            Collectio
          </div>
          <img alt="star" src="/images/Star.svg" />
        </div>
      </div>
      <div className="lg:hidden md:hidden sm:flex">
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
      </div>
    </div>
  );
};

export default Card;
