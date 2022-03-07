import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUCT = [
  { id: 'p1', price: 6, description: 'This is a first product - amazing!', title: 'My first book' },
  { id: 'p2', price: 13, description: 'This is a Second product - amazing!', title: 'My first book' },
  { id: 'p3', price: 33, description: 'This is a third product - amazing!', title: 'My first book' },
  { id: 'p4', price: 3, description: 'This is a fourth product - amazing!', title: 'My first book' },
  { id: 'p5', price: 5, description: 'This is a fifth product - amazing!', title: 'My first book' },
]
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map(product => (<ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />))}
      </ul>
    </section>
  );
};

export default Products;
