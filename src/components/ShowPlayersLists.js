import PlayerCard from "./PlayerCard";

const SowPlayersLists = () => (
  <div className="grid grid-cols-3 border">
    <div className="col-span-2 relative transform scale-90 bg-gray-900 text-center border">
      <h2 className="text-xl text-white font-bold pt-5">Reserve Players</h2>
      <div className="flex flex-wrap  gap-4 scale-75">
        {["LB", "CB", "CB", "RB"].map((label, index) => (
          <div
            key={label}
          >
            <PlayerCard label={label} />
          </div>
        ))}
      </div>


    </div>


    <div className="col-span-1 relative transform scale-90  bg-gray-900 text-center border">
      <h2 className="text-xl text-white font-bold pt-5">All Players</h2>
      <div className="flex flex-wrap gap-4 scale-75">
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