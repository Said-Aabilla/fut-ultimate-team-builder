const PlayerCard = ({ player }) => {


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
    <div className="relative w-[8vw] h-[12vw] sm:w-24 sm:h-36 md:w-28 md:h-40 lg:w-32 lg:h-44">
      {/* Background Player Card */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-player-card bg-cover bg-center rounded-lg p-2 flex flex-col justify-between"
        style={{
          backgroundSize: "90%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Player Photo */}
        <div className="absolute left-8 bottom-15 w-[50%] h-[50%] bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${player.photo})` }}>
        </div>
        
        {/* Player rating */}
        <div className="absolute text-white top-6 left-4 text-[0.6rem] sm:text-xs md:text-sm" >
        <p className="text-[0.9rem] font-bold ">{player.rating}</p>
        </div>
      
        {/* Player name */}
        <div className="absolute bottom-[3.9vw] right-12 text-center text-white text-[0.6rem] sm:text-xs md:text-sm">
          <h3 className="  font-bold truncate text-[0.6rem]">{player.name}</h3>
        </div>

        {/* Player Stats */}
        <div className=" absolute bottom-8 left-3  grid grid-cols-6 text-white text-center bg-opacity-50 rounded-md text-[0.4rem] sm:text-[0.6rem] md:text-xs">
          {Object.entries(stats).map(([key, value]) => (
            <div key={key}>
              <p className="capitalize text-[0.5rem]">{key.substring(0, 3).toUpperCase()}</p>
              <p className="font-bold text-[0.5rem]">{value}</p>
            </div>
          ))}
        </div>
      </div>

     {/* Player flag and logo */}
      <div className="absolute bottom-[1.2vw] left-12 w-[14%] h-[6%] bg-cover bg-center" style={{ backgroundImage: `url(${player.flag})` }}>
        </div>
        <div className="absolute bottom-4 right-12 w-[9%] h-[9%] bg-cover bg-center rounded-lg" style={{ backgroundImage: `url(${player.logo})` }}>
        </div>
        
      <div 
        className="absolute bottom-[-1.3vw] left-1/2 transform -translate-x-1/2 w-[6vw] h-[2vw] sm:w-16 sm:h-6 bg-position bg-cover bg-center"
        style={{
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      >
        <span className="sm:text-sm text-white font-bold flex items-center justify-center">
          {player.position}
        </span>
      </div>

       
    </div>
  );
};

export default PlayerCard;
