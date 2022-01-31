import axios from 'axios';

const baseURL = 'https://www.superheroapi.com/api.php/2496364390592143/';
const GET_HERO = 'metrics/hero/GET_HERO';
// const arrayHeros = [644, 620, 70, 332, 717, 659, 149, 226, 579, 251];

const initialState = [];

export const getHero = (payload) => ({
  type: GET_HERO,
  payload,
});

export const getHeroFromAPI = () => async (dispatch) => {
  const data = await axios.get(`${baseURL}`);
  dispatch(getHero(data));
  console.log(data);
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HERO:
      return [...action.payload];
    default:
      return state;
  }
};

export default reducer;
