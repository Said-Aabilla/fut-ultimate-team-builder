import AddPlayerForm from "../players/AddPlayerForm";
import CustomInput from "../ui/CustomInput";

const formations = [
  { value: "433", label: "4-3-3" },
  { value: "442", label: "4-4-2" },
];

const handleInputChange = ()=>{

}

const SideSection = () => {
  return (
    <div className="col-span-1 h-[95%] w-[95%] bg-gray-900 p-4 shadow-lg border rounded-lg transform">
      
      <div className="w-[95%] flex flex-row justify-center items-center">
       {/* Formation */}
       <label  className="text-md grow w-full font-bold text-center text-white" >Change Formation</label>
        <CustomInput
          name="position"
          type="select"
          options={formations}
          inputStyle="grow text-black w-full border border-gray-300 rounded p-2"
          onChange={handleInputChange}
          containerStyle="w-full"
        />      </div>
      
      <AddPlayerForm />
    </div>
  );
};

export default SideSection;