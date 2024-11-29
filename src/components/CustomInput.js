import { useState } from "react";

const CustomInput = ({ name, label, type, options, inputStyle, onChange, value }) => {
  
  const [inputValue, setInputValue] = useState(value || null)

  const handleChange = (event) => {
    console.log(event.target)
    setInputValue(event.target.value) ;
    if (onChange) onChange(event);
  };

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm font-medium mb-1">
        {label}
      </label>
      {type === "select" ? (
        <select id={name} name={name} className={inputStyle} onChange={handleChange}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          className={inputStyle}
          onChange={handleChange}
          value={inputValue}
        />
      )}
    </div>
  );
};

export default CustomInput;
