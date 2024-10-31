// products/[id]/index.tsx
import React from 'react';
import { useRouter } from 'next/router';
import products from 'components/Products/productsData';

const ProductDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;

    // Find the product by ID
    const product = products.find((prod) => prod.id === parseInt(id as string));

    if (!product) {
        return <p>Product not found</p>;
    }

    return (
        <div>
            <h1>{product.name}</h1>
            <img src={product.image} alt={product.name} style={{ width: '300px', height: 'auto' }} />
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
            {/* Add any other product details here */}
        </div>
    );
};

export default ProductDetailPage;
