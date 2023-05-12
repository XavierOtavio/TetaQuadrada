import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChartLine,
  faGraduationCap,
  faQuestion,
  faUser,
  faDumbbell,
  faArrowRightFromBracket,
  faPersonMilitaryPointing,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.svg";
export default function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();
  const location = useLocation();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        e.target.parentNode !== menuRef.current &&
        e.target.parentNode.parentNode !== menuRef.current &&
        e.target.parentNode.parentNode.parentNode !== menuRef.current
      ) {
        setOpen(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div
      className={`absolute left-0 flex h-full flex-col items-center justify-between transition-all delay-150 duration-500 ${
        open ? "z-10 w-full" : "w-1/3"
      } rounded-r-lg bg-tq1 text-white`}
      ref={menuRef}
    >
      <div className="flex h-24 items-center justify-center py-2">
        <img
          src={logo}
          alt="logo-01"
          border="0"
          className="mx-auto my-auto w-1/2"
        />
      </div>
      <div className="flex h-full w-full flex-col items-center justify-evenly px-2">
        <Link
          to="/dashboard"
          className={`flex h-12 w-full cursor-pointer items-center justify-start gap-4 rounded-lg p-4 hover:bg-yellow-500 ${
            location.pathname === "/dashboard" ? "bg-yellow-500" : ""
          }`}
        >
          <FontAwesomeIcon icon={faChartLine} className="h-4" />
          <span
            className={`delay-250 transition-opacity duration-500 ${
              open ? "opacity-100 " : "opacity-0"
            }`}
          >
            Dashboard
          </span>
        </Link>
        <Link
          to="/dashboard/classes"
          className={`flex h-12 w-full cursor-pointer items-center justify-start gap-4 rounded-lg p-4 hover:bg-yellow-500 ${
            location.pathname === "/dashboard/classes" ? "bg-yellow-500" : ""
          }`}
        >
          <FontAwesomeIcon icon={faGraduationCap} className="h-4" />
          <span
            className={`delay-250 transition-opacity duration-500 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            Aulas
          </span>
        </Link>
        <Link
          to="/dashboard/client"
          className={`flex h-12 w-full cursor-pointer items-center justify-start gap-4 rounded-lg p-4 hover:bg-yellow-500 ${
            location.pathname === "/dashboard/client" ? "bg-yellow-500" : ""
          }`}
        >
          <FontAwesomeIcon icon={faUser} className="h-4" />
          <span
            className={`delay-250 transition-opacity duration-500 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            Clientes
          </span>
        </Link>
        <Link
          to="/dashboard/modalities"
          className="flex h-12 w-full cursor-pointer items-center justify-start gap-4 rounded-lg p-4 hover:bg-yellow-500"
        >
          <FontAwesomeIcon icon={faDumbbell} className="h-4" />
          <span
            className={`delay-250 transition-opacity duration-500 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            Modalidades
          </span>
        </Link>
        <Link
          to="/dashboard/coaches"
          className="flex h-12 w-full cursor-pointer items-center justify-start gap-4 rounded-lg p-4 hover:bg-yellow-500"
        >
          <FontAwesomeIcon icon={faPersonMilitaryPointing} className="h-4" />
          <span
            className={`delay-250 transition-opacity duration-500 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            Treinadores
          </span>
        </Link>
        <Link
          to="/"
          className="flex h-12 w-full cursor-pointer items-center justify-start gap-4 rounded-lg p-4 hover:bg-yellow-500"
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket} className="h-4" />
          <span
            className={`delay-250 transition-opacity duration-500 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            Sair
          </span>
        </Link>
      </div>
      <div
        className="flex h-12 w-full cursor-pointer items-center justify-start gap-4 rounded-br-lg bg-tq3 p-4 hover:bg-yellow-500"
        onClick={handleOpen}
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          className={`ml-2 transition-transform delay-150 duration-500 ${
            open && "rotate-180"
          }`}
        />
        <span
          className={` transition-opacity delay-150 duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        >
          Fechar
        </span>
      </div>
    </div>
  );
}
