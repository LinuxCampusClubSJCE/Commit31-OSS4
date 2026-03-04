const Home = () => {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center px-4">
        {/* Background glow effect */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
        </div>

        {/* Hero content */}
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to Student Developer Platform
          </h1>

          <p className="text-[#94A3B8] text-lg mb-8 max-w-2xl mx-auto">
            Discover amazing stories, tutorials, and insights from the tech
            community
          </p>

          {/* TODO: Replace with router Links once react-router-dom is wired */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <a href="/register"
              className="inline-flex items-center justify-center bg-[#00D4FF] hover:bg-cyan-400 transition-colors text-black font-semibold px-8 py-3 rounded-lg">
              Get Started
            </a>
            <a href="/blogs"
              className="inline-flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-black transition-colors font-semibold px-8 py-3 rounded-lg" >
              Explore Blogs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;