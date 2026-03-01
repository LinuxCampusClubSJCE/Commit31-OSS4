function PostCard({ title, excerpt, author, timestamp, likes = 0, comments = 0 }) {
  return (
    <div className="bg-secondary rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-700">
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#E2E8F0] mb-2">{title}</h3>
        <p className="text-[#E2E8F0] mb-4 line-clamp-3 opacity-80">{excerpt}</p>
        
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-white text-sm font-medium">
                {author.charAt(0).toUpperCase()}
              </span>
            </div>
            <span className="text-muted">{author}</span>
          </div>
          
          <span className="text-muted">{timestamp}</span>
        </div>
        
        <div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-600">
          <button className="flex items-center space-x-1 text-muted hover:text-primary transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" 
              />
            </svg>
            <span>{likes}</span>
          </button>
          
          <button className="flex items-center space-x-1 text-muted hover:text-primary transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" 
              />
            </svg>
            <span>{comments}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
