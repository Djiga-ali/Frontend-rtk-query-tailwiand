import React from "react";

const Toastmodal = ({ isVisible, close, children }) => {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === "wrapper") close();
  };
  return (
    <>
      {/* <div
        onClick={handleClose}
        className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
        id="wrapper"
      > */}
      <div
        onClick={handleClose}
        // NB: Sans mais avec ralative et absolute fixed position ***********
        className="relative z-0  inset-0   flex justify-end items-start" // toast en haut à droit (coin haut droi)
        // className="relative z-0  inset-0   flex justify-end items-start" // toast en haut à droit (coin haut droi)
        // className="relative z-0   flex justify-evenly items-stretch" // toast au milieu en haut
        // className="relative z-0 inset-0 flex justify-center items-end" // toast en bas et centre
        // NB: avec fixed position ***********
        // className="fixed inset-0  flex justify-end items-start" // toast en haut à droit (coin haut droi)

        // className="fixed inset-0  flex justify-evenly items-end" // toast au milieu en bas
        // className="fixed inset-0  flex justify-evenly items-stretch" // toast au milieu en haut
        // className="fixed inset-0  flex justify-start items-end" // toast en bas à gauche (coin gauche)
        // className="fixed inset-0  flex justify-start items-center" // toast au milieu à gauche
        // className="fixed inset-0  flex justify-start items-start" // toast en haut à gauche (coin gauche)
        // className="fixed inset-0  flex justify-end items-end" // toast en bas à droit (coin droit)
        // className="fixed inset-0  flex justify-center items-end" // toast en bas et centre
        // className="fixed inset-0  flex justify-center items-center" //  toast au centre de l'ecran
        // className="fixed inset-0  flex justify-center items-center" //  toast au centre
        id="wrapper"
      >
        <div className="absolute z-50 w-auto flex flex-col">
          {/* <button onClick={close} className="text-black text-xl place-self-end">
            X
          </button> */}
          <div className="   rounded-xl">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Toastmodal;
