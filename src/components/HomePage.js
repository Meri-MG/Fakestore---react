import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductFromAPI } from '../redux/products/reducer';

const Home = () => {
  const data = useSelector((state) => state.productsReducer);

  console.log(data, 'this is data');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductFromAPI());
  }, []);
  return (
    <>
      <div className="products-grid">
        {data.map((product) => (
          <div key={product.id}>
            <p key={product.id}>{product.title}</p>
            <p key={product.id}>{product.category}</p>
            <p key={product.id}>
              <img src={product.image} alt={product.title} />
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
