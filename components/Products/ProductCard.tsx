// components/ProductCard.tsx
import { FC } from 'react';

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
}

const ProductCard: FC<ProductCardProps> = ({ title, description, image }) => {
  return (
    <div className="cursor-pointer border rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-md" />
      <h2 className="text-xl font-semibold mt-4">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProductCard;
