// app/products/category/[category]/page.tsx
import ProductGrid from '@/components/Products/ProductGrid';

const CategoryPage = ({ params }: { params: { category: string } }) => {
  const { category } = params;

  // Map category parameter to display titles
  const categoryTitle = category === 'category1' 
    ? 'Islamic Deposit Products' 
    : category === 'category2' 
    ? 'Islamic Investment Products' 
    : 'Products';

  return (
    <div className="pt-24 p-8">
      <h2 className="text-3xl font-bold mb-8">{categoryTitle}</h2>
      <ProductGrid category={category} />
    </div>
  );
};

export default CategoryPage;
