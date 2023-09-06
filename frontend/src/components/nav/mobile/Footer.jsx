import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineShopping,
  AiOutlineHeart,
  AiOutlineWechat,
  AiOutlineBell,
} from "react-icons/ai";
import { CiHome } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="flex-1 w-fullh-full text-white">
      <div className="flex flex-row w-full h-full p-2 justify-between">
        <Link to="#">
          <AiOutlineHome size={20} />
        </Link>
        <Link to="#">
          <AiOutlineShopping size={20} />
        </Link>
        <Link to="#">
          <AiOutlineHeart size={20} />
        </Link>
        <Link to="#">
          <AiOutlineWechat size={20} />
        </Link>
        <Link to="#">
          <AiOutlineBell size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
