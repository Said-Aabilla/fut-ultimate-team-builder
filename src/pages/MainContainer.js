import AddPlayerForm from "../components/AddPlayerForm";
import SowPlayersLists from "../components/ShowPlayersLists";
import StadiumSection from "../components/StadiumSection";

const MainContainer = () => (
    <>
        <div className="mt-5 grid grid-cols-3 h-screen">
            <StadiumSection />
            <AddPlayerForm />
        </div>
        <SowPlayersLists />
    </>

);


export default MainContainer;