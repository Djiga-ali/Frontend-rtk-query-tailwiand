import React from "react";

const Sidebar = ({ openMenu }) => {
  return (
    <div className={openMenu ? "text-blue h-full bg-blue-400" : "hidden"}>
      <p className="">Bonjour</p>
    </div>
  );
};

export default Sidebar;
