import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

// Format date to be more readable
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export const metadata = {
  title: 'Blog | High-Performance Next.js Blog',
  description: 'Read our latest blog posts about Next.js and web development',
};

export default function BlogPage() {
  // Fetch all posts
  const posts = getAllPosts();
  
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Blog Posts</h2>
      <section>
        {/* <article> */}
          <ul className="space-y-8 m-0 list-none">
            {posts.map((post) => (
              <li key={post.id} className="border rounded-lg p-6 shadow-sm list-none hover:shadow-md transition-shadow">
                <article>
                  <h3 className="text-2xl font-semibold mb-2">
                    <Link 
                      href={`/blog/${post.id}`}
                      className="hover:text-blue-600 transition-colors no-underline"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <time 
                    className="text-gray-500 text-sm mb-3 block" 
                    dateTime={post.date}
                  >
                    {formatDate(post.date)}
                  </time>
                  <p className="text-gray-700">{post.excerpt}</p>
                  <div className="mt-4">
                    <Link 
                      href={`/blog/${post.id}`}
                      className="text-blue-600 hover:underline font-medium"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        {/* </article> */}
      </section>
      
    </div>
  );
}