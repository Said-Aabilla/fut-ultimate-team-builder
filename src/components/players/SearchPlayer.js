import { useState } from "react";
import CustomInput from "../ui/CustomInput";

const SearchPlayer = ({style}) => {

    console.log(style)
    const [searchPlayerData, setSearchPlayerData] = useState({
        name: "",
        position: "",
    });

    const positions = [
        { value: "GK", label: "Goalkeeper" },
        { value: "CM", label: "Midfielder" },
        { value: "CB", label: "Defender" },
        { value: "ST", label: "Striker" },
        { value: "LW", label: "Left Wing" },
        { value: "RW", label: "Right Wing" },
    ];

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setSearchPlayerData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }


    return (
        <div className={style}>

            <CustomInput
                name="name"
                placeholder="Name"
                type="text"
                inputStyle="w-[80%] text-black border border-gray-300 rounded p-2"
                onChange={handleInputChange}
                value={searchPlayerData.name}
                containerStyle="w-[90%]"
            />

            <CustomInput
                name="position"
                type="select"
                options={positions}
                inputStyle="w-[80%] text-black  border border-gray-300 rounded p-2"
                onChange={handleInputChange}
                value={searchPlayerData.position}
                containerStyle="w-[90%]"
            />

        </div>)

};


export default SearchPlayer;