import { Link } from 'react-router-dom';
import { Star, Sparkles, Plus } from 'lucide-react';

const PickStory = () => {
  const demoStories = [
    {
      id: 1,
      title: "Emma's Bedtime Adventure",
      description: "Learn to brush teeth with a magical toothbrush adventure",
      theme: "Habit Building",
      duration: "2 minutes",
      thumbnail: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 2,
      title: "Liam's Sharing Safari",
      description: "Discover the joy of sharing toys with animal friends",
      theme: "Social Skills",
      duration: "1 minute",
      thumbnail: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop",
      color: "from-green-500 to-teal-500"
    },
    {
      id: 3,
      title: "Zoe's Family Day",
      description: "Save the neighborhood through teamwork with family",
      theme: "Family Bonding",
      duration: "3 minutes",
      thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop",
      color: "from-blue-500 to-indigo-500"
    },
    {
      id: 4,
      title: "Alex's Courage Quest",
      description: "Overcome fears and build confidence through adventure",
      theme: "Confidence Building",
      duration: "2 minutes",
      thumbnail: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Maya's Learning Journey",
      description: "Make learning fun with magical educational adventures",
      theme: "Educational",
      duration: "2 minutes",
      thumbnail: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
      color: "from-emerald-500 to-cyan-500"
    },
    {
      id: 6,
      title: "Sam's Friendship Story",
      description: "Learn about kindness and making new friends",
      theme: "Social Skills",
      duration: "1 minute",
      thumbnail: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=400&h=300&fit=crop",
      color: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Pick Your Story
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our collection of proven stories or create something completely custom for your child.
          </p>
        </div>

        {/* Custom Story Option */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-sky-500 to-indigo-500 rounded-2xl p-8 text-white text-center shadow-xl transform hover:scale-105 transition-all duration-300">
            <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Sparkles className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Create a Custom Story</h2>
            <p className="text-xl mb-6 opacity-90">
              Work with our expert story-writers to create a completely unique adventure for your child
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-sky-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Create Custom Story</span>
            </Link>
          </div>
        </div>

        {/* Existing Stories Grid */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Or Choose from Our Popular Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demoStories.map((story) => (
              <div key={story.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                {/* Story Image */}
                <div className="relative">
                  <img 
                    src={story.thumbnail} 
                    alt={story.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {story.duration}
                  </div>
                  <div className={`absolute top-4 right-4 bg-gradient-to-r ${story.color} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {story.theme}
                  </div>
                </div>

                {/* Story Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{story.title}</h3>
                  <p className="text-gray-600 mb-4">{story.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Link 
                      to="/contact" 
                      className={`bg-gradient-to-r ${story.color} text-white font-bold py-2 px-6 rounded-full hover:opacity-90 transition-all duration-300 transform hover:scale-105`}
                    >
                      Choose This Story
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-white rounded-2xl p-8 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-6">
            Contact us to begin creating your child's personalized story adventure!
          </p>
          <Link 
            to="/contact" 
            className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-bold py-3 px-8 rounded-full hover:from-sky-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PickStory;
