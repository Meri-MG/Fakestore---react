import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import * as ReactRedux from 'react-redux';
import store from '../../redux/configureStore';
import Home from '../../components/HomePage';

const mockDispatch = jest.fn();

beforeAll(() => {
  ReactRedux.useDispatch = jest.fn().mockImplementation(() => mockDispatch);
});

beforeEach(() => {
  ReactRedux.useDispatch.mockClear();
});

describe('Rockets Component test', () => {
  it('Renders Rocket Page', () => {
    const app = renderer.create(
      <Provider store={store}>
        <Home />
      </Provider>,
    )
      .toJSON();
    expect(app).toMatchSnapshot();
  });
});
