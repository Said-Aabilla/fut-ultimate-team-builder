import { useState } from "react";
import CustomInput from "./CustomInput";


const AddPlayerForm = () => {

  const [photoPreview, setPhotoPreview] = useState("");
  const [playerData, setPlayerData] = useState({
    name: "",
    photo: "",
    nationality: "",
    club: "",
    rating: "",
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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setPlayerData((prev) => ({ ...prev, [name]: value }));

    if (name === "photo" && event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setPhotoPreview(URL.createObjectURL(file));
    }
  };



  return (<div className="bg-gray-200 p-4 shadow-lg transform ">
    <h2 className="text-xl font-bold mb-4 text-center">Add a Player</h2>
    <form className="space-y-4">
      {/* Player Name */}
      <CustomInput
        name="name"
        label="Name"
        type="text"
        inputStyle="w-full border border-gray-300 rounded p-2"
        onChange={handleInputChange}
        value={playerData.name}
      />

      {/* Player Photo */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Photo</label>
        <input
          type="file"
          name="photo"
          accept="image/*"
          className="w-full border border-gray-300 rounded p-2"
          onChange={handleInputChange}
        />
        {photoPreview && (
          <div className="mt-4">
            <img
              src={photoPreview}
              alt="Preview"
              className="h-20 w-20 object-cover rounded border"
            />
          </div>
        )}
      </div>

      {/* Nationality */}
      <CustomInput
        name="nationality"
        label="Nationality"
        type="select"
        options={countries}
        inputStyle="w-full border border-gray-300 rounded p-2"
        onChange={handleInputChange}
      />

      {/* Club */}
      <CustomInput
        name="club"
        label="Club"
        type="select"
        options={clubs}
        inputStyle="w-full border border-gray-300 rounded p-2"
        onChange={handleInputChange}
      />

      {/* Rating */}
      <CustomInput
        name="rating"
        label="Rating"
        type="number"
        inputStyle="w-full border border-gray-300 rounded p-2"
        onChange={handleInputChange}
        value={playerData.rating}
      />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Add Player
      </button>
    </form>
  </div>
  );
}


export default AddPlayerForm;