import SubstituteList from "./SubstituteList";
import ReserveList from "./ReserveList";
const SowPlayersLists = () => (
  <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))]  border">
    <SubstituteList/>
    <ReserveList/>    
  </div>
);


export default SowPlayersLists;