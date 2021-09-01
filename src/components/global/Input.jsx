import React from "react";
import PropTypes from "prop-types";

export const Input = ({
  name,
  handleInputChange,
  title,
  icon,
  type = "text",
}) => {
  return (
    <div className="flex flex-col space-y-1">
      <label className="ml-2 text-sm text-gray-500">{title}</label>
      <div className="flex p-2 input items-center border-b rounded-ms border-gray-500 ">
        <span className="material-icons mr-2 text-gray-400">{icon}</span>
        <input
          className="input"
          name={name}
          onChange={handleInputChange}
          type={type}
          placeholder={title}
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
