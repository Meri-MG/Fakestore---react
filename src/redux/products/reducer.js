import axios from 'axios';

const baseURL = 'https://fakestoreapi.com/products';
const GET_PRODUCT = 'metrics/Product/GET_PRODUCT';
const initialState = [];

export const getProduct = (payload) => ({
  type: GET_PRODUCT,
  payload,
});

export const getProductFromAPI = () => async (dispatch) => {
  const data = await axios.get(`${baseURL}`);
  dispatch(getProduct(data));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return [...action.payload.data];
    default:
      return state;
  }
};

export default reducer;
