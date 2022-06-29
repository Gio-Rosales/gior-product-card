# Product-Card

Este es un paquete que forma parte de un curso

### Giovanni Rosales
```
import { ProductCard, ProductButtons, ProductImage, ProductTitle } from '../components';
```


```
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
```