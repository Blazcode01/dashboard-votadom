import React, { useState } from "react";
import { Link } from "react-router-dom";
// Icons
import {
  RiMailFill,
  RiLockFill,
  RiEyeFill,
  RiEyeOffFill,
} from "react-icons/ri";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-secondary-100 p-8 rounded-xl shadow-2xl w-auto lg:w-[450px]">
      <h1 className="text-2xl text-center uppercase font-bold tracking-[3px] text-black bm-8 mt-5">
        Iniciar <span className="text-primary">sesión</span> 
      </h1>
      <form className="mt-12 mb-8">
        <div className="relative mb-4">
          <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
          <input
            type="email"
            className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
            placeholder="Correo electrónico"
          />
        </div>
        <div className="relative mb-4">
          <RiLockFill className="absolute top-1/2 -translate-y-1/2 left-2 text-primary" />
          <input
            type={showPassword ? "text" : "password"}
            className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg"
            placeholder="Contraseña"
          />
          {showPassword ? (
            <RiEyeOffFill
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
            />
          ) : (
            <RiEyeFill
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer text-primary"
            />
          )}
        </div>
        <div>
          <button
            type="submit"
            className="bg-primary w-full py-3 px-4 rounded-lg text-white uppercase font-bold text-sm hover:text-gray-500 transition-colors"
          >
            Ingresar
          </button>
        </div>
      </form>
      <div className="flex flex-col items-center gap-4 text-primary">
        <Link to="/auth/olvide-password" className="hover:text-gray-500 transition-colors">
          ¿Olvidaste tu constraseña?
        </Link>
      </div>
    </div>
  );
};

export default Login;
