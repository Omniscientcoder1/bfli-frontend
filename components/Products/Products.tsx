
import Link from 'next/link';
import ProductCard from './ProductCard';

const categories = [
  { id: 'category1', title: 'Islamic Deposit', description: 'Explore our Shariah Based Deposit Products', image: '/images/category1.jpg' },
  { id: 'category2', title: 'Islamic Investment', description: 'Explore Our Shariah Baased Investment Products', image: '/images/category2.jpg' },
];

const Products = () => {
  return (
    <section className="p-8">
      <h2 className="text-3xl font-bold mb-8">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <Link key={category.id} href={`/products/category/${category.id}`}>
            <ProductCard title={category.title} description={category.description} image={category.image} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Products;

