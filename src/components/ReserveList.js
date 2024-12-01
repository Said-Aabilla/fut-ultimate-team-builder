import PlayerCard from "./PlayerCard";
import { dummyPlayersData } from "../utils/dummyData";
import SearchPlayer from "./SearchPlayer";
const ReserveList = () => (
    <div className="col-span-1 relative transform scale-90 bg-gray-900 text-center border rounded-lg h-[75vh] overflow-y-auto">
        <h2 className="text-xl text-white font-bold pt-5">Reserve Players</h2>
        <SearchPlayer style="flex flex-col gap-2 mt-3"/>

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
);


export default ReserveList;