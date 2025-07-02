import { Play, Star, Users } from 'lucide-react';
import { useState } from 'react';

const dataPath =
  process.env.NODE_ENV === 'production'
    ? process.env.PUBLIC_URL + '/data' // In production, serve from the public folder
    : 'src/data'; // During development, reference the source folder


const featuredVideo = {
  // spell-checker: disable-next-line
  title: 'Ayaan Becomes a Hero',
  // spell-checker: disable-next-line
  thumbnail: dataPath + '/AyaanBecomesHero-Cover.jpg', // reference thumbnail from src/data folder
  // spell-checker: disable-next-line
  videoSrc: dataPath + '/Ayaans story.mp4', // reference video from src/data folder
  story: "Based on a real story: Ayaan saves a kitten stuck in a bush, the kitten's owner is so grateful for that Ayaan becomes a hero in his neighborhood.",
  duration: "1 minute",
};

const Demos = () => {
  const demoStories = [
    {
      id: 1,
      title: "Emma's Bedtime Adventure",
      childName: "Emma, Age 5",
      story: "Emma learns to brush her teeth with her magical toothbrush that takes her on adventures to Sparkle Kingdom",
      outcome: "Now brushes teeth without reminders and looks forward to bedtime routine",
      duration: "2 minutes",
      thumbnail: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop&crop=center",
      parentReview: "Emma watches this every night! She's so excited to brush her teeth now. Best purchase ever!",
      parentName: "Sarah M.",
      rating: 5
    },
    {
      id: 2,
      title: "Liam's Sharing Safari",
      childName: "Liam, Age 4",
      story: "Liam goes on a safari adventure where he learns the joy of sharing toys with animal friends",
      outcome: "Significant improvement in sharing toys with siblings and friends",
      duration: "1 minute",
      thumbnail: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400&h=300&fit=crop&crop=center",
      parentReview: "Liam used to struggle with sharing, but after watching his story, he's become so generous!",
      parentName: "Mike T.",
      rating: 5
    },
    {
      id: 3,
      title: "Zoe's Family Day",
      childName: "Zoe, Age 6",
      story: "Zoe and her family (including baby brother Max) save the day in their neighborhood through teamwork",
      outcome: "Better relationship with baby brother and increased family bonding",
      duration: "3 minutes",
      thumbnail: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?w=400&h=300&fit=crop&crop=center",
      parentReview: "This story helped Zoe understand her role as a big sister. She's so proud to help with Max now!",
      parentName: "Jennifer L.",
      rating: 5
    }
  ];

  const [playFeatured, setPlayFeatured] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Featured Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
            {featuredVideo.title}
          </h2>
          <div className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl overflow-hidden">
            {playFeatured ? (
              <video className="w-full" controls autoPlay>
                <source src={featuredVideo.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="relative">
                <img
                  src={featuredVideo.thumbnail}
                  alt={featuredVideo.title}
                  className="w-full object-cover"
                />
                <button
                  onClick={() => setPlayFeatured(true)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 hover:bg-opacity-50 transition-colors"
                >
                  <div className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all cursor-pointer">
                    <Play className="h-10 w-10 text-purple-600" />
                  </div>
                </button>
              </div>
            )}
          </div>
          <div className="max-w-4xl mx-auto mt-4 text-center">
            <p className="text-gray-600 mb-2">{featuredVideo.story}</p>
            <p className="text-gray-800 font-semibold">{featuredVideo.duration}</p>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Demo Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped other children learn, grow, and create magical memories through personalized storytelling.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {demoStories.map((story) => (
            <div key={story.id} className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
              {/* Video Thumbnail */}
              <div className="relative">
                <img
                  src={story.thumbnail}
                  alt={story.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-all cursor-pointer">
                    <Play className="h-8 w-8 text-purple-600" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-purple-600 text-white px-2 py-1 rounded-full text-sm font-semibold">
                  {story.duration}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{story.title}</h3>
                <p className="text-purple-600 font-semibold mb-3">{story.childName}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-1">Story:</h4>
                  <p className="text-gray-600 text-sm">{story.story}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-1">Outcome:</h4>
                  <p className="text-green-600 text-sm font-medium">{story.outcome}</p>
                </div>

                {/* Parent Review */}
                <div className="border-t pt-4 mt-4">
                  <div className="flex items-center mb-2">
                    <div className="flex space-x-1">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">- {story.parentName}</span>
                  </div>
                  <p className="text-gray-600 text-sm italic">"{story.parentReview}"</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Privacy Notice */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-12">
          <div className="flex items-start space-x-3">
            <div className="bg-blue-500 rounded-full p-2 flex-shrink-0">
              <Users className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Privacy Protection Notice</h3>
              <p className="text-blue-700">
                All demo stories shown here have been created with full parental consent and approval.
                We protect every child's privacy and only share examples when families are happy to help
                other parents see the magic of personalized storytelling. Your child's story will be
                completely private unless you choose to share it.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Create Your Child's Story?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Join hundreds of happy families who've given their children the gift of being their own hero!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Start Your Story
            </button>
            <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105">
              Contact Us First
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demos;
