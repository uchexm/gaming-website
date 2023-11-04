import "./GameGrid.css";
import Image from "next/image";

const GamesGrid: React.FC = () => {
  return (
    <div className="game-grid">
      <h2>
        Welcome to the <br />
        top <span id="games">games</span>
      </h2>
      <div className="options">
        <button>
          <img alt="button" src="/images/newest.svg" />
        </button>
        <button>
          {" "}
          <img alt="button" src="/images/latest.svg" />
        </button>
        <button>
          {" "}
          <img alt="button" src="/images/fight.svg" />
        </button>
        <button>
          {" "}
          <img alt="button" src="/images/sport.svg" />
        </button>
      </div>

      <div
        id="square"
        className="squareBox grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {[
          {
            title: "Core Philosophies",
            imgSrc: "/images/robot.png",
            profileImgSrc: "/images/cameron.svg",
            name: "Cameron Williamson",
            company: "Gillette",
          },
          {
            title: "Core Philosophies",
            imgSrc: "/images/robot-lady.png",
            profileImgSrc: "/images/diane.svg",
            name: "Dianne Russel",
            company: "Louis Vuitton",
          },
          {
            title: "Core Philosophies",
            imgSrc: "/images/batman.png",
            profileImgSrc: "/images/jane.svg",
            name: "Jane Cooper",
            company: "MasterCard",
          },
          {
            title: "Core Philosophies",
            imgSrc: "/images/purp-robot.png",
            profileImgSrc: "images/cody.svg",
            name: "Cody Fisher",
            company: "The Walt Disney Company",
          },
          {
            title: "Core Philosophies",
            imgSrc: "/images/us-fox.png",
            profileImgSrc: "images/wade.svg",
            name: "Wade Warren",
            company: "Louis Vuitton",
          },
          {
            title: "Core Philosophies",
            imgSrc: "/images/halloween.png",
            profileImgSrc: "images/rob.svg",
            name: "Robert Fox",
            company: "L'oreal",
          },
        ].map((card, index) => (
          <div id="box" key={index} className="squarebox__box">
            <div id="sq-box" className="squarebox__box__content">
              <img
                className="character"
                src={card.imgSrc}
                alt="character image"
              />
              <h3>{card.title}</h3>

              <div className="box__profile">
                <img
                  alt="profile pic"
                  className="profile__pic"
                  src={card.profileImgSrc}
                />
                <div className="profile__details">
                  <div className="profile__info">
                    <h4>{card.name}</h4>
                    <p>{card.company}</p>
                  </div>
                </div>
              </div>

              <button title="live" className="live-btn">
                <img alt="live button" src="images/live.svg" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GamesGrid;
