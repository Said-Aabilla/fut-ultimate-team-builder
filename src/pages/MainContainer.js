import SowPlayersLists from "../components/ShowPlayersLists";
import SideSection from "../components/SideSection";
import StadiumSection from "../components/StadiumSection";

const MainContainer = () => (
    <>
        <div className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] h-screen border">
            <StadiumSection />
            <SideSection />
        </div>

        <SowPlayersLists />
    </>

);


export default MainContainer;