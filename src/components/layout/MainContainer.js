import SowPlayersLists from "./ShowPlayersLists";
import SideSection from "./SideSection";
import StadiumSection from "./StadiumSection";

const MainContainer = () => (
    <>
        <div className="mt-2 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] h-screen border">
            <StadiumSection />
            <SideSection />
        </div>

        <SowPlayersLists />
    </>

);


export default MainContainer;