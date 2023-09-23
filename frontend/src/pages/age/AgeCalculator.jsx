import React, { useState } from "react";
import AgeResult from "./AgeResult";
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from "date-fns";

const AgeCalculator = () => {
  // birthDate: c'est la date entrée dans l'input par l'utilisateur
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);

  const calculateAge = (birthDate) => {
    const today = new Date();
    // ici onpasse à "birthDateObj" la date entrée dans l'input par l'utilisateur. donc "birthDateObj" = birthDate
    const birthDateObj = new Date(birthDate);
    const ageYears = differenceInYears(today, birthDateObj);
    const ageMonths = differenceInMonths(today, birthDateObj) % 12;
    const ageDays = differenceInDays(
      today,
      new Date(today.getFullYear(), today.getMonth(), birthDateObj.getDate())
    );

    setAge({
      years: ageYears,
      months: ageMonths,
      days: ageDays,
    });
  };

  const handleChangeDate = (e) => {
    setBirthDate(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateAge(birthDate);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4"
      >
        <input
          value={birthDate}
          type="date"
          onChange={handleChangeDate}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
        <button
          type="submit"
          disabled={!birthDate}
          className="disabled:bg-slate-400 disabled:cursor-not-allowed text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          calculate age
        </button>
      </form>
      {age && <AgeResult age={age} />}
    </div>
  );
};

export default AgeCalculator;
