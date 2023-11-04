import "./Testimonials.css";
import Image from "next/image";

const Testimonials: React.FC = () => {
  return (
    <div className="relative">
      <div className="hidden md:hidden lg:flex sta4">
        <div className="" id="sta4">
          Spaning
        </div>
        <img alt="star" src="/images/Star.svg" />
        <div className="" id="sta4">
          Action - packed
        </div>
        <img alt="star" src="/images/Star.svg" />
        <div className="" id="sta4">
          Mind -Bending
        </div>
        <img alt="star" src="/images/Star.svg" />
        <div className="" id="sta4">
          Collect
        </div>
        <img alt="star" src="/images/Star.svg" />
      </div>

      <div className="side1 flex absolute top-0 left-0 -mt-39 z-10 hidden md:hidden lg:flex">
        <Image width={41} height={78} alt="image" src="/side.svg" />
        <Image width={41} height={78} alt="image" src="/side1.svg" />
      </div>
      <div className="side2 flex absolute right-0 -mb-39 z-10 hidden md:hidden lg:flex">
        <Image width={41} height={78} alt="image" src="/side.svg" />
        <Image width={41} height={78} alt="image" src="/side1.svg" />
      </div>
      <div className="hidden md:hidden lg:flex testimonials flex-col md:flex-row  relative">
        <div className="testimonial_1 md:w-1/2">
          <div className="stars">
            <img alt="stars" src="/st.svg" />
          </div>
          <p className="vibe">
            One of the standout features of this gaming website is its extensive
            library of game guides and tutorials. It has helped me level up my
            skills, conquer challenging quests, and discover hidden secrets
            within games. The guides are comprehensive, easy to follow, and have
            undoubtedly elevated my gaming performance.
          </p>
          <div className="horizontal-line"></div>

          <div className="profile">
            <div className="details flex items-center">
              <img
                src="/images/line.svg"
                alt="Alan McCoy"
                className="md:w-1/4"
              />
              <div className="info md:w-3/4">
                <h3>Alan McCoy</h3>
                <p>McDonald's</p>
              </div>
              <span>
                {" "}
                <img alt="stars" src="/veri.svg" /> Verified
              </span>
            </div>
          </div>
        </div>

        <div className="testimonial_2 md:w-1/2">
          <div className="stars">
            <img alt="stars" src="/st.svg" />
          </div>
          <p className="vibe">
            Another aspect that sets this website apart is its vibrant and
            passionate community. The forum section provides a platform for
            gamers from all walks of life to connect, share their experiences,
            and discuss their favorite titles. I've made valuable friendships
            and found like-minded individuals who share my enthusiasm for
            gaming.
          </p>
          <div className="horizontal-line"></div>
          <div className="profile">
            <div className="details flex items-center">
              <img
                src="/images/line1.svg"
                alt="Kathryn Murphy"
                className="md:w-1/4"
              />
              <div className="info md:w-3/4">
                <h3>Kathryn Murphy</h3>
                <p>General Electric</p>
              </div>
              <span>
                {" "}
                <img alt="stars" src="/veri.svg" /> Verified
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" hidden md:hidden lg:flex flex items-center justify-center">
        <img src="/41.svg" alt="Center Dots" className="dots" />
      </div>

      <div className="lg:hidden md:flex-col sm:flex-col items-center justify-center ">
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

        <div className="side3 flex">
          <Image width={41} height={78} alt="image" src="/side.svg" />
          <Image width={41} height={78} alt="image" src="/side1.svg" />
        </div>
        <div className="testimon relative">
          <div className="testimonial_1">
            <div className="stars">
              <img alt="stars" src="/st.svg" />
            </div>
            <p className="vibe">
              One of the standout features of this gaming website is its
              extensive library of game guides and tutorials. It has helped me
              level up my skills, conquer challenging quests, and discover
              hidden secrets within games. The guides are comprehensive, easy to
              follow, and have undoubtedly elevated my gaming performance.
            </p>
            <div className="horizontal-line"></div>

            <div className="profile">
              <div className="details flex items-center">
                <img
                  src="/images/line.svg"
                  alt="Alan McCoy"
                  className="md:w-1/4"
                />
                <div className="info md:w-3/4">
                  <h3>Alan McCoy</h3>
                  <p>McDonald's</p>
                </div>
                <span>
                  {" "}
                  <img alt="stars" src="/veri.svg" /> Verified
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <img src="/41.svg" alt="Center Dots" className="dots" />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
