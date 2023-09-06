import React from "react";
import { FcBullish } from "react-icons/fc";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link className="flex w-full  flex-row mt-3 mr-3">
      <FcBullish size={24} />
      <span className=" ml-4 "> OpenShop</span>
    </Link>
  );
};

export default Logo;
