import React from "react";

const BreakPoints = () => {
  return (
    <>
      {/* <div className="xxs:flex xs:hidden sm:hidden md:hidden">
        <p className="text-3xl font-bold">XXS</p>
      </div>
      <div className="xxs:hidden xs:flex sm:hidden md:hidden">
        <p className="text-3xl font-bold">XS</p>
      </div>
      <div className="xxs:hidden xs:hidden sm:flex md:hidden">
        <p className="text-3xl font-bold">SM</p>
      </div>
      <div className="xxs:hidden xs:hidden sm:hidden md:flex">
        <p className="text-3xl font-bold">MD</p>
      </div>*/}

      {/* INLINE-BLOCK */}
      {/* <div className="inline">
        <h1 className="text-3xl font-bold">INLINE</h1>
        <div className="w-[200px] h-[80px] bg-blue-500 mt-3"></div>
        <div className="w-[200px] h-[80px] bg-blue-500 mt-3"></div>
        <div className="w-[200px] h-[80px] bg-blue-500 mt-3"></div>
      </div>
      <div className="block">
        <h1 className="text-3xl font-bold">BLOCK</h1>
        <div className="w-[200px] h-[80px] bg-blue-500 m-3"></div>
        <div className="w-[200px] h-[80px] bg-blue-500 m-3"></div>
        <div className="w-[200px] h-[80px] bg-blue-500 m-3"></div>
      </div>  */}
      <div>
        <div className="flex flex-row px-2 xxs:flex-col xs:flex-col sm:flex-col">
          <div className="w-full flex flex-row xxs:flex-col xs:flex-col ">
            {/* <div className="w-[80%] flex flex-row"> */}
            <div className="w-[55%] mr-2 xxsm:m-2 xsm:m-2  h-[80px]  bg-blue-500 ">
              OK
            </div>
            <div className="w-[45%] mr-2 xxs:m-2 xsm:m-2   h-[80px] bg-red-500 ">
              OK
            </div>
          </div>
          <div className="w-[20%] xxsm:m-2 xsm:m-2  h-[80px] bg-green-500 ">
            OK
          </div>
        </div>
      </div>
    </>
  );
};

export default BreakPoints;
