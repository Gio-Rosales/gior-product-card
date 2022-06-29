import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { productWImage } from '../data/products';

describe('ProductImage', () => {
  it('should show correctly with a custom image', () => {
    const wrapper = renderer.create(
      <ProductImage img={productWImage.img} />
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should show the component with the product\'s image', () => {
    const wrapper = renderer.create(
      <ProductCard product={productWImage}>
        {
          () => (
            <ProductImage />
          )
        }
      </ProductCard>
    );

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
