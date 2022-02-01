import React from 'react';
import { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Details = () => {
  const data = useSelector((state) => state.productsReducer);
  // const history = useHistory();
  console.log(data, 'this is data details');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductFromAPI());
  }, []);
  return <div>underCOntractions</div>;
};

export default Details;
