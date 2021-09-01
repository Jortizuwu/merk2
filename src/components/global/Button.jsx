import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "../global/Spinner";
import { useSelector } from "react-redux";

export const Button = ({ title, type = "submit" }) => {
  const { loading } = useSelector((state) => state.auth);

  return (
    <button
      disabled={loading}
      className={`${
        loading ? "cursor-wait opacity-50" : ""
      } btn hover:shadow-lg bg-gradient-to-r flex flex-row items-center justify-center bg-red-500 uppercase font-bold text-white focus:ring-red-500 focus:ring-opacity-50`}
      type={type}
    >
      {loading && <Spinner />}
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};
