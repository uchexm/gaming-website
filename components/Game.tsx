import Link from "next/link";
import Image from "next/image";

const Game: React.FC = () => {
  return (
    <div className="gameCarousel">
      <div className="line hidden md:hidden lg:flex">
        <div className="flex space-x-4 items-center">
          <div className="text-lg" id="sta1">
            Gaming spaning
          </div>
          <img alt="star" src="/images/Star.svg" />
          <div className="text-lg" id="sta1">
            Action - packed
          </div>
          <img alt="star" src="/images/Star.svg" />
          <div className="text-lg" id="sta1">
            Mind -Bending
          </div>

          <img alt="star" src="/images/Star.svg" />
          <div className="text-lg" id="sta1">
            Collection og game
          </div>
          <img alt="star" src="/images/Star.svg" />
        </div>
      </div>
      <div className="heading">
        <h1>
          Choose your <br />
          <span id="favorite">favorite</span> games
        </h1>
      </div>

      <div className="preview">
        <p>
          Offer sneak peeks and previews of upcoming games, including
          <br /> trailers, screenshots, and information about release.
        </p>
      </div>

      <div className="pictures w-full h-auto flex flex-wrap">
        <div id="im1" className="image-container1">
          <Link href="/">
            <Image
              width={690}
              height={485}
              src="/images/face.png"
              alt="face3"
              className="image im1"
            />
          </Link>
        </div>
        <div id="im2" className="image-container">
          <Link href="/">
            <Image
              width={690}
              height={485}
              src="/images/che.PNG"
              alt="wolf"
              className="image"
            />
          </Link>
        </div>
        <div id="im3" className="image-container1">
          <Link href="/">
            <Image
              width={690}
              height={485}
              src="/images/face2.png"
              alt="face"
              className="image im3"
            />
          </Link>
        </div>
      </div>
      <div className="game-buttons">
        <div className="mt-6">
          <button className="bt1 relative w-24 h-12 mr-4 bg-transparent">
            <span className="z-100">BUY NOW</span>
            <img
              alt="button"
              src="/play.svg"
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
      </div>
    </div>
  );
};

export default Game;
