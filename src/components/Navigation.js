import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaMicrophone, FaRegSun } from 'react-icons/fa';

const Navigation = () => (
  <div className="nav-bar">
    <div className="inner-nav-bar">
      <ul>
        <li>
          <Link className="nav-link" to="/">
            <FaArrowLeft />
          </Link>
        </li>
        <li>
          <h2>Check The Product</h2>
        </li>
        <div className="icons">
          <li>
            <FaMicrophone />
          </li>
          <li>
            <FaRegSun />
          </li>
        </div>
      </ul>
    </div>
  </div>
);

export default Navigation;
