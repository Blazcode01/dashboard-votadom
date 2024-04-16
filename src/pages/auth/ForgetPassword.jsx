import React from "react";
import { Link } from "react-router-dom";
// Icons
import {
  RiMailFill,
} from "react-icons/ri";

const ForgetPassword = () => {

  return (
    <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
      <h1 className="text-2xl text-center uppercase font-bold tracking-[3px] text-black bm-8 mt-5">
        Recuperar <span className="text-primary">contraseña</span>
      </h1>
      <form className="mt-12 mb-8">
        <div className="relative mb-8">
          <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
          <input
            type="email"
            className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
            placeholder="Correo electrónico"
          />
        </div>
        <div>
          <button
            type="submit"
            className="bg-primary w-full py-3 px-4 rounded-lg text-white uppercase font-bold text-sm hover:text-gray-500 transition-colors"
          >
            Enviar instrucciones
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
