import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
  // img: "./coffee-mug.png"
};

const App = () => {
  return (
    <div>
      <ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10
        }}
      >
        {
          ({ count, maxCount, isMaxCountReached, reset, increaseBy }) => {
            return (
              <>
                <ProductCard.Image className='product-card-image' />
                <ProductCard.Title className='product-card-title' />
                <ProductCard.Buttons className='product-card-button' />
              </>
            )
          }
        }
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
