import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/UserContext";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  // console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
      <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
        <nav
          aria-label="main navigation"
          className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
          role="navigation"
        >
          {/*      <!-- Brand logo --> */}
          <Link
            id="WindUI"
            aria-label="WindUI logo"
            aria-current="page"
            className="flex items-center whitespace-nowrap mt-2 py-3 focus:outline-none lg:flex-1 text-sky-400 text-xl"
            to="/"
          >
            <img src={logo} alt="" width="100px" /> CodeCove
          </Link>
          {/*      <!-- Mobile trigger --> */}
          <button
            className={`relative order-10 block h-10 w-10 self-center lg:hidden
          ${
            isToggleOpen
              ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
              : ""
          }
        `}
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            aria-expanded={isToggleOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
              ></span>
            </div>
          </button>
          {/*      <!-- Navigation links --> */}
          <ul
            role="menubar"
            aria-label="Select page"
            className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
              isToggleOpen
                ? "visible opacity-100 backdrop-blur-sm"
                : "invisible opacity-0"
            }`}
          >
            <li role="none" className="flex items-stretch">
              <NavLink
                role="menuitem"
                aria-haspopup="false"
                tabIndex="0"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-sky-500 focus:bg-sky-50 focus:outline-none focus-visible:outline-none lg:px-8"
                to="/"
                activeclassname="active"
              >
                <span>Home</span>
              </NavLink>
            </li>
            <li role="none" className="flex items-stretch">
              <NavLink
                role="menuitem"
                aria-haspopup="false"
                tabIndex="0"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-sky-500 focus:bg-sky-50 focus:outline-none focus-visible:outline-none lg:px-8"
                to="/courses"
              >
                <span>Courses</span>
              </NavLink>
            </li>
            <li role="none" className="flex items-stretch">
              <NavLink
                role="menuitem"
                aria-haspopup="false"
                tabIndex="0"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-sky-500 focus:bg-sky-50 focus:outline-none focus-visible:outline-none lg:px-8"
                to="/faq"
              >
                <span>FAQ</span>
              </NavLink>
            </li>

            <li role="none" className="flex items-stretch">
              <NavLink
                role="menuitem"
                aria-haspopup="false"
                tabIndex="0"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-sky-500 focus:bg-sky-50 focus:outline-none focus-visible:outline-none lg:px-8"
                to="/blog"
              >
                <span>Blog</span>
              </NavLink>
            </li>
            <li role="none" className="flex items-stretch">
              {user?.uid ? (
                <>
                  <button
                    onClick={handleLogOut}
                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-sky-500 focus:bg-sky-50 focus:outline-none focus-visible:outline-none lg:px-8"
                  >
                    <span>Log out</span>
                  </button>
                </>
              ) : (
                <NavLink
                  role="menuitem"
                  aria-haspopup="false"
                  tabIndex="0"
                  className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-sky-500 focus:bg-sky-50 focus:outline-none focus-visible:outline-none lg:px-8"
                  to="/login"
                >
                  <span>Login</span>
                </NavLink>
              )}
            </li>
            <li role="none" className="flex items-stretch">
              <div
                role="menuitem"
                aria-haspopup="false"
                tabIndex="0"
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-sky-500 focus:bg-sky-50 focus:outline-none focus-visible:outline-none lg:px-8"
              >
                <div className="relative flex flex-wrap items-center">
                  <input
                    className="peer relative h-6 w-12 cursor-pointer appearance-none rounded-xl bg-slate-300 transition-colors after:absolute after:top-0 after:left-0 after:h-6 after:w-6 after:rounded-full after:bg-slate-500 after:transition-all checked:bg-sky-200 checked:after:left-6 checked:after:bg-sky-500 hover:bg-slate-400 after:hover:bg-slate-600 checked:hover:bg-sky-300 checked:after:hover:bg-sky-600 focus:outline-none checked:focus:bg-sky-400 checked:after:focus:bg-sky-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-200 disabled:after:bg-slate-300"
                    type="checkbox"
                    value=""
                    id="id-c06"
                  />
                </div>
              </div>
            </li>
          </ul>
          <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
            {/*        <!-- Avatar --> */}

            {user?.uid ? (
              <Link
                to="/"
                className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-white"
              >
                <img
                  src={user?.photoURL}
                  alt="user name"
                  title={user?.displayName}
                  width="40"
                  height="40"
                  className="max-w-full rounded-full"
                />
                <span className="absolute bottom-0 right-0 inline-flex items-center justify-center gap-1 rounded-full border-2 border-white bg-pink-500 p-1 text-sm text-white">
                  <span className="sr-only"> 7 new emails </span>
                </span>
              </Link>
            ) : (
              <></>
            )}

            {/*        <!-- End Avatar --> */}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
