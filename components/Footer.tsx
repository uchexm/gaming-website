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
      <div
        id="container"
        className="container flex flex-col md:flex-row items-center"
      >
        <div id="logo" className="mb-4 md:mb-0">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-footer.png"
              alt="logo"
              width={45.751}
              height={34.858}
            />
            <h1 id="board" className="ml-4 text-xl font-bold">
              board
            </h1>
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
      <p id="copyright">© Copyright 2023, All Rights Reserved by board</p>
    </footer>
  );
};

export default Footer;
