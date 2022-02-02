import axios from 'axios';

const baseURL = 'https://fakestoreapi.com/products';
const GET_PRODUCT = 'metrics/Product/GET_PRODUCT';
const FILTER_BY_CATEGORY = 'metrics/Product/FILTER_BY_CATEGORY';

const initialState = [];

export const getProduct = (payload) => ({
  type: GET_PRODUCT,
  payload,
});

export const filterCategory = (payload) => ({
  type: FILTER_BY_CATEGORY,
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
    case FILTER_BY_CATEGORY:
      // eslint-disable-next-line max-len
      // return state.filter((product) => product.category.toLowerCase().includes(action.payload.data));
      return state.filter((product) => product.category === action.payload);
    default:
      return state;
  }
};

export default reducer;
