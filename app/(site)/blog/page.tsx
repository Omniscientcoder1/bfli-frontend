// app/blog/page.tsx

"use client";

import { useEffect, useState } from 'react';
import blogData from 'components/Blog/blogData'; // Correct import path
import Link from 'next/link';

// Define the BlogMetadata type
interface BlogMetadata {
  id: number;
  title: string;
  image: string;
  url: string;
}

const BlogGridPage = () => {
  const [blogs, setBlogs] = useState<BlogMetadata[]>([]); // Define blogs state with BlogMetadata type

  useEffect(() => {
    const fetchMetadata = async () => {
      const metadataPromises = blogData.map(async (blog) => {
        try {
          const res = await fetch(`/api/fetch-metadata?url=${encodeURIComponent(blog.embedCode)}`);
          const data = await res.json();
          return { id: blog.id, title: data.title, image: data.image, url: blog.embedCode } as BlogMetadata;
        } catch (error) {
          console.error('Error fetching metadata:', error);
          return { id: blog.id, title: 'Error', image: '/images/default.png', url: blog.embedCode } as BlogMetadata;
        }
      });

      const metadata = await Promise.all(metadataPromises);
      setBlogs(metadata);
    };

    fetchMetadata();
  }, []);

  return (
    <section className="max-w-6xl mx-auto p-6 pt-24 p-8">
      <h1 className="text-4xl font-bold text-center mb-10">All Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="border rounded-lg p-4">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover rounded-md"
            />
            <h2 className="text-2xl font-semibold mt-4">{blog.title}</h2>
            <Link href={`/blog/${blog.id}`}>
              <span className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Read More
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogGridPage;
