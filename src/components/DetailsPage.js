import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProductFromAPI } from '../redux/products/reducer';

const Details = () => {
  const data = useSelector((state) => state.productsReducer);
  console.log(data, 'this is data details');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductFromAPI());
  }, []);
  return (
    <>
      <div className="details-page">
        {data.map((product) => (
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
