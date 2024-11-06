// pages/index.tsx
import { FC } from 'react';
import Products from 'components/Products/Products';

const Home: FC = () => {
  return (
    <div>
      <header className="p-8 bg-blue-600 text-white text-center">
        <h1 className="text-4xl font-bold">Welcome to Our Store</h1>
        <p className="mt-2">Explore our range of categories and products</p>
      </header>
      <main>
        <Products />
      </main>
    </div>
  );
};

export default Home;
