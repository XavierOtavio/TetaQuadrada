import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faGear,
  faArrowRightFromBracket,
  faBookmark,
  faEuroSign,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.svg";

export default function Header(props) {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(false);
  const [isLogged, setIsLogged] = props.isLogged;

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <div className=" flex h-24 items-center justify-center bg-tq1">
      <Link
        to="/"
        className="ml-3 flex h-full w-auto justify-start py-0.5 align-baseline "
      >
        <img src={logo} alt="logo-01" border="0" />
      </Link>
      <div className="ml-2 mr-3 flex w-full justify-end align-baseline">
        <Link to="/">
          <button
            className={`${
              location.pathname === "/" ? "bg-tq4 text-white" : "text-tq2"
            } hover:border-thc1 hover:bg-thc1 ml-2 block rounded px-10 py-3 font-medium hover:text-white`}
          >
            Home
          </button>
        </Link>

        <Link to="/classes" className="">
          <button
            className={`${
              location.pathname === "/classes"
                ? "bg-tq4 text-white"
                : "text-tq2"
            } hover:border-thc1 ml-2 block rounded px-10 py-3 font-medium hover:bg-tq4 hover:text-white`}
          >
            Aulas de Grupo
          </button>
        </Link>

        <Link to="/coachesfront" className="">
          <button class="hover:border-thc1 ml-2 block rounded px-10 py-3 font-medium text-tq2 hover:bg-tq4 hover:text-white">
            Treinadores
          </button>
        </Link>

        <Link to="/about" className="">
          <button class="hover:border-thc1 ml-2 block rounded px-10 py-3 font-medium text-tq2 hover:bg-tq4 hover:text-white">
            Sobre nós
          </button>
        </Link>

        <Link to="/dashboard" className={`${isLogged ? "mr-28" : "sr-only"}`}>
          <button class="hover:border-thc1 ml-2 block rounded px-10 py-3 font-medium text-tq2 hover:bg-tq4 hover:text-white">
            Dashboard
          </button>
        </Link>

        {isLogged ? (
          <div className="absolute mr-10 flex flex-col items-end justify-start">
            <button
              id="dropdownDividerButton"
              className="flex h-full w-12 items-center justify-center gap-2 "
              type="button"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <img
                src="https://cdn.discordapp.com/attachments/1082425024104894666/1082799435727253584/xSVMV6xD9Cf7K56wjeEF--1--2htnr.jpg"
                className="rounded-full object-cover text-3xl hover:outline hover:outline-tq4"
                alt="adminLogo"
              />
              {/* <FontAwesomeIcon icon={faAngleDown} color="white" size="lg" /> */}
            </button>
            {openMenu && (
              <div
                className={`z-10 ${
                  openMenu ? "" : "hidden"
                }  mt-2 w-56 divide-y divide-gray-100 rounded-lg bg-white text-left shadow`}
              >
                <div className="flex items-center justify-between px-4 py-2">
                  <p className="text-xs text-gray-500">@EngXavierOtávio</p>
                  <FontAwesomeIcon icon={faAngleDown} color="black" size="lg" />
                </div>
                <ul className="text-sm text-gray-700">
                  <li>
                    <Link
                      to="/myaccount"
                      className="inline-flex w-full items-center justify-start gap-2 px-4 py-2 hover:bg-gray-100"
                    >
                      <FontAwesomeIcon
                        icon={faBookmark}
                        color="black"
                        className="w-6"
                      />
                      A Minha Conta
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/payments"
                      className="inline-flex w-full items-center justify-start gap-2 px-4 py-2 hover:bg-gray-100"
                    >
                      <FontAwesomeIcon
                        icon={faEuroSign}
                        color="black"
                        className="w-6"
                      />
                      Pagamentos
                    </Link>
                  </li>
                </ul>
                <div className="py-2">
                  <button
                    type="submit"
                    onClick={handleLogout}
                    className="inline-flex w-full items-center justify-start gap-2 px-4 py-1 hover:bg-gray-100"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRightFromBracket}
                      color="black"
                      className="mx-2"
                    />
                    Sair
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="">
            <button class="ml-2 block rounded border bg-white px-10 py-3 font-medium text-tq1 hover:border-white  hover:bg-transparent hover:text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
