import React from "react";
import MainButton from "./MainButton";

const Back = ({ name, onClick, link }) => {
  return (
    <div className="flex justify-center gap-5">
      <MainButton
        link={link || ""}
        onClick={onClick}
        name={name}
        className={`bg-white px-4 !text-Main hover:bg-opacity-75 ${
          name ? "" : "hidden"
        }`}
      />
      <MainButton
        className="py-2 px-5 bg-Secondary"
        name="تراجع"
        onClick={() => window.history.go(-1)}
      />
    </div>
  );
};

export default Back;
