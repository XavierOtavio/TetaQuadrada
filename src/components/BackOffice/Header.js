import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChartLine,
  faGraduationCap,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../images/thetaQuadradaRed.svg";
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
      className={`h-full absolute left-0 transition-all delay-150 duration-500 flex flex-col justify-between items-center ${
        open ? "z-10 w-full" : "w-1/3"
      } bg-tq1 rounded-r-lg text-white`}
      ref={menuRef}
    >
      <div className="flex items-center justify-center h-24 py-2">
        <img
          src={logo}
          alt="logo-01"
          border="0"
          className="w-1/2 mx-auto my-auto"
        />
      </div>
      <div className="w-full flex items-center justify-evenly flex-col h-full px-2">
        <Link
          to="/dashboard"
          className={`h-12 flex items-center justify-start gap-4 w-full rounded-lg hover:bg-yellow-500 p-4 cursor-pointer ${
            location.pathname === "/dashboard" ? "bg-yellow-500" : ""
          }`}
        >
          <FontAwesomeIcon icon={faChartLine} className="h-4" />
          <span
            className={`transition-opacity delay-250 duration-500 ${
              open ? "opacity-100 " : "opacity-0"
            }`}
          >
            Dashboard
          </span>
        </Link>
        <Link
          to="/dashboard/classes"
          className={`h-12 flex items-center justify-start gap-4 w-full rounded-lg hover:bg-yellow-500 p-4 cursor-pointer ${
            location.pathname === "/dashboard/classes" ? "bg-yellow-500" : ""
          }`}
        >
          <FontAwesomeIcon icon={faGraduationCap} className="h-4" />
          <span
            className={`transition-opacity delay-250 duration-500 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            Aulas
          </span>
        </Link>
        <Link
          to="#"
          className="h-12 flex items-center justify-start gap-4 w-full rounded-lg hover:bg-yellow-500 p-4 cursor-pointer"
        >
          <FontAwesomeIcon icon={faQuestion} className="h-4" />
          <span
            className={`transition-opacity delay-250 duration-500 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            O que quiseres
          </span>
        </Link>
        <Link
          to="#"
          className="h-12 flex items-center justify-start gap-4 w-full rounded-lg hover:bg-yellow-500 p-4 cursor-pointer"
        >
          <FontAwesomeIcon icon={faQuestion} className="h-4" />
          <span
            className={`transition-opacity delay-250 duration-500 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            O que quiseres
          </span>
        </Link>
        <Link
          to="#"
          className="h-12 flex items-center justify-start gap-4 w-full rounded-lg hover:bg-yellow-500 p-4 cursor-pointer"
        >
          <FontAwesomeIcon icon={faQuestion} className="h-4" />
          <span
            className={`transition-opacity delay-250 duration-500 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            O que quiseres
          </span>
        </Link>
        <Link
          to="#"
          className="h-12 flex items-center justify-start gap-4 w-full rounded-lg hover:bg-yellow-500 p-4 cursor-pointer"
        >
          <FontAwesomeIcon icon={faQuestion} className="h-4" />
          <span
            className={`transition-opacity delay-250 duration-500 ${
              open ? "opacity-100" : "opacity-0"
            }`}
          >
            O que quiseres
          </span>
        </Link>
      </div>
      <div
        className="flex items-center gap-4 justify-start w-full rounded-br-lg bg-tq3 hover:bg-yellow-500 p-4 h-12 cursor-pointer"
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
