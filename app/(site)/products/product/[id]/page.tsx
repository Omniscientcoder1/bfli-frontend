// // app/products/product/[id]/page.tsx
// import { useRouter } from 'next/navigation';

// const ProductPage = ({ params }: { params: { id: string } }) => {
//   const { id } = params;  // Access dynamic route parameter

//   // Replace the following with real data fetching
//   const product = { title: `Product ${id}`, description: 'Product details', image: '/images/product.jpg' };

//   return (
//     <div className="p-8">
//       <img src={product.image} alt={product.title} className="w-full h-60 object-cover rounded-md" />
//       <h1 className="text-3xl font-bold mt-4">{product.title}</h1>
//       <p className="text-gray-600 mt-2">{product.description}</p>
//     </div>
//   );
// };

// export default ProductPage;

// app/products/product/[id]/page.tsx
import { FC } from 'react';

const ProductPage: FC<{ params: { id: string } }> = ({ params }) => {
  const { id } = params;
 // Add other Category 1 products here
  const productData = {
    category1: {
      '1': {
        title: 'MUDARABAH TDR',
        description: `Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:

          Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki exceptuer Basset hound. Zürich sleepy perfect consectetur.`,
        image: '/images/product-placeholder.jpg',
      },
      '2': {
        title: 'MUDARABAH MPS',
        description: `Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:

          Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki exceptuer Basset hound. Zürich sleepy perfect consectetur.`,
        image: '/images/product-placeholder.jpg',
      },
      '3': {
      title: 'MUDARABHA MONTHLY DPS',
      description: `Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:

        Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki exceptuer Basset hound. Zürich sleepy perfect consectetur.`,
      image: '/images/product-placeholder.jpg',
    },
    '4': {
      title: 'MUDARABHA HAJJ SCHEME',
      description: `Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:

        Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki exceptuer Basset hound. Zürich sleepy perfect consectetur.`,
      image: '/images/product-placeholder.jpg',
    },
    '5': {
      title: 'MUDARABHA UMRAH SCHEME',
      description: `Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:

        Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki exceptuer Basset hound. Zürich sleepy perfect consectetur.`,
      image: '/images/product-placeholder.jpg',
    },
    '6': {
      title: 'MUDARABAH RETIREMENT PLAN',
      description: `Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:

        Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki exceptuer Basset hound. Zürich sleepy perfect consectetur.`,
      image: '/images/product-placeholder.jpg',
    },
    '7': {
      title: 'MUDARABAH CASH WAQF ',
      description: `Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look:

        Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate content. Qui international first-class nulla ut. Punctual adipisicing, essential lovely queen tempor eiusmod irure. Exclusive izakaya charming Scandinavian impeccable aute quality of life soft power pariatur Melbourne occaecat discerning. Qui wardrobe aliquip, et Porter destination Toto remarkable officia Helsinki exceptuer Basset hound. Zürich sleepy perfect consectetur.`,
      image: '/images/product-placeholder.jpg',
    },
     
    },
    category2: {
      '8': {
        title: 'AUTO FINANCE ',
        description: `This is the description for MUDARABAH EDUCATION PLAN, a specialized product that offers unique benefits for education funding.`,
        image: '/images/education-plan.jpg',
      },
      '9': {
        title: 'HOME FINANCE',
        description: `MUDARABAH SAVINGS SCHEME provides a reliable saving option with profit-sharing benefits in compliance with Islamic finance principles.`,
        image: '/images/savings-scheme.jpg',
      },
      '10': {
        title: 'INDUSTRIAL FINANCE',
        description: `MUDARABAH FIXED DEPOSIT is designed for customers seeking secure, long-term investment with fixed profit-sharing ratios.`,
        image: '/images/fixed-deposit.jpg',
      },
      '11': {
        title: 'WORKING CAPITAL FINANCE',
        description: `MUDARABAH FIXED DEPOSIT is designed for customers seeking secure, long-term investment with fixed profit-sharing ratios.`,
        image: '/images/fixed-deposit.jpg',
      },
      '12': {
        title: 'CAPITAL, MACHINERIES & EXPANSION FINANCE ',
        description: `MUDARABAH FIXED DEPOSIT is designed for customers seeking secure, long-term investment with fixed profit-sharing ratios.`,
        image: '/images/fixed-deposit.jpg',
      },
      '13': {
        title: 'AGRICULTURE INVESTMENT',
        description: `MUDARABAH FIXED DEPOSIT is designed for customers seeking secure, long-term investment with fixed profit-sharing ratios.`,
        image: '/images/fixed-deposit.jpg',
      },
      '14': {
        title: 'WOMEN ENTREPRENEUR',
        description: `MUDARABAH FIXED DEPOSIT is designed for customers seeking secure, long-term investment with fixed profit-sharing ratios.`,
        image: '/images/fixed-deposit.jpg',
      },
      '15': {
        title: 'NEW ENTREPRENEUR',
        description: `MUDARABAH FIXED DEPOSIT is designed for customers seeking secure, long-term investment with fixed profit-sharing ratios.`,
        image: '/images/fixed-deposit.jpg',
      },
      '16': {
        title: 'DOCTORS FINANCE',
        description: `MUDARABAH FIXED DEPOSIT is designed for customers seeking secure, long-term investment with fixed profit-sharing ratios.`,
        image: '/images/fixed-deposit.jpg',
      },
      '17': {
        title: 'MANUFACTURING & TRADING SERVICE FINANCE',
        description: `MUDARABAH FIXED DEPOSIT is designed for customers seeking secure, long-term investment with fixed profit-sharing ratios.`,
        image: '/images/fixed-deposit.jpg',
      },
    },
  };

  // Retrieve product data by searching both categories
  const product = productData.category1[id] || productData.category2[id] || { title: 'Product Not Found', description: '', image: '' };

  return (
    <div className="pt-24 p-8 flex flex-col lg:flex-row gap-8">
      <div className="lg:w-2/3">
        <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
        <p className="text-gray-700 mb-8 whitespace-pre-line">{product.description}</p>
        <div className="flex gap-8">
          {/* Icons and labels */}
          {/* <div className="flex flex-col items-center">
            <img src="/icons/features.svg" alt="Features" className="w-12 h-12 mb-2" />
            <p className="text-xs text-center">FEATURES AND BENEFITS</p>
          </div> */}
          {/* Add other icons here similarly */}
        </div>
      </div>
      <div className="lg:w-1/3 bg-gray-100 rounded-lg p-8 flex items-center justify-center">
        <img src={product.image} alt={product.title} className="w-full h-auto object-cover rounded-md" /> 
      </div>
    </div>
  );
};

export default ProductPage;
