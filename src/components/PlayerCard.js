const PlayerCard = ({ label }) => {
    return (
      <div className="relative w-32 h-44"> {/* Set the card dimensions */}
        {/* Background for the player */}
        <div 
          className="absolute top-0 left-0 w-full h-full bg-player-card bg-cover bg-center rounded-lg" 
          style={{
            backgroundSize: "90%",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        
        {/* Background for the position */}
        <div 
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-8 bg-position bg-cover bg-center"
          style={{
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Text Label */}
          <span className="text-sm text-white font-bold flex items-center justify-center h-full">
            {label}
          </span>
        </div>
      </div>
    );
  }
  
  export default PlayerCard;
  