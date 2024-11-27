import React from "react";

const Navbar = () => (
  <nav className="bg-gray-600 text-white px-4 py-2 flex items-center justify-between mb-4">
    {/* Logo */}
    <div className="text-lg font-bold">FUT Team</div>
    
    {/* Search Bar */}
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="p-2 rounded bg-white text-black border border-gray-300"
      />
    </div>

    {/* Menu */}
    <div className="relative">
      <button className="ml-4 px-3 py-2 bg-blue-800 rounded">Menu</button>
      <div className="hidden absolute top-12 right-0 bg-white text-black shadow-lg rounded">
        <ul className="space-y-2 p-4">
          {["Home", "Teams", "Settings"].map((item) => (
            <li key={item}>
              <a href="#" className="block hover:bg-gray-200 p-2 rounded">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

const PlayerCard = ({ label }) => (
  <div className="bg-blue-500 text-white text-center rounded-lg p-2 w-16 h-20">
    {label}
  </div>
);

const StadiumSection = () => (
  <div className="col-span-2 relative ">
    <div className="bg-team-stadium bg-cover bg-center absolute inset-0 grid grid-rows-6 grid-cols-5 gap-2">
      {/* Goalkeeper */}
      <div className="row-start-1 col-start-3 flex justify-center items-center">
        <PlayerCard label="GK" />
      </div>

      {/* Defenders */}
      {["LB", "CB", "CB", "RB"].map((label, index) => (
        <div
          key={label}
          className={`row-start-2 col-start-${index+1} flex justify-center items-center`}
        >
          <PlayerCard label={label} />
        </div>
      ))}

      {/* Midfielders */}
      {["CM", "CM", "CM"].map((label, index) => (
        <div
          key={label}
          className={`row-start-4 col-start-${index + 2} flex justify-center items-center`}
        >
          <PlayerCard label={label} />
        </div>
      ))}

      {/* Forwards */}
      {["LW", "ST", "RW"].map((label, index) => (
        <div
          key={label}
          className={`row-start-6 col-start-${index * 2 + 1} flex justify-center items-center`}
        >
          <PlayerCard label={label} />
        </div>
      ))}
    </div>
  </div>
);

const AddPlayerForm = () => (
  <div className="col-span-1 bg-white p-4 shadow-lg">
    <h2 className="text-xl font-bold mb-4">Add a Player</h2>
    <form className="space-y-4">
      {[
        { id: "name", label: "Name", type: "text" },
        {
          id: "position",
          label: "Position",
          type: "select",
          options: ["GK", "CB", "LB", "RB", "CM", "LW", "RW", "ST"],
        },
        { id: "rating", label: "Rating", type: "number" },
      ].map(({ id, label, type, options }) => (
        <div key={id}>
          <label htmlFor={id} className="block text-sm font-medium">
            {label}
          </label>
          {type === "select" ? (
            <select id={id} className="w-full border border-gray-300 rounded p-2">
              {options.map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          ) : (
            <input
              id={id}
              type={type}
              className="w-full border border-gray-300 rounded p-2"
            />
          )}
        </div>
      ))}

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Player
      </button>
    </form>
  </div>
);

const App = () => (
  <div className="bg-real-stadium bg-cover bg-center h-screen w-full">
    <Navbar />
    <div className="mt-5 grid grid-cols-3 h-full">
      <StadiumSection />
      <AddPlayerForm />
    </div>
  </div>
);

export default App;
