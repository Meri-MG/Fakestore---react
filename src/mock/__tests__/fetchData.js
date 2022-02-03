import '@testing-library/jest-dom/extend-expect';
import getData from '../mockFetchedProducts';

describe('test getting data', () => {
  it('get product title', async () => {
    await getData().then((data) => expect(data.data[0].title).toBe('necklace'));
  });
  it('get product id', async () => {
    await getData().then((data) => expect(data.data[1].id).toEqual(2));
  });

  it('get product category', async () => {
    await getData().then((data) => expect(data.data[1].category).toEqual('mens clothes'));
  });
});
