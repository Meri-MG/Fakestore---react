import React from 'react';
import PropTypes from 'prop-types';

const Categories = (props) => {
  const data = props;
  const unique = [...new Set(data.data.map((item) => item.category))];
  const { handleChange } = props;

  return (
    <div className="selectDiv">
      <select
        className="options"
        onChange={handleChange}
        value={data.categorySelected}
        required
      >
        <option value="Select a Category">Select a Category</option>
        <option value="all">all</option>
        <option value="lowest price">lowest price</option>
        <option value="highest price">highest price</option>
        {unique.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

Categories.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default Categories;
