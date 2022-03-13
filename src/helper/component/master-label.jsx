import React from "react";

const MasterLabel = ({ label, className, id }) => {
  return <label htmlFor={id} className={className}>{label}</label>;
};

export default MasterLabel;
