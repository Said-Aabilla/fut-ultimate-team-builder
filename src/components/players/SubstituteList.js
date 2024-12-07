import PlayerCard from "./PlayerCard";
import { dummyPlayersData } from "../../utils/dummyData";
import SearchPlayer from "./SearchPlayer";
const SubstituteList = () => (
    <div className="col-span-2 relative transform scale-90  bg-gray-900 text-center border rounded-lg h-[75vh] w-[92%] overflow-x-auto">
      <h2 className="text-xl text-white font-bold pt-5">Substitute Players</h2>
      <SearchPlayer style="w-[95%] flex flex-row justify-center gap-2 text-white mt-3 ml-4"/>
      <div className="flex flex-wrap gap-1 scale-90">
      {dummyPlayersData.map((player, index) => (
          <div
            key={player.name}
          >
            <PlayerCard player={player} />
          </div>
        ))}
      </div>
    </div>
);


export default SubstituteList;