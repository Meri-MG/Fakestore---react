import React, { useState } from 'react';

const Categories = (props) => {
  const [category, setCategory] = useState('');
  console.log(props, 'these are props');
  const data = props;
  const unique = [...new Set(data.data.map((item) => item.category))];
  return (
    <select className="options" onChange={(e) => setCategory(e.target.value)} required>
      <option value={category}>Select a Category</option>
      {unique.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
  );
};

export default Categories;
