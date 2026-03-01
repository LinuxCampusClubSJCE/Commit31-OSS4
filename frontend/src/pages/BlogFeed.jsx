import PostCard from '../components/PostCard';

const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with React Hooks',
    excerpt: 'Learn how to use React Hooks to manage state and side effects in your functional components. This comprehensive guide covers useState, useEffect, and custom hooks.',
    author: 'John Doe',
    timestamp: '2 hours ago',
    likes: 42,
    comments: 15,
  },
  {
    id: 2,
    title: 'Building Responsive Web Applications',
    excerpt: 'Discover the best practices for creating responsive web applications that work seamlessly across all devices and screen sizes.',
    author: 'Jane Smith',
    timestamp: '5 hours ago',
    likes: 38,
    comments: 8,
  },
  {
    id: 3,
    title: 'Introduction to TypeScript',
    excerpt: 'A beginner-friendly introduction to TypeScript and how it can improve your JavaScript development experience with type safety.',
    author: 'Mike Johnson',
    timestamp: '1 day ago',
    likes: 56,
    comments: 22,
  },
  {
    id: 4,
    title: 'CSS Grid vs Flexbox',
    excerpt: 'Understanding when to use CSS Grid versus Flexbox for your layout needs. Both have their strengths and use cases.',
    author: 'Sarah Williams',
    timestamp: '2 days ago',
    likes: 29,
    comments: 11,
  },
  {
    id: 5,
    title: 'State Management in 2024',
    excerpt: 'An overview of the current state of state management libraries in the React ecosystem. From Redux to Zustand and beyond.',
    author: 'David Brown',
    timestamp: '3 days ago',
    likes: 67,
    comments: 19,
  },
  {
    id: 6,
    title: 'Performance Optimization Tips',
    excerpt: 'Practical tips and techniques to optimize your web application performance and improve user experience.',
    author: 'Emily Davis',
    timestamp: '4 days ago',
    likes: 45,
    comments: 14,
  },
];

function BlogFeed() {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8 text-center">
          Blog Posts
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              author={post.author}
              timestamp={post.timestamp}
              likes={post.likes}
              comments={post.comments}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogFeed;
