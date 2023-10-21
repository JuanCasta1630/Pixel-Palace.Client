import React from 'react';

const Login: React.FC = () => {
  return (
    <div className="bg-white p-8 rounded shadow-lg w-96 text-center">
      <h1 className="text-4xl font-semibold text-primary mb-6">Iniciar Sesión</h1>
      <form>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-left">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring focus:ring-primary-500 focus:bg-primary-100 hover:bg-primary-100 transition-colors duration-300 text-left"
            placeholder="Tu correo electrónico"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700 text-left">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-3 border rounded-md shadow-sm focus:ring focus:ring-primary-500 focus:bg-primary-100 hover:bg-primary-100 transition-colors duration-300 text-left"
            placeholder="Tu contraseña"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-primary hover:bg-primary-700 text-white w-full py-3 rounded-md transition-colors duration-300 focus:outline-none focus:ring focus:ring-primary-500"
        >
          Iniciar Sesión
        </button>
      </form>
      <p className="text-gray-700 mt-4">
          ¿Aún no estás registrado?{' '}
          <a
            href="/register" 
            className="text-primary hover:underline"
          >
            Regístrate
          </a>
        </p>
    </div>
  );
}

export default Login;
