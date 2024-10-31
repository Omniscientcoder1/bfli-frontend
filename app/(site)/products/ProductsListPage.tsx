// ProductsListPage.tsx
import React from 'react';
import Link from 'next/link';
import products from 'components/Products/productsData';

const ProductsListPage = () => {
    return (
        <div>
            <h1>Product Listings</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {products.map((product) => (
                    <div key={product.id} style={{ margin: '10px', border: '1px solid #ddd', padding: '10px', width: '200px' }}>
                        <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <Link href={`/products/${product.id}`}>
                            <a>View Details</a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsListPage;
