// /components/UI/Button/Button.jsx
import 'react';

const Button = ({ text, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;
