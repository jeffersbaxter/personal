import { getPostById, getAllPostIds } from '@/lib/mdx';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const postIds = getAllPostIds();
  return postIds.map(id => ({ id }));
}

// Generate metadata for each blog post dynamically
export async function generateMetadata({ params }) {
  const p = await params;
  const post = getPostById(p.id);
  
  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'The requested blog post could not be found'
    };
  }

  return {
    title: `${post.title} | High-Performance Next.js Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const p = await params;
  const post = getPostById(p.id);
  
  // Handle case where post is not found
  if (!post) {
    notFound();
  }

  const data = await compileMDX({
    source: post.fileContent,
    options: {
      parseFrontmatter: true
    }
  });
  
  return (
    <div className="blog-post">      
      <div className="prose max-w-none">
        {data.content}
      </div>
      <div className="pd-13 mt-12 pt-4 border-t">
        <Link 
          href="/blog"
          className="text-blue-600 hover:underline font-medium"
        >
          ← Back to all posts
        </Link>
      </div>
    </div>
  );
}