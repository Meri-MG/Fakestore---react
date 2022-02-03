import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Categories = (props) => {
  const [category, setCategory] = useState('');
  const data = props;
  const unique = [...new Set(data.data.map((item) => item.category))];
  const { handleClick } = props;

  return (
    <select
      className="options"
      onChange={(e) => setCategory(e.target.value)}
      onClick={handleClick}
      required
    >
      <option value="Select a Category">Select a Category</option>
      <option value={category}> </option>
      {unique.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

Categories.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default Categories;
