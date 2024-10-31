// components/Blog/BlogItem.tsx

"use client"; // This is a client component

import Link from 'next/link';

const BlogItem = ({ blog, redirectToGrid = false }) => {
  const targetLink = redirectToGrid ? '/blog' : `/blog/${blog.id}`;

  return (
    <div className="border rounded-lg p-4">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-48 object-cover rounded-md"
      />
      <h2 className="text-2xl font-semibold mt-4">{blog.title}</h2>
      <p className="text-gray-600 mt-2">{blog.excerpt}</p>
      <Link
        href={targetLink}
        className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        {redirectToGrid ? 'Read More' : 'Go to Article'}
      </Link>
    </div>
  );
};

export default BlogItem;
