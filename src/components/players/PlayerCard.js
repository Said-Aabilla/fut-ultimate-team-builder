const PlayerCard = ({ player, positionLabel }) => {




  // Check if player is not set
  if (!player) {
    return (
      <div className="relative w-[8vw] h-[12vw] sm:w-24 sm:h-36 md:w-28 md:h-40 lg:w-32 lg:h-44">
        {/* Empty Background Player Card */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-player-card bg-cover bg-center rounded-lg p-2"
          style={{
            backgroundSize: "90%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div
          className="absolute bottom-[-1.3vw] left-1/2 transform -translate-x-1/2 w-[6vw] h-[2vw] sm:w-16 sm:h-6 bg-position bg-cover bg-center"
          style={{
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <span className="sm:text-sm text-white font-bold flex items-center justify-center">
            {positionLabel}
          </span>
        </div>
      </div>


    );
  }

  const stats = player.position === "GK"
    ? {
      diving: player.diving,
      handling: player.handling,
      kicking: player.kicking,
      reflexes: player.reflexes,
      speed: player.speed,
      positioning: player.positioning,
    }
    : {
      pace: player.pace,
      shooting: player.shooting,
      passing: player.passing,
      dribbling: player.dribbling,
      defending: player.defending,
      physical: player.physical,
    };

  return (
<div className="relative sm:w-36 sm:h-52 md:w-44 md:h-64 lg:w-56 lg:h-80">
{/* Background Player Card */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-player-badge-gold bg-cover bg-center rounded-lg p-2 flex flex-col justify-between"
        style={{
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Player Photo */}
        <div className="absolute left-16 top-9 w-[45%] h-[45%] bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${player.photo})` }}>
        </div>

        {/* Player rating */}
        <div className="absolute text-white top-20 left-[2vw] text-[0.6rem] sm:text-xs md:text-sm" >
          <p className="text-[1.5rem] font-bold ">{player.rating}</p>
          <p className="text-[1.2rem] font-bold ">{player.position}</p>
        </div>
        {/* Player flag */}
        <div className="absolute top-32 left-[2vw] w-[14%] h-[6%] bg-cover bg-center" style={{ backgroundImage: `url(${player.flag})` }}>
          </div>

        {/* Player name */}
        <div className="absolute w-[74%] bottom-[7.8vw] left-7 text-center bg-white bg-opacity-70 text-black rounded-md  text-[0.6rem] sm:text-xs md:text-sm flex flex-wrap  justify-center">
        <h3 className="text-center  font-bold truncate text-[1.1rem]">{player.name}</h3>
        </div>

        {/* Player Stats */}
        <div className=" absolute w-[74%] bottom-[3.6vw] left-[1.8vw]  grid grid-cols-3 text-white text-center bg-black bg-opacity-50 rounded-md text-[0.4rem] sm:text-[0.6rem] md:text-xs">
          {Object.entries(stats).map(([key, value]) => (
            <div key={key}>
              <p className="capitalize text-[1rem]">{key.substring(0, 3).toUpperCase()}</p>
              <p className="font-bold text-[1rem]">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Player club logo */}
      <div className="absolute bottom-[1.3vw] right-[6.55vw] w-[9%] h-[9%] bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${player.logo})` }}>
      </div>
    </div>
  );
};

export default PlayerCard;
