// components/Products/ProductGrid.tsx
import { FC } from 'react';
import Link from 'next/link';

interface ProductGridProps {
  category: string;
}

const ProductGrid: FC<ProductGridProps> = ({ category }) => {
  // Define all products, assigning them to their respective categories
  const products = [
    // Products in Category 1
    { id: '1', title: 'MUDARABAH TDR', image: '/images/product-placeholder.jpg', category: 'category1' },
    { id: '2', title: 'MUDARABAH MPS', image: '/images/product-placeholder.jpg', category: 'category1' },
    { id: '3', title: 'MUDARABHA MONTHLY DPS', image: '/images/product-placeholder.jpg', category: 'category1' },
    { id: '4', title: 'MUDARABHA HAJJ SCHEME', image: '/images/product-placeholder.jpg', category: 'category1' },
    { id: '5', title: 'MUDARABHA UMRAH SCHEME', image: '/images/product-placeholder.jpg', category: 'category1' },
    { id: '6', title: 'MUDARABAH RETIREMENT PLAN', image: '/images/product-placeholder.jpg', category: 'category1' },
    { id: '7', title: 'MUDARABAH CASH WAQF', image: '/images/product-placeholder.jpg', category: 'category1' },

    // Products in Category 2
    { id: '8', title: 'AUTO FINANCE', image: '/images/product-placeholder.jpg', category: 'category2' },
    { id: '9', title: 'HOME FINANCE', image: '/images/product-placeholder.jpg', category: 'category2' },
    { id: '10', title: 'INDUSTRIAL FINANCE', image: '/images/product-placeholder.jpg', category: 'category2' },
    { id: '11', title: 'WORKING CAPITAL FINANCE', image: '/images/product-placeholder.jpg', category: 'category2' },
    { id: '12', title: 'CAPITAL, MACHINERIES & EXPANSION FINANCE', image: '/images/product-placeholder.jpg', category: 'category2' },
    { id: '13', title: 'AGRICULTURE INVESTMENT', image: '/images/product-placeholder.jpg', category: 'category2' },
    { id: '14', title: 'WOMEN ENTREPRENEUR', image: '/images/product-placeholder.jpg', category: 'category2' },
    { id: '15', title: 'NEW ENTREPRENEUR', image: '/images/product-placeholder.jpg', category: 'category2' },
    { id: '16', title: 'DOCTORS FINANCE', image: '/images/product-placeholder.jpg', category: 'category2' },
    { id: '17', title: 'MANUFACTURING & TRADING SERVICE FINANCE', image: '/images/product-placeholder.jpg', category: 'category2' },
    
  ];

  // Filter products based on the provided category
  const filteredProducts = products.filter((product) => product.category === category);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <Link key={product.id} href={`/products/product/${product.id}`}>
          <div className="cursor-pointer border p-4 rounded-lg shadow hover:shadow-lg transition-shadow">
            <img src={product.image} alt={product.title} className="w-full h-40 object-cover rounded-md" />
            <h3 className="mt-4 text-lg font-semibold">{product.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;


