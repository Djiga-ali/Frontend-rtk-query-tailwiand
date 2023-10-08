import React, { useState } from "react";
import Modal from "./Modal";

const ShowModal = () => {
  //   const [isVisible, setIsVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);

  return (
    <>
      <div className="p-10 text-center ">
        <h1 className="text-3xl mb-5">Custom Modal</h1>

        <button
          onClick={() => setOpenModal(true)}
          className="text-white bg-blue-800 hover:bg-blue-400 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5"
        >
          text modal
        </button>
        <button
          onClick={() => setOpenModal2(true)}
          className="text-white bg-blue-800 hover:bg-blue-400 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5"
        >
          Video modal
        </button>
        <button
          onClick={() => setOpenModal3(true)}
          className="text-white bg-blue-800 hover:bg-blue-400 focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5"
        >
          Form modal
        </button>
      </div>
      <Modal isVisible={openModal} close={() => setOpenModal(false)}>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-5">
            Modal title
          </h3>
          <p className="mb-5 font-normal text-gray-500">
            Celebrari constantia Antiochensis urgenti elogio intempestivam
            gravius tunc vilitatem occidi iussit ni ordinis uno constantia ei et
            rationabili rationabili vertices occidi ideo tunc comes ideo
            rationabili intempestivam inopia uno ad sub ni restitisset et ad
            ordinis uno intempestivam quod inopia sub urgenti cum efferatus cum
            rationabili restitisset uno intempestivam ei ideo rationabili quod
            et et celebrari iussit iussit ni ordinis unum vilitatem unum comes
            gravius gravius rationabili Honoratus intempestivam gravius ei
            inpenderet quod celebrari restitisset rationabili efferatus
            rationabili uno vilitatem et tunc Antiochensis cum ad ordinis
            perissent comes iussit et responderunt quod rationabili cum comes
            cum inpenderet uno restitisset quod.
          </p>

          <p className="mb-5 font-normal text-gray-500">
            Celebrari constantia Antiochensis urgenti elogio intempestivam
            gravius tunc vilitatem occidi iussit ni ordinis uno constantia ei et
            rationabili rationabili vertices occidi ideo tunc comes ideo
            rationabili intempestivam inopia uno ad sub ni restitisset et ad
            ordinis uno intempestivam quod inopia sub urgenti cum efferatus cum
            rationabili restitisset uno intempestivam ei ideo rationabili quod
            et et celebrari iussit iussit ni ordinis unum vilitatem unum comes
            gravius gravius rationabili Honoratus intempestivam gravius ei
            inpenderet quod celebrari restitisset rationabili efferatus
            rationabili uno vilitatem et tunc Antiochensis cum ad ordinis
            perissent comes iussit et responderunt quod rationabili cum comes
            cum inpenderet uno restitisset quod.
          </p>
        </div>
      </Modal>
      <Modal isVisible={openModal2} close={() => setOpenModal2(false)}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/nwJK-jo91vA?si=_C1-qw6L-e1qovUr"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </Modal>
      <Modal isVisible={openModal3} close={() => setOpenModal3(false)}>
        <section className="bg-gray-50 dark:bg-gray-900">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a
              href="#"
              className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
            >
              <img
                className="w-8 h-8 mr-2"
                src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                alt="logo"
              />
              Flowbite
            </a>
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                  Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      for="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="name@company.com"
                      required=""
                    />
                  </div>
                  <div>
                    <label
                      for="password"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required=""
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          for="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <a
                      href="#"
                      className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Sign in
                  </button>
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    Don’t have an account yet?{" "}
                    <a
                      href="#"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Sign up
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Modal>
    </>
  );
};

export default ShowModal;
