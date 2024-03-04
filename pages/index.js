import { useEffect, useState } from 'react';
// import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import { getTwentyProducts } from '../controllers/productData';
import ProductCard from '../components/ProductCard';

function Home() {
  const [products, setProducts] = useState([]);
  const { user } = useAuth();

  const getProducts = () => {
    getTwentyProducts()?.then(setProducts);
  };

  useEffect(() => {
    getProducts();
  });

  return (
    <div>
      <h1>Hello {user.fbUser.displayName}!</h1>
      <h3>Check out our latest products:</h3>
      {products.map((product) => (
        <ProductCard key={product.id} productObj={product} onUpdate={getProducts} />
      ))}
    </div>
  );
}

export default Home;
