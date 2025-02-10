// pages/ErrorPage/ErrorPage.jsx
import 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500">Página não encontrada</h1>
        <p className="mt-4 text-xl">A página que você procura não existe.</p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Voltar para a Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
