import React, { forwardRef } from "react";

const CustomInput = forwardRef(({ name, label, placeholder,type, options, containerStyle ,inputStyle, onChange }, ref) => {
  return (
    <div className={containerStyle}>
      {label && <label htmlFor={name} className="block text-sm font-medium mb-1">{label}</label>}
      {type === "select" ? (
        <select id={name} name={name} className={inputStyle} onChange={onChange}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          type={type}
          name={name}
          placeholder={placeholder}
          ref={ref} // Forward the ref here
          className={inputStyle}
          onChange={onChange}
        />
      )}
    </div>
  );
});

export default CustomInput;
