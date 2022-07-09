import React from 'react';
import PropTypes, { func } from 'prop-types';
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';

const Button = (props) => {
  const { id } = props;
  const { onArrowClick } = props;
  return (
    <Link className="arrowBtn" onClick={onArrowClick} to={`/details/${id}`}>
      <FaArrowAltCircleRight />
    </Link>
  );
};

Button.defaultProps = {
  onArrowClick: func,
};

Button.propTypes = {
  onArrowClick: PropTypes.func,
  id: PropTypes.number.isRequired,
};

export default Button;
