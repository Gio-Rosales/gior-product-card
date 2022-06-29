import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { productWOImage } from '../data/products';

describe('ProductTitle', () => {
  it('should show correctly with a custom title', () => {
    const wrapper = renderer.create(
      <ProductTitle title='Custom Product' className='custom-class' />
    );

    console.log(wrapper.toJSON());
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should show the component with the product\'s name', () => {
    const wrapper = renderer.create(
      <ProductCard product={productWOImage}>
        {
          () => (
            <ProductTitle />
          )
        }
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
