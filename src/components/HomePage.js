import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductFromAPI } from '../redux/products/reducer';
import Categories from './Categories';
import Button from './ArrowButton';
import SearchWidget from './SearchWidget';

const Home = () => {
  const data = useSelector((state) => state.productsReducer);
  const [value, setValue] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchField, setSearchField] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductFromAPI());
    setIsLoaded(true);
  }, []);

  let selectedChangeFilter;

  const handleChange = (e) => {
    setValue(e.target.value);
    setSearchOpen(false);
    setSearchField('');
  };

  const handleSearch = (e) => {
    setSearchField(e.target.value);
  };

  const handleSearchClick = () => {
    setValue('');
  };

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
  } else if (value === 'Select a Category' || value === 'all') {
    selectedChangeFilter = data;
  } else {
    // eslint-disable-next-line max-len
    selectedChangeFilter = data.filter((product) => product.title.toLowerCase().includes(searchField.toLowerCase()));
  }

  if (!isLoaded) {
    return <div className="loading">loading...</div>;
  }
  return (
    <>
      <SearchWidget
        handleSearch={handleSearch}
        open={searchOpen}
        setOpen={setSearchOpen}
        handleSearchClick={handleSearchClick}
      />
      <Categories
        data={data}
        handleChange={handleChange}
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
