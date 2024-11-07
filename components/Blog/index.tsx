// components/Blog/index.tsx

import blogData from 'components/Blog/blogData';
import BlogItem from './BlogItem';
import Link from 'next/link';

const Blog = () => (
  <section className="max-w-6xl mx-auto p-6">
    <h2 className="text-3xl font-bold text-center mb-6">Blogs</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {blogData.slice(0, 3).map((blog) => (
        <BlogItem key={blog.id} blog={blog} redirectToGrid={true} />
      ))}
    </div>
    <div className="text-center mt-6">
      <Link href="/blog" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Read More Blogs
      </Link>
    </div>
  </section>
);

export default Blog;
