import PlayerCard from "./PlayerCard.js";


const StadiumSection = () => (
    <div className="col-span-2 relative transform scale-90 border">
        <div
            className="bg-team-stadium bg-no-repeat bg-center absolute inset-0 grid grid-rows-8 grid-cols-12 gap-5"
            style={{ backgroundSize: "100%" }} // Adjust percentage to control the size
        >
            {/* Goalkeeper */}
            <div className="row-start-7 col-start-6 ml-4 ">
                <PlayerCard  positionLabel="GK"/>
            </div>

            {/* Defenders */}
            <div className="row-start-5 col-start-3 flex gap-14">
                {["LB", "CB", "CB", "RB"].map((positionLabel, index) => (
                    <div
                        key={positionLabel}
                    >
                        <PlayerCard positionLabel={positionLabel} />
                    </div>
                ))}
            </div>


            {/* Midfielders */}
            <div className="row-start-3 col-start-4 flex gap-16">
                {["CM", "CM", "CM"].map((positionLabel, index) => (
                    <div
                        key={positionLabel}
                    >
                        <PlayerCard positionLabel={positionLabel} />
                    </div>
                ))}
            </div>

            {/* Forwards */}
            <div className="row-start-1 col-end-5 flex gap-5 ml-8">

                {["LW", "ST", "RW"].map((positionLabel, index) => (
                    <div
                        key={positionLabel}
                    >
                        <PlayerCard positionLabel={positionLabel} />
                    </div>
                ))}
            </div>
        </div>
    </div>
);



export default StadiumSection;