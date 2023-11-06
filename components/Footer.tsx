import "./Footer.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" footer text-white py-8">
      <div className="hidden md:hidden lg:flex sta5">
        <div className="" id="sta5">
          Aming Spaning
        </div>
        <img alt="star" src="/images/Star.svg" />
        <div className="" id="sta5">
          Action - packed
        </div>
        <img alt="star" src="/images/Star.svg" />
        <div className="" id="sta5">
          Mind -Bending
        </div>
        <img alt="star" src="/images/Star.svg" />
        <div className="" id="sta5">
          Collection og Ga
        </div>
      </div>
      <div className="lg:hidden md:hidden sm:flex">
        <div className="flex space-x-4 items-center">
          <img alt="star" src="/images/Star.svg" />
          <div className="text-lg" id="sta6">
            Action - packed
          </div>
          <img alt="star" src="/images/Star.svg" />
          <div className="text-lg" id="sta6">
            Mind -Bending
          </div>

          <img alt="star" src="/images/Star.svg" />
        </div>
      </div>
      <div
        id="container"
        className="container flex flex-col md:flex-row items-center"
      >
        <div id="logo" className="mb-4 md:mb-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/images/Group2.png"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>

          <p id="description" className="mt-2 text-sm">
            A well-designed gaming header often
            <br /> incorporates elements such as game <br />
            characters, iconic symbols, vibrant
            <br /> colors, and dynamic visuals .
          </p>
        </div>

        <div className="mb-4 md:mb-0 footer-div">
          <h2 className="text-lg font-semibold mb-2">Company</h2>

          <ul>
            <Link href="/">
              <li>Products</li>
            </Link>

            <Link href="/">
              <li>Apps & Games</li>
            </Link>
            <Link href="/">
              <li>Features</li>
            </Link>
          </ul>
        </div>
        <div className="mb-4 md:mb-0 footer-div">
          <h2 className="text-lg font-semibold mb-2">Help</h2>
          <ul>
            <Link href="/">
              <li>Support</li>
            </Link>

            <Link href="/">
              <li>about</li>
            </Link>
            <Link href="/">
              <li>Contact us</li>
            </Link>
          </ul>
        </div>

        <div className="footer-div">
          <h2 className="mr-30 text-lg font-semibold mb-2">Resources</h2>
          <ul>
            <Link href="/">
              <li>Youtube Playlist</li>
            </Link>

            <Link href="/">
              <li>how to - blog</li>
            </Link>
            <Link href="/">
              <li>terms & conditions</li>
            </Link>
          </ul>
        </div>
      </div>
      <div id="icn" className="flex flex-wrap justify-center">
        <div
          id="twitter"
          className="w-1/2 sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 sm:gap-10 md:gap-10 icn"
        >
          <img src="/images/twitch.svg" alt="Twitch Icon" />
        </div>

        <div className="w-1/2 sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 sm:gap-10 md:gap-10 icn">
          <img src="/images/roblox.svg" alt="Roblox Icon" />
        </div>

        <div className="w-1/2 sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 sm:gap-10 md:gap-10 icn">
          <img src="/images/asus.svg" alt="Asus Icon" />
        </div>

        <div className="w-1/2 sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 sm:gap-10 md:gap-10 icn">
          <img src="/images/canon.svg" alt="Canon Icon" />
        </div>

        <div className="w-1/2 sm:w-1/5 md:w-1/5 lg:w-1/5 xl:w-1/5 sm:gap-10 md:gap-10 icn">
          <img src="/images/microsoft.svg" alt="Microsoft Icon" />
        </div>
      </div>
      <div id="copyright" className="socials flex hidden sm:hidden md:flex">
        <a href="#" className="social-icon">
          <img alt="twitter" src="/images/twitter.svg" />
        </a>
        <a href="#" className="social-icon">
          <img alt="intagram" src="/images/instagram.svg" />
        </a>
        <a
          href="#"
          id="facebook"
          className="social-icon flex justify-center items-center"
        >
          <img
            alt="facebook"
            src="/images/facebook.svg"
            className="mx-auto my-auto"
          />
        </a>

        <a href="#" className="social-icon">
          <img alt="github" src="/images/github.svg" />
        </a>
        <p id="copy">© Copyright 2023, All Rights Reserved by board</p>
      </div>

      <div className="sm:hidden md:hidden flex justify-center my-4">
        <a href="#" className="social-icon">
          <img src="/images/twitter.svg" alt="Twitter Icon" />
        </a>
        <a href="#" className="social-icon">
          <img src="/images/instagram.svg" alt="Instagram Icon" />
        </a>
        <a href="#" id="facebook" className="social-icon">
          <img src="/images/facebook.svg" alt="Facebook Icon" />
        </a>
        <a href="#" className="social-icon">
          <img src="/images/github.svg" alt="GitHub Icon" />
        </a>
      </div>

      <div className="hidden sm:flex md:flex justify-center my-4"></div>

      <div className="w-full text-center my-4 lg:hidden">
        <p id="copy">© Copyright 2023, All Rights Reserved by board</p>
      </div>
    </footer>
  );
};

export default Footer;
