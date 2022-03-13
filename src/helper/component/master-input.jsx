import React from "react";

const MasterInput = ({
  id,
  placeholder,
  value,
  name,
  type,
  disabled,
  onChange,
  className,
}) => {
  return (
    <input
      className={className}
      htmlFor={id}
      value={value}
      name={name}
      type={type || "text"}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default MasterInput;
