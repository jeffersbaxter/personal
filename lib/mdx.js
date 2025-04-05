import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

/**
 * Get all MDX post files from the content directory
 */
export function getPostFiles() {
  return fs.readdirSync(postsDirectory).filter(file => file.endsWith('.mdx'));
}

/**
 * Extract frontmatter from MDX file
 */
export function getPostData(filename) {
  // Create id from filename (remove .mdx extension)
  const id = filename.replace(/\.mdx$/, '');
  
  // Read file content
  const filePath = path.join(postsDirectory, filename);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Extract frontmatter
  const { data, content } = matter(fileContent);

  return {
    id,
    content,
    fileContent,
    ...data,
  };
}

export async function getPostByName(filename) {
  // Create id from filename (remove .mdx extension)
  const id = filename.replace(/\.mdx$/, '');
  
  // Read file content
  const filePath = path.join(postsDirectory, filename);
  const fileContent = await fs.readFileSync(filePath, 'utf8');
  
  // Extract frontmatter
  const { data, content } = matter(fileContent);
  console.log(`45 ${data}`);
  return fileContent;
}

/**
 * Get all posts with metadata
 */
export function getAllPosts() {
  const files = getPostFiles();
  
  const posts = files.map(filename => {
    const { id, content, ...data } = getPostData(filename);

    return {
      id,
      ...data,
    };
  });
  
  // Sort posts by date (newest first)
  return posts.sort((a, b) => (new Date(b.date) - new Date(a.date)));
}

/**
 * Get a post by id
 */
export function getPostById(id) {
  try {
    const filePath = path.join(postsDirectory, `${id}.mdx`);
    
    // If file doesn't exist, return null
    if (!fs.existsSync(filePath)) {
      return null;
    }
    // Get post data including content
    return getPostData(`${id}.mdx`);
  } catch (error) {
    console.error(`Error getting post ${id}:`, error);
    return null;
  }
}

/**
 * Get all post IDs for static path generation
 */
export function getAllPostIds() {
  return getPostFiles().map(filename => filename.replace(/\.mdx$/, ''));
}