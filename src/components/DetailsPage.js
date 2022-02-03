import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getProductFromAPI } from '../redux/products/reducer';
import Navigation from './Navigation';

const Details = () => {
  const data = useSelector((state) => state.productsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductFromAPI());
  }, []);
  const { id } = useParams();
  // eslint-disable-next-line max-len
  const filteredDetails = data.filter((product) => product.id === parseInt(id, 10));
  return (
    <>
      <div className="details-page">
        <Navigation />
        {filteredDetails.map((product) => (
          <div className="info-wrapper" key={product.id}>
            <div>
              <p id={product.id}>
                Product Description:
                <span className="span-elements">{product.description}</span>
              </p>
              <p id={product.id}>
                Product Price:
                <span className="span-elements">
                  $
                  {product.price}
                </span>
              </p>
              <p id={product.id}>
                Product Rate:
                <span className="span-elements">{product.rating.rate}</span>
              </p>
              <p id={product.id}>
                Product Count:
                <span className="span-elements">{product.rating.count}</span>
              </p>
            </div>
            <div>
              <img src={product.image} alt={product.title} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Details;
