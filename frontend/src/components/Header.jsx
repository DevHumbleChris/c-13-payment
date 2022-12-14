import { signOut } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../firebaseConfig";
import { sign_out } from "../store/slices/authSlice";

export default function Header() {
  const [navbarOpen, setNavOpen] = useState(false);
  const openNavbar = () => {
    setNavOpen(!navbarOpen);
  };
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user)
  const appSignOut = () => {
    signOut(auth).then(() => {
      dispatch(sign_out());
      toast.info("Signout Successfull!");
    });
  };
  return (
    <header className="absolute left-0 top-0 z-50 w-full">
      <div className="container mx-auto">
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <Link to="/" className="block w-full py-5">
              <img
                src="https://www.safaricom.co.ke/images/Lipanampesa.png"
                alt="logo"
                className="w-full -mt-4 sm:-mt-4 lg:mt-0"
              />
            </Link>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              <button
                onClick={openNavbar}
                id="navbarToggler"
                className={
                  navbarOpen
                    ? "navbarTogglerActive ring-primary absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                    : "ring-primary absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                }
              >
                <span className="bg-body-color relative my-[6px] block h-[2px] w-[30px]"></span>
                <span className="bg-body-color relative my-[6px] block h-[2px] w-[30px]"></span>
                <span className="bg-body-color relative my-[6px] block h-[2px] w-[30px]"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={
                  !navbarOpen
                    ? "hidden absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow transition-all lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none"
                    : "absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow transition-all lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none"
                }
              >
                <ul className="blcok lg:flex">
                  <li>
                    <Link
                      to="/"
                      className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                      onClick={openNavbar}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/docs"
                      className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                      onClick={openNavbar}
                    >
                      Docs
                    </Link>
                  </li>
                  <li>
                    <button
                      className="sm:hidden bg-primary rounded-lg py-3 px-7 text-base font-medium text-white hover:bg-opacity-90"
                      onClick={appSignOut}
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
              <p className="text-dark hover:text-primary py-3 px-7 text-base font-medium">
                { user?.displayName || user?.email }
              </p>
              <button
                className="bg-primary rounded-lg py-3 px-7 text-base font-medium text-white hover:bg-opacity-90"
                onClick={appSignOut}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
