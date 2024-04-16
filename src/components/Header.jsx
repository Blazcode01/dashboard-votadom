import React from "react";
import {
  RiNotification2Line,
  RiArrowDownSLine,
  RiSettings3Line,
  RiLoginCircleLine,
  RiThumbUpLine,
} from "react-icons/ri";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end">
      <nav className="flex items-center gap-2">
        <Menu
          menuButton={
            <MenuButton className="relative hover:bg-secondary-100 p-2  rounded-lg transition-colors">
              {" "}
              <RiNotification2Line />
              <span className="absolute -top-1 -right-1 bg-primary py-0.4 px-[5px] box-content text-black rounded-full text-[11px] font-bold">
                2
              </span>
            </MenuButton>
          }
          align="end"
          arrow
          transition
          arrowClassName="bg-secondary-100"
          menuClassName="bg-secondary-100 p-4"
        >
          <h1 className="text-black text-center font-medium">Notificaciones (2) </h1>
          <hr className="my-6 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link to="/" className="text-black flex-1 flex items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg">
              <img
                src="https://img.freepik.com/vector-gratis/ilustracion-empresario_53876-5856.jpg"
                className="w-9 h-9 object-cover rounded-full"
              />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Administrador</span>{" "}
                  <span className="text-[10px]">16/04/2024</span>
                </div>
                <p className="text-gray-500 text-xs">Lorem ipsum dolor sit amet...</p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link to="/" className="text-black flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg">
              <RiThumbUpLine className="p-2 bg-blue-200 text-blue-700 box-content rounded-full"/>
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span> Bienvenido a...</span>{" "}
                  <span className="text-[10px]">16/04/2024</span>
                </div>
                <p className="text-gray-500 text-xs">Al Módulo adminitrativo...</p>
              </div>
            </Link>
          </MenuItem>
          
        </Menu>
        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-100 py-2 px-4 rounded-lg transition-colors">
              {" "}
              <img
                src="https://img.freepik.com/vector-gratis/ilustracion-empresario_53876-5856.jpg"
                className="w-9 h-9 object-cover rounded-full"
              />
              <span>Administrador</span>
              <RiArrowDownSLine />
            </MenuButton>
          }
          align="end"
          arrow
          arrowClassName="bg-secondary-100"
          transition
          menuClassName="bg-secondary-100 p-4"
        >
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/perfil"
              className=" rounded-lg transition-colors text-black hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1"
            >
              <img
                src="https://img.freepik.com/vector-gratis/ilustracion-empresario_53876-5856.jpg"
                className="w-11 h-11 object-cover rounded-full"
              />
              <div className="flex flex-col gap-1 text-sm">
                <span className="text-sm">Administrador</span>
                <span className="text-xs text-gray-500">
                  Administrador@gmail.com
                </span>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-4 border-gray-500" />
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/configuracion"
              className=" rounded-lg transition-colors text-black hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-11 flex-1"
            >
              <RiSettings3Line /> Configuración
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link
              to="/cerrar-sesion"
              className=" rounded-lg transition-colors text-black hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-11 flex-1"
            >
              <RiLoginCircleLine /> Cerrar sesión
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  );
};

export default Header;
