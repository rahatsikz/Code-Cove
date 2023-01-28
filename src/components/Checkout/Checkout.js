import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const Checkout = () => {
  const checkoutData = useLoaderData();
  const { name, image, price } = checkoutData;
  const navigate = useNavigate();

  const handleRedirect = () => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  };
  return (
    <div className="container w-1/2 m-auto">
      <p className="text-2xl my-8 text-center font-bold">Order summary:</p>
      <div className=" ">
        <div className="flex flex-col overflow-hidden bg-white dark:bg-gray-900 dark:shadow-black rounded-xl shadow-md text-slate-500 shadow-slate-200 sm:flex-row w-5/6 mx-auto">
          {/*  <!-- Image --> */}
          <figure className="flex-1">
            <img
              src={image}
              alt="card"
              className="object-cover min-h-full aspect-auto"
            />
          </figure>
          {/*  <!-- Body--> */}
          <div className="flex-1 p-6 sm:mx-6 sm:px-0">
            <header className="flex gap-4 mb-4">
              <div>
                <h3 className="text-xl font-medium dark:text-white text-slate-700">
                  Course name:{" "}
                  <span className="text-sky-400 pl-2"> {name} </span>
                </h3>
              </div>
            </header>
            <h4 className="text-lg font-medium dark:text-white text-slate-700">
              Price: <span className="text-sky-400 pl-2"> {price} </span>
            </h4>
            <div className="mt-8">
              <label
                onClick={handleRedirect}
                htmlFor="my-modal-4"
                className="inline-flex h-10 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-sky-500 px-5 text-sm font-medium tracking-wide text-white shadow-md dark:shadow-black shadow-sky-200 transition duration-300 hover:bg-sky-600 hover:shadow-sm hover:shadow-sky-200 focus:bg-sky-700 focus:shadow-sm focus:shadow-sky-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-sky-300 disabled:bg-sky-300 disabled:shadow-none"
              >
                <span>Checkout</span>
              </label>
              <input type="checkbox" id="my-modal-4" className="modal-toggle" />
              <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label
                  className="modal-box dark:bg-gray-900 dark:text-white relative text-center"
                  htmlFor=""
                >
                  <h3 className="text-lg font-bold">
                    Thanks for buying this course
                  </h3>
                  <div className="flex items-center flex-col">
                    <p className="py-4">Now we will redirect you to homepage</p>
                    <span className="relative only:-mx-5">
                      <svg
                        className="h-5 w-5 animate-spin text-sky-500 group-hover:text-sky-600 group-focus:text-sky-700"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        role="graphics-symbol"
                        aria-labelledby="title-56 desc-56"
                      >
                        <title id="title-56">Icon title</title>
                        <desc id="desc-56">
                          A more detailed description of the icon
                        </desc>
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </label>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
