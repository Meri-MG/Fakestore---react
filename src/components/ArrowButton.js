import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const Button = () => (
  <Link className="arrowBtn" to="/details">
    <FaArrowAltCircleRight />
  </Link>
);

export default Button;
