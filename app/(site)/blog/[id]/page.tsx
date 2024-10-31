// app/blog/[id]/page.tsx

"use client";

import { useParams } from 'next/navigation';
import blogData from 'components/Blog/blogData';

// Define the type for each blog entry
interface BlogDataItem {
  id: number;
  title: string;
  embedCode: string;
}

const BlogDetailPage = () => {
  const params = useParams();
  const blogId = params.id ? parseInt(params.id as string, 10) : null;
  const blog = blogId !== null ? blogData.find((b: BlogDataItem) => b.id === blogId) : undefined;

  if (!blog) {
    return <p>Blog not found!</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">{blog.title}</h1>
      <div
        className="mt-4"
        dangerouslySetInnerHTML={{ __html: blog.embedCode }} // Renders the embed code safely
      />
    </div>
  );
};

export default BlogDetailPage;
