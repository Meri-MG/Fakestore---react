import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductFromAPI } from '../redux/products/reducer';
import Button from './ArrowButton';
import Categories from './Categories';

const Home = () => {
  const data = useSelector((state) => state.productsReducer);
  console.log(data, 'this is data');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductFromAPI());
  }, []);
  return (
    <>
      <Categories data={data} />
      <div className="products-grid">
        {data.map((product) => (
          <div key={product.id}>
            <p className="title" id={product.id}>
              {product.title}
              <Button />
            </p>
            <p className="category-name" id={product.id}>{product.category}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
