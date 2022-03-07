import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {
  const uiCart = useSelector(state => state.ui.cartshow)

  return (
    <Layout>
      {uiCart && < Cart />}
      <Products />
    </Layout>
  );
}

export default App;
