const AddPlayerForm = () => (
    <div className="bg-gray-200 p-4 shadow-lg transform ">
      <h2 className="text-xl font-bold mb-4 text-center">Add a Player</h2>
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


export default AddPlayerForm;