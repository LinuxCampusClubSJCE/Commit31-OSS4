import { Link } from 'react-router-dom';

// TODO: replace with API call — GET /api/users/:id when backend is ready
const USER_DATA = {
  id: 1,
  name: "Jane Developer",
  initials: "JD",
  role: "Full Stack Developer",
  location: "Mysuru, India",
  bio: "Passionate developer who loves building open source tools and sharing knowledge with the community. Currently focused on full stack web development and contributing to student-led projects.",
  skills: ["React", "JavaScript", "TypeScript", "Node.js", "Git", "Tailwind CSS", "Python", "REST APIs"],
  projects: [
    { id: 1, name: "Portfolio Site", description: "Personal portfolio built with React", githubUrl: "#" },
    { id: 2, name: "Blog App", description: "Full stack blog with Node.js backend", githubUrl: "#" },
    { id: 3, name: "Weather App", description: "Weather dashboard using OpenWeather API", githubUrl: "#" },
  ],
  recentPosts: [
    { id: 1, title: "Getting Started with React Hooks", date: "Dec 15, 2024" },
    { id: 2, title: "Why I Love Open Source", date: "Dec 10, 2024" },
  ]
}

function Profile() {
  const user = USER_DATA;

  return (
    <div className="min-h-screen bg-[#0F172A] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        
        {/* Profile Header */}
        <div className="bg-[#0B1F3B] rounded-xl p-6 border border-[#1E3A8A] mb-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            {/* Avatar with Initials */}
            <div className="w-24 h-24 bg-[#1E3A8A] rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-3xl font-bold text-[#00D4FF]">{user.initials}</span>
            </div>
            
            {/* Profile Info */}
            <div className="flex-1 text-center sm:text-left">
              <h1 className="text-3xl font-bold text-[#E2E8F0] mb-1">{user.name}</h1>
              <p className="text-[#00D4FF] font-semibold text-lg mb-1">{user.role}</p>
              <p className="text-[#94A3B8] mb-4">📍 {user.location}</p>
              
              {/* Edit Profile Button */}
              <button className="px-6 py-2 border border-[#00D4FF] text-[#00D4FF] rounded-lg font-medium hover:bg-[#00D4FF] hover:text-black transition duration-200">
                Edit Profile
              </button>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-[#0B1F3B] rounded-xl p-6 border border-[#1E3A8A] mb-8">
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-4">About</h2>
          <p className="text-[#94A3B8] leading-relaxed">{user.bio}</p>
        </div>

        {/* Skills Section */}
        <div className="bg-[#0B1F3B] rounded-xl p-6 border border-[#1E3A8A] mb-8">
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-4">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-[#1E3A8A] text-[#E2E8F0] rounded-full px-3 py-1 text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="bg-[#0B1F3B] rounded-xl p-6 border border-[#1E3A8A] mb-8">
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-4">Projects</h2>
          <div className="grid gap-4">
            {user.projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#0F172A] rounded-lg p-4 border border-[#1E3A8A] hover:border-[#00D4FF] transition duration-200"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-[#E2E8F0]">{project.name}</h3>
                  {/* TODO: replace with routing to project details page */}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00D4FF] hover:underline font-medium text-sm mt-2 sm:mt-0"
                  >
                    View on GitHub →
                  </a>
                </div>
                <p className="text-[#94A3B8] text-sm">{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Posts Section */}
        {/* TODO: fetch recent posts from API — GET /api/users/:id/posts when backend is ready */}
        <div className="bg-[#0B1F3B] rounded-xl p-6 border border-[#1E3A8A]">
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-4">Recent Posts</h2>
          <div className="space-y-3">
            {user.recentPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="block p-4 rounded-lg hover:bg-[#1E3A8A] transition duration-200 group"
              >
                <h3 className="text-[#E2E8F0] font-semibold group-hover:text-[#00D4FF] transition duration-200">
                  {post.title}
                </h3>
                <p className="text-[#94A3B8] text-sm mt-1">{post.date}</p>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default Profile;
