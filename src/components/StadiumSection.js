import PlayerCard from "./PlayerCard.js";



const StadiumSection = () => (
  <div className="col-span-2 relative transform scale-90">
    <div
      className="bg-team-stadium bg-no-repeat bg-center absolute inset-0 grid grid-rows-6 grid-cols-5 gap-2"
      style={{ backgroundSize: "100%" }} // Adjust percentage to control the size
    >
      {/* Goalkeeper */}
      <div className="row-start-1 col-start-3 flex justify-center items-center">
        <PlayerCard label="GK" />
      </div>

      {/* Defenders */}
      {["LB", "CB", "CB", "RB"].map((label, index) => (
        <div
          key={label}
          className={`row-start-2 col-start-${index + 1} flex justify-center items-center`}
        >
          <PlayerCard label={label} />
        </div>
      ))}

      {/* Midfielders */}
      {["CM", "CM", "CM"].map((label, index) => (
        <div
          key={label}
          className={`row-start-4 col-start-${index + 2} flex justify-center items-center`}
        >
          <PlayerCard label={label} />
        </div>
      ))}

      {/* Forwards */}
      {["LW", "ST", "RW"].map((label, index) => (
        <div
          key={label}
          className={`row-start-6 col-start-${index * 2 + 1} flex justify-center items-center`}
        >
          <PlayerCard label={label} />
        </div>
      ))}
    </div>
  </div>
);



export default StadiumSection;