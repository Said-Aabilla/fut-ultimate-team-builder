import { useState, useRef } from "react";
import CustomInput from "./CustomInput";

const AddPlayerForm = () => {
  const [photoPreview, setPhotoPreview] = useState("");
  const photoInputRef = useRef(null); // Ref for the hidden file input

  const [playerData, setPlayerData] = useState({
    name: "",
    photo: "",
    nationality: "",
    club: "",
    position: "",
    rating: "",
    stats: {},
  });

  const countries = [
    { value: "ar", label: "Argentina 🇦🇷" },
    { value: "pt", label: "Portugal 🇵🇹" },
    { value: "fr", label: "France 🇫🇷" },
  ];

  const clubs = [
    { value: "inter-miami", label: "Inter Miami ⚽" },
    { value: "real-madrid", label: "Real Madrid 🏟️" },
    { value: "psg", label: "Paris Saint-Germain 🗼" },
  ];

  const positions = [
    { value: "GK", label: "Goalkeeper" },
    { value: "FW", label: "Forward" },
    { value: "MF", label: "Midfielder" },
    { value: "DF", label: "Defender" },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPlayerData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "position" ? { stats: {} } : {}), // Reset stats when position changes
    }));

    if (name === "photo" && event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setPhotoPreview(URL.createObjectURL(file));
    }
  };

  const handlePlaceholderClick = () => {
    if (photoInputRef.current) {
      photoInputRef.current.click(); // Trigger the file input click
    }
  };

  const renderStatsInputs = () => {
    const stats =
      playerData.position === "GK"
        ? ["diving", "handling", "kicking", "reflexes", "speed", "positioning"]
        : ["pace", "shooting", "passing", "dribbling", "defending", "physical"];

    return stats.map((stat) => (
      <CustomInput
        key={stat}
        name={stat}
        label={stat.charAt(0).toUpperCase() + stat.slice(1)}
        type="number"
        inputStyle="w-full border border-gray-300 rounded p-2"
        onChange={(e) =>
          setPlayerData((prev) => ({
            ...prev,
            stats: { ...prev.stats, [stat]: e.target.value },
          }))
        }
        value={playerData.stats[stat] || ""}
      />
    ));
  };

  return (
    <div className="bg-gray-200 p-4 shadow-lg transform">
      <h2 className="text-xl font-bold mb-4 text-center">Add a Player</h2>
      <form className="space-y-4">
        {/* Player Photo and Upload */}
        <div className="flex gap-2 items-center">
          {/* Photo Upload Placeholder */}
          <div
            className="h-20 w-20 flex-shrink-0 rounded-full border bg-gray-300 flex items-center justify-center cursor-pointer"
            onClick={handlePlaceholderClick}
          >
            {photoPreview ? (
              <img
                src={photoPreview}
                alt="Preview"
                className="h-full w-full object-cover rounded-full"
              />
            ) : (
              <span className="text-gray-500 text-sm">Upload</span>
            )}
          </div>

          {/* Name Input */}
          <div className="flex-grow">
            <CustomInput
              name="name"
              label="Name"
              type="text"
              inputStyle="w-full border border-gray-300 rounded p-2"
              onChange={handleInputChange}
              value={playerData.name}
            />
          </div>

          {/* Hidden File Input */}
          <CustomInput
            type="file"
            name="photo"
            ref={photoInputRef} // Attach the ref here
            inputStyle="hidden" // Hide the input field
            onChange={handleInputChange}
          />
        </div>

       
         {/* Nationality and Rating */}
         <div className="flex gap-4">
          {/* Nationality */}
          <div className="flex-grow">
            <CustomInput
              name="nationality"
              label="Nationality"
              type="select"
              options={countries}
              inputStyle="w-full border border-gray-300 rounded p-2"
              onChange={handleInputChange}
            />
          </div>

          {/* Rating */}
          <div className="w-1/4">
            <CustomInput
              name="rating"
              label="Rating"
              type="number"
              inputStyle="w-full border border-gray-300 rounded p-2"
              onChange={handleInputChange}
              value={playerData.rating}
            />
          </div>
        </div>


        {/* Club */}
        <CustomInput
          name="club"
          label="Club"
          type="select"
          options={clubs}
          inputStyle="w-full border border-gray-300 rounded p-2"
          onChange={handleInputChange}
        />

        {/* Position */}
        <CustomInput
          name="position"
          label="Position"
          type="select"
          options={positions}
          inputStyle="w-full border border-gray-300 rounded p-2"
          onChange={handleInputChange}
        />

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4">{renderStatsInputs()}</div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Player
        </button>
      </form>
    </div>
  );
};

export default AddPlayerForm;
