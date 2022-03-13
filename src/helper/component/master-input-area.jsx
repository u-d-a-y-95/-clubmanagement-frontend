import React from "react";

const MasterInputArea = ({
  id,
  placeholder,
  value,
  name,
  disabled,
  onChange,
  className,
  rows
}) => {
  return (
    <textarea
      className={className}
      htmlFor={id}
      value={value}
      name={name}
      disabled={disabled}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows||1}
    />
  );
};

export default MasterInputArea;
