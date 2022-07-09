import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsSearch } from 'react-icons/bs';
import { getProductFromAPI } from '../redux/products/reducer';
import Categories from './Categories';
import Button from './ArrowButton';

const Home = () => {
  const data = useSelector((state) => state.productsReducer);
  const [value, setValue] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductFromAPI());
    setIsLoaded(true);
  }, []);
  const handleClick = (e) => {
    setValue(e.target.value);
  };

  let selectedChangeFilter = data;
  if (value === "men's clothing") {
    selectedChangeFilter = data.filter(
      (product) => product.category === "men's clothing",
    );
  } else if (value === "women's clothing") {
    selectedChangeFilter = data.filter(
      (product) => product.category === "women's clothing",
    );
  } else if (value === 'jewelery') {
    selectedChangeFilter = data.filter(
      (product) => product.category === 'jewelery',
    );
  } else if (value === 'electronics') {
    selectedChangeFilter = data.filter(
      (product) => product.category === 'electronics',
    );
  } else if (value === 'lowest price') {
    // eslint-disable-next-line max-len
    selectedChangeFilter = data.sort((a, b) => a.price - b.price);
  } else if (value === 'highest price') {
    // eslint-disable-next-line max-len
    selectedChangeFilter = data.sort((a, b) => b.price - a.price);
  }

  if (!isLoaded) {
    return <>loading...</>;
  }
  return (
    <>
      <form action="" className="search">
        <input type="text" className="input" placeholder="Search..." />
        <button type="button" className="btn">
          <BsSearch className="btn-icon" />
        </button>
      </form>
      <Categories
        data={data}
        handleClick={handleClick}
        categorySelected={value}
      />
      <div className="products-grid">
        {selectedChangeFilter.map((product) => (
          <div key={product.id}>
            <p className="title">
              {product.title}
              <Button id={product.id} />
            </p>
            <p className="category-name">{product.category}</p>
            <p className="category-name">
              $
              {product.price}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
