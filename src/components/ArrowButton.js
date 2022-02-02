import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const Button = (props) => {
  const { id } = props;
  // onClick={onArrowClick}
  return (
    <Link className="arrowBtn" to={`/${id}`}>
      <FaArrowAltCircleRight />
    </Link>
  );
};

Button.propTypes = {
  // onArrowClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default Button;
