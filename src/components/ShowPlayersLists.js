import PlayerCard from "./PlayerCard";
import { dummyPlayersData } from "../utils/dummyData";
const SowPlayersLists = () => (
  <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]  border">
    <div className="col-span-2 relative transform scale-90 bg-gray-900 text-center border">
      <h2 className="text-xl text-white font-bold pt-5">Reserve Players</h2>
      <div className="flex flex-wrap  gap-4 scale-90">
        {dummyPlayersData.map((player, index) => (

          <div
            key={player.name}
          >
            <PlayerCard player={player} />
          </div>
        ))}
      </div>


    </div>


    <div className="col-span-1 relative transform scale-90  bg-gray-900 text-center border">
      <h2 className="text-xl text-white font-bold pt-5">All Players</h2>
      <div className="flex flex-wrap gap-4 scale-90">
      {dummyPlayersData.map((player, index) => (
          <div
            key={player.name}
          >
            <PlayerCard player={player} />
          </div>
        ))}
      </div>
    </div>
  </div>
);


export default SowPlayersLists;