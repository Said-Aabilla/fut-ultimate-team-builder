import PlayerCard from "./PlayerCard";

const SowPlayersLists = () => (
  <div className="grid grid-cols-3 ">
    <div className="col-span-2 relative transform scale-90 bg-white text-center">
      <h2 className="text-xl font-bold mb-4">Reserve Players</h2>
      <div className="flex flex-wrap">
        {["LB", "CB", "CB", "RB"].map((label, index) => (
          <div
            key={label}
          >
            <PlayerCard label={label} />
          </div>
        ))}
      </div>


    </div>


    <div className="col-span-1 relative transform scale-90  bg-white text-center">
      <h2 className="text-xl font-bold mb-4">All Players</h2>
      <div className="flex flex-wrap">
        {["LB", "CB", "CB", "RB"].map((label, index) => (
          <div
            key={label}
          >
            <PlayerCard label={label} />
          </div>
        ))}
      </div>
    </div>
  </div>
);


export default SowPlayersLists;