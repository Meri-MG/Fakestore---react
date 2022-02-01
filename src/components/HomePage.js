import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductFromAPI } from '../redux/products/reducer';
// import Details from './DetailsPage';
import Button from './ArrowButton';

const Home = () => {
  const data = useSelector((state) => state.productsReducer);
  // const history = useHistory();
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
            <p id={product.id}>
              {product.title}
              <Button />
            </p>
            <p id={product.id}>{product.category}</p>
            <p id={product.id}>
              <img src={product.image} alt={product.title} />
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
