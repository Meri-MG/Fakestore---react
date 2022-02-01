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

let flag = true;
const reducer = (state = initialState, action) => {
  const ids = state.length ? state.map((el) => el.id) : [];
  switch (action.type) {
    case GET_PRODUCT:
      if (!action.payload.data.some((el) => ids.includes(el.id))) {
        flag = true;
      }
      if (flag) {
        flag = false;
        return [...action.payload.data];
      }
      return state;
    default:
      return state;
  }
};

export default reducer;
