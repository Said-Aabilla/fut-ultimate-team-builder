import React from "react";
import Navbar from "./components/NavBar";
import MainContainer from "./pages/MainContainer";

const App = () => (
  <div className="bg-real-stadium bg-cover bg-center h-full w-full">
    <Navbar />
    <MainContainer />
  </div>
);

export default App;
