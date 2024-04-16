import React, { useState } from "react";
import { Link } from "react-router-dom";
//Icons
import {
  RiGroupLine,
  RiTeamLine,
  RiPassValidLine,
  RiTimeLine,
  RiBarChartBoxLine,
  RiGovernmentLine,
  RiLogoutCircleRLine,
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div
        className={`xl:h-[100vh] overflow-y-scroll fixed xl:static w-[80%] md:w-[40%] lg:w-[30%] xl:w-auto h-full top-0 bg-secondary-100 p-8 flex flex-col justify-between z-50 ${
          showMenu ? "left-0" : "-left-full"
        } transition-all`}
      >
        <div className="flex justify-center mt-6">
          <div className="relative">
            <img src="public/Logo.svg" className="w-11 h-11" />
          </div>

          <h1 className="text-center text-2xl font-bold uppercase text-primary mx-2 py-1">
            votodom
          </h1>
        </div>

        <nav className="pb-80 space-y-4">
          <Link
            to="/"
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
          >
            <RiGroupLine className="text-primary" /> Pádron
          </Link>
          <Link
            to="/"
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
          >
            <RiTeamLine className="text-primary" /> Colegio Electoral
          </Link>
          <Link
            to="/"
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
          >
            <RiPassValidLine className="text-primary" /> Boleta Electoral
          </Link>
          <Link
            to="/"
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
          >
            <RiTimeLine className="text-primary" /> Jornada Electoral
          </Link>
          <Link
            to="/"
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
          >
            <RiBarChartBoxLine className="text-primary" /> Voto Tiempo Real
          </Link>
          <Link
            to="/"
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
          >
            <RiGovernmentLine className="text-primary" /> Cabina de Votación
          </Link>
        </nav>
        <nav>
          <Link
            to="/"
            className="flex items-center gap-4 py-2 px-4 rounded-lg hover:bg-secondary-900 transition-colors"
          >
            <RiLogoutCircleRLine className="text-primary" /> Cerrar sesión
          </Link>
        </nav>
      </div>
      <button
        onClick={() => setShowMenu(!showMenu)}
        className="xl:hidden fixed bottom-4 right-4 bg-primary text-black p-3 rounded-full z-50"
      >
        {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
      </button>
    </>
  );
};

export default Sidebar;
