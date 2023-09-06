import React from "react";

import { CountryData, franceUkData } from "../../config/Country";
import { Link } from "react-router-dom";

const Countries = () => {
  return (
    <div className="flex-1  w-full  border-b border-gray-200 pl-2 pr-4 xxs:pl-0 xxs:pr-0 xs:pl-0 xs:pr-0 xxs:ml-1 xs:ml-2">
      <div className="flex flex-row w-full ">
        <>
          {CountryData.map((country) => (
            <Link
              to={country.path}
              className="flex-1  gap-2 "
              key={country.name}
            >
              <img
                src={country.flag}
                alt={country.name}
                className=" flex-1 w-6 mt-1  h-5   object-cover xs:object-fill xxs:w-4 xxs:h-4 xs:w-4 xs:h-4"
              />
            </Link>
          ))}
          {franceUkData.map((lang) => (
            <Link to={lang.path} className="flex-1   " key={lang.name}>
              <img
                src={lang.flag}
                alt={lang.name}
                className=" flex-1 w-6 mt-1  h-5   object-cover xs:object-fill xxs:w-4 xxs:h-4 xs:w-4 xs:h-4"
              />
            </Link>
          ))}
        </>
      </div>
    </div>
  );
};

export default Countries;
