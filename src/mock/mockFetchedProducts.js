import products from './mockApi';

const getData = () => products().then((data) => (data));

export default getData;
