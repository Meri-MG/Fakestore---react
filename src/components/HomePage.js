import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductFromAPI } from '../redux/products/reducer';
import Button from './ArrowButton';
import Categories from './Categories';

const Home = () => {
  const data = useSelector((state) => state.productsReducer);
  const [value, setValue] = useState('');
  console.log(data, 'this is data');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductFromAPI());
  }, []);
  // let value = '';
  const handleClick = (e) => {
    setValue(e.target.value);
    console.log(value, 'this is selected value');
  };
  console.log(value, 'this is value');
  const onArrowClick = () => {
    data.map((product) => console.log(product.id, 'clicked'));
  };
  return (
    <>
      <Categories data={data} handleClick={handleClick} />
      <div className="products-grid">
        {value === 'Select a Category' ? data.map((product) => (
          <div key={product.id}>
            <p className="title" id={product.id}>
              {product.title}
              <Button id={product.id} onArrowClick={onArrowClick} />
            </p>
            <p className="category-name" id={product.id}>
              {product.category}
            </p>
          </div>
        )) : <div>hello world</div>}
      </div>
    </>
  );
};

export default Home;
