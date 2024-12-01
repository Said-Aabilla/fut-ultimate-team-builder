import SubstituteList from "./SubstituteList";
import ReserveList from "./ReserveList";
const SowPlayersLists = () => (
  <div className="grid  grid-cols-[repeat(auto-fit,minmax(300px,1fr))]  border">
    <SubstituteList/>
    <ReserveList/>    
  </div>
);


export default SowPlayersLists;