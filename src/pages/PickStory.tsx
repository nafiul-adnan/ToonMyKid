
import { Link } from 'react-router-dom';
import { Star, Sparkles, Plus, BookOpen } from 'lucide-react';
import { useState } from 'react';

const PickStory = () => {
  const [expandedStory, setExpandedStory] = useState<number | null>(null);

  const demoStories = [
    {
      id: 1,
      title: "Emma's Bedtime Adventure",
      description: "Learn to brush teeth with a magical toothbrush adventure",
      theme: "Habit Building",
      themeValue: "brushing-teeth",
      duration: "2 minutes",
      thumbnail: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop",
      color: "from-purple-500 to-pink-500",
      story: "Once upon a time, Emma discovered a magical toothbrush that glowed with rainbow colors. Every night, the toothbrush would take her on amazing adventures to the Land of Sparkly Teeth, where she met friendly tooth fairies who taught her the secret of keeping teeth healthy and strong. With each brush, Emma's teeth became shinier and she felt more confident. The tooth fairies showed her how brushing wasn't just cleaning - it was preparing for the next day's adventures and dreams!"
    },
    {
      id: 2,
      title: "Liam's Sharing Safari",
      description: "Discover the joy of sharing toys with animal friends",
      theme: "Social Skills",
      themeValue: "sharing-toys",
      duration: "1 minute",
      thumbnail: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop",
      color: "from-green-500 to-teal-500",
      story: "In the magical Safari Park, Liam met a lonely baby elephant who had no toys to play with. At first, Liam didn't want to share his favorite toy truck, but when he saw how sad the elephant looked, his heart felt warm. He decided to share, and something amazing happened - the toy became even more fun when played with together! Soon, all the safari animals joined in, and Liam learned that sharing doesn't mean losing your toys, it means making more friends and having more fun!"
    },
    {
      id: 3,
      title: "Zoe's Family Day",
      description: "Save the neighborhood through teamwork with family",
      theme: "Family Bonding",
      themeValue: "family-bonding",
      duration: "3 minutes",
      thumbnail: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop",
      color: "from-blue-500 to-indigo-500",
      story: "When the neighborhood playground was covered in mysterious purple goo, Zoe knew she needed her family's help. Together with Mom's creative ideas, Dad's strength, and her little brother's keen eye for details, they discovered the goo came from friendly aliens who just wanted to play! The family worked as a team to create the most amazing intergalactic playground ever. Zoe learned that families are strongest when everyone contributes their special talents, and the best adventures happen when families stick together."
    },
    {
      id: 4,
      title: "Alex's Courage Quest",
      description: "Overcome fears and build confidence through adventure",
      theme: "Confidence Building",
      themeValue: "confidence-building",
      duration: "2 minutes",
      thumbnail: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&h=300&fit=crop",
      color: "from-orange-500 to-red-500",
      story: "Alex was afraid of the dark forest behind his house, until he discovered he had a special power - a glowing heart that lit up when he was brave. Each step into the forest made his heart glow brighter, and he realized that being scared was okay, but being brave meant taking one step forward anyway. In the forest, he helped lost forest creatures find their way home, and with each good deed, his confidence grew. Alex learned that courage isn't about not being afraid - it's about helping others even when you feel scared."
    },
    {
      id: 5,
      title: "Maya's Learning Journey",
      description: "Make learning fun with magical educational adventures",
      theme: "Educational",
      themeValue: "custom",
      duration: "2 minutes",
      thumbnail: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=400&h=300&fit=crop",
      color: "from-emerald-500 to-cyan-500",
      story: "Maya's backpack came alive one morning and whisked her away to the Learning Lands, where math problems turned into treasure hunts and reading became magical spells. She met the Wise Number Owl who showed her that numbers were everywhere - in flower petals, in the rhythm of her heartbeat, in the pattern of stars. Maya discovered that learning wasn't boring homework, but the key to understanding the magical world around her. Every new thing she learned gave her a new superpower to help others."
    },
    {
      id: 6,
      title: "Sam's Friendship Story",
      description: "Learn about kindness and making new friends",
      theme: "Social Skills",
      themeValue: "custom",
      duration: "1 minute",
      thumbnail: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=400&h=300&fit=crop",
      color: "from-pink-500 to-rose-500",
      story: "Sam felt lonely at the new school until he discovered that his smile had magical powers. Every time he smiled at someone, a tiny rainbow appeared that only kind hearts could see. Soon, Sam was using his smile-rainbows to help other kids who looked sad or left out. He learned that making friends wasn't about being the coolest or funniest - it was about being kind and making others feel special. By the end of the week, Sam had created a whole rainbow bridge of friendships across his classroom."
    }
  ];

  const toggleStory = (id: number) => {
    setExpandedStory(expandedStory === id ? null : id);
  };

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
              to="/contact?theme=custom" 
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
                  
                  {/* Story Text Toggle */}
                  <div className="mb-4">
                    <button
                      onClick={() => toggleStory(story.id)}
                      className="flex items-center space-x-2 text-sky-600 hover:text-sky-700 font-medium"
                    >
                      <BookOpen className="h-4 w-4" />
                      <span>{expandedStory === story.id ? 'Hide Story' : 'Read Story'}</span>
                    </button>
                    
                    {expandedStory === story.id && (
                      <div className="mt-3 p-4 bg-sky-50 rounded-lg">
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {story.story}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <Link 
                      to={`/contact?theme=${story.themeValue}`}
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
