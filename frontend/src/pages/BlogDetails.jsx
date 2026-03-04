import { useState } from 'react';
import { useParams } from 'react-router-dom';

// TODO: fetch blog data from API using `id` when backend is ready
const BLOG_DATA = {
  title: "Building Your First Web Application: A Beginner's Guide",
  author: {
    name: 'Jane Developer',
    initials: 'JD',
    date: 'Dec 15, 2024',
    readTime: '5 min read',
  },
  // structured content blocks — supports paragraph, heading, quote, code
  content: [
    {
      type: 'paragraph',
      text: "Starting your journey as a web developer can feel overwhelming, but with the right approach and mindset, you can build amazing applications in no time. This guide will walk you through the fundamental concepts you need to understand to get started with web development.",
    },
    {
      type: 'heading',
      text: 'Start With the Fundamentals',
    },
    {
      type: 'paragraph',
      text: "One of the most important things to remember as a beginner is that every expert was once a beginner too. Don't get discouraged if concepts seem confusing at first — they will click with practice and repetition. The key is to start with small projects, build incrementally, and always be curious about how things work under the hood.",
    },
    {
      type: 'quote',
      text: "Master the fundamentals. The rest is just details.",
      attribution: 'Clean Code Principles',
    },
    {
      type: 'heading',
      text: 'Pick a Path, Then Go Deep',
    },
    {
      type: 'paragraph',
      text: "Focus on HTML, CSS, and JavaScript before jumping into frameworks like React or Vue. Once you have a solid grasp of the basics, learning frameworks becomes much easier because you understand the underlying principles.",
    },
    {
      type: 'code',
      text: `// Your first React component
function Hello({ name }) {
  return <h1>Hello, {name}!</h1>;
}`,
    },
    {
      type: 'paragraph',
      text: "Finally, remember that building a portfolio of real projects is far more valuable than completing countless tutorials. Contribute to open source, build projects that solve real problems, and share your work with the community.",
    },
  ],
};

// TODO: replace with real comments fetched from API using blog `id`
const SAMPLE_COMMENTS = [
  {
    id: 1,
    initials: 'AS',
    name: 'Alex Smith',
    date: 'Dec 16, 2024',
    text: 'Great guide! This really helped me understand the basics. Looking forward to more posts like this.',
  },
  {
    id: 2,
    initials: 'MJ',
    name: 'Maria Johnson',
    date: 'Dec 17, 2024',
    text: 'The section about fundamentals first was really helpful. I was rushing to learn React but this convinced me to slow down.',
  },
  {
    id: 3,
    initials: 'CW',
    name: 'Chris Wilson',
    date: 'Dec 18, 2024',
    text: 'Building a portfolio is so important. I wish I had focused on that earlier in my career. Solid advice here!',
  },
];

// renders each content block by type — add new types here as content grows
function ContentBlock({ block, index }) {
  switch (block.type) {
    case 'paragraph':
      return (
        <p className="text-[#94A3B8] text-base leading-relaxed mb-6">
          {block.text}
        </p>
      );
    case 'heading':
      return (
        <h2 className="text-xl font-bold text-[#E2E8F0] mt-8 mb-3">
          {block.text}
        </h2>
      );
    case 'quote':
      return (
        <blockquote className="border-l-4 border-[#00D4FF] bg-[#0B1F3B] rounded-r-lg px-5 py-4 my-6">
          <p className="text-[#E2E8F0] italic leading-relaxed mb-1">{block.text}</p>
          {block.attribution && (
            <p className="text-[#94A3B8] text-sm">— {block.attribution}</p>
          )}
        </blockquote>
      );
    case 'code':
      return (
        <pre className="bg-[#020817] border border-[#1E3A8A] rounded-lg px-5 py-4 my-6 overflow-x-auto text-sm text-[#E2E8F0] font-mono leading-relaxed">
          <code>{block.text}</code>
        </pre>
      );
    default:
      return null;
  }
}

export default function BlogDetails() {
  const { id } = useParams(); // will drive API fetch when backend is connected

  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42);
  const [commentText, setCommentText] = useState('');

  const handleLikeToggle = () => {
    setIsLiked((prev) => !prev);
    setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };

  return (
    <div style={{ backgroundColor: '#0F172A' }} className="min-h-screen">

      {/* ── Blog Header ── */}
      <header className="bg-[#0B1F3B] border-b border-[#1E3A8A] px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#E2E8F0] mb-8 leading-tight">
            {BLOG_DATA.title}
          </h1>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#1E3A8A] flex items-center justify-center text-[#00D4FF] font-bold text-sm flex-shrink-0">
              {BLOG_DATA.author.initials}
            </div>
            <div>
              <p className="text-[#E2E8F0] font-semibold text-sm">{BLOG_DATA.author.name}</p>
              <p className="text-[#94A3B8] text-xs">{BLOG_DATA.author.date} · {BLOG_DATA.author.readTime}</p>
            </div>
          </div>
        </div>
      </header>

      {/* ── Blog Content ── */}
      <main className="px-4 py-10">
        <article className="max-w-3xl mx-auto">
          {BLOG_DATA.content.map((block, i) => (
            <ContentBlock key={i} block={block} index={i} />
          ))}

          {/* ── Like Button ── */}
          <div className="mt-8 pt-6 border-t border-[#1E3A8A]">
            <button
              onClick={handleLikeToggle}
              className="flex flex-row items-center gap-2 group transition-colors duration-200"
              aria-label={isLiked ? 'Unlike post' : 'Like post'}
            >
              <svg
                className={`w-6 h-6 transition-colors duration-200 ${
                  isLiked ? 'fill-[#00D4FF]' : 'fill-[#94A3B8] group-hover:fill-[#00D4FF]'
                }`}
                viewBox="0 0 24 24"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
              <span
                className={`text-sm font-medium transition-colors duration-200 ${
                  isLiked ? 'text-[#00D4FF]' : 'text-[#94A3B8] group-hover:text-[#00D4FF]'
                }`}
              >
                {likeCount} Likes
              </span>
            </button>
          </div>
        </article>
      </main>

      {/* ── Comments Section ── */}
      <section className="px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          <hr className="border-[#1E3A8A] mb-8" />

          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-6">
            Comments{' '}
            <span className="text-[#94A3B8] text-lg font-normal">
              ({SAMPLE_COMMENTS.length})
            </span>
          </h2>

          {/* TODO: wire submit to POST /api/blogs/:id/comments when backend is ready */}
          <div className="bg-[#0B1F3B] rounded-xl p-6 border border-[#1E3A8A] mb-8">
            <h3 className="text-base font-semibold text-[#E2E8F0] mb-3">Add a Comment</h3>
            <textarea
              placeholder="Share your thoughts..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="w-full bg-[#0F172A] text-[#E2E8F0] border border-[#1E3A8A] rounded-lg p-4 placeholder-[#94A3B8] focus:outline-none focus:border-[#00D4FF] focus:ring-1 focus:ring-[#00D4FF] resize-none text-sm"
              rows={4}
              aria-label="Write a comment"
            />
            <div className="mt-3">
              <button
                disabled={!commentText.trim()}
                className="bg-[#00D4FF] text-black font-semibold py-2 px-6 rounded-lg hover:bg-cyan-400 active:scale-95 transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Post Comment
              </button>
            </div>
          </div>

          {/* Comment list */}
          <div>
            {SAMPLE_COMMENTS.map((comment, i) => (
              <div
                key={comment.id}
                className={`flex flex-row items-start gap-4 py-5 ${
                  i < SAMPLE_COMMENTS.length - 1 ? 'border-b border-[#1E3A8A]' : ''
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-[#1E3A8A] flex items-center justify-center text-[#00D4FF] font-bold text-sm flex-shrink-0">
                  {comment.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-row items-center gap-2 mb-1">
                    <p className="text-[#E2E8F0] font-semibold text-sm">{comment.name}</p>
                    <span className="text-[#94A3B8] text-xs">{comment.date}</span>
                  </div>
                  <p className="text-[#94A3B8] text-sm leading-relaxed">{comment.text}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
