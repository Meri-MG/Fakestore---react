import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductFromAPI } from '../redux/products/reducer';
import Categories from './Categories';
import Button from './ArrowButton';

const Home = () => {
  const data = useSelector((state) => state.productsReducer);
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductFromAPI());
  }, []);
  const handleClick = (e) => {
    setValue(e.target.value);
  };
  // eslint-disable-next-line max-len
  const filteredCategories = data.filter((product) => product.category.toLowerCase().includes(value.toLowerCase()));
  return (
    <>
      <Categories data={data} handleClick={handleClick} />
      <div className="products-grid">
        {value === 'Select a Category'
          ? data.map((product) => (
            <div key={product.id}>
              <p className="title" id={product.id}>
                {product.title}
                <Button id={product.id} />
              </p>
              <p className="category-name" id={product.id}>
                {product.category}
              </p>
            </div>
          ))
          : filteredCategories.map((product) => (
            <div key={product.id}>
              <p className="title" id={product.id}>
                {product.title}
                <Button id={product.id} />
              </p>
              <p className="category-name" id={product.id}>
                {product.category}
              </p>
            </div>
          ))}
      </div>
    </>
  );
};

export default Home;
