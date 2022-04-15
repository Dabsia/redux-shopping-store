import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCTS = [
  {id: 'pi', price: 6, title: 'My first book', description: 'The frst book i wrote'},
  {id: 'm3', price: 5, title: 'My second book', description: 'The second book i wrote'}
]
  


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(product => {
          return(
            <ProductItem key = {product.id}
              id = {product.id}
              title={product.title}
              price={product.price}
              description={product.description}
        />
          )
        })}
        
      </ul>
    </section>
  );
};

export default Products;
