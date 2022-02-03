const products = () => Promise.resolve({
  data: [
    {
      id: 1,
      title: 'necklace',
      category: 'womens clothes',
    },
    {
      id: 2,
      title: 'bagpack',
      category: 'mens clothes',
    },
  ],
});

export default products;
