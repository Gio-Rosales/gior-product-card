import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { productWOImage } from '../data/products';

const {act} = renderer;

describe('ProductCard', () => {
  it('should show correctly', () => {
    const wrapper = renderer.create(
      <ProductCard product={productWOImage}>
        {
          () => (
            <h1>Hola</h1>
          )
        }
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('shoudl increment the counter', () => {
    const wrapper = renderer.create(
      <ProductCard product={productWOImage} >
        {
          ({count, increaseBy}) => (
            <>
              <h1>Product Card</h1>
              <span>{count}</span>
              <button onClick={() => increaseBy(1)}>1</button>
            </>
          )
        }
      </ProductCard>
    );

    let tree = wrapper.toJSON();
    expect(tree).toMatchSnapshot();

    act(() => {
      (tree as any).children[2].props.onClick();
    })

    tree = wrapper.toJSON();

    console.log((tree as any).children[1].children);
    expect((tree as any).children[1].children[0]).toBe('1');
  });
});
