
import { Link } from 'react-router-dom';
import { Star, Shield, Heart, Users, Play, ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-pink-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
              Your Child is the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Hero</span> of Their Story!
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Personalized cartoon stories featuring your child as the main character. Help them learn habits, build confidence, and create lifelong memories through the magic of storytelling!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/demos" 
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-4 px-8 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>Watch Demo Stories</span>
              </Link>
              <Link 
                to="/pricing" 
                className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full border-2 border-purple-500 hover:bg-purple-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>View Pricing</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="bg-red-100 border border-red-300 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-red-800 font-semibold">🎉 Limited Time: 60% OFF all packages!</p>
              <p className="text-red-600 text-sm">Offer ends July 15th</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose StoryHeroes?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We create more than just videos - we create experiences that shape your child's growth and imagination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fully Personalized</h3>
              <p className="text-gray-600">
                Your child becomes the hero of their story with their name, appearance, and favorite themes woven throughout the narrative.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-green-50 hover:bg-green-100 transition-colors duration-300">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Privacy Protected</h3>
              <p className="text-gray-600">
                We take minimal information, create your story, and delete all data immediately after delivery. Your child's privacy is sacred.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-pink-50 hover:bg-pink-100 transition-colors duration-300">
              <div className="bg-gradient-to-r from-pink-500 to-red-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Educational & Fun</h3>
              <p className="text-gray-600">
                Help your child learn important habits, build relationships, and develop confidence through engaging storytelling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Perfect for Every Occasion
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From birthday surprises to habit building, our personalized stories create magical moments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "🎂 Birthday Gifts", description: "The ultimate birthday surprise that makes them the hero of their special day!" },
              { title: "🎄 Holiday Magic", description: "Christmas, Halloween, or any holiday becomes more magical with personalized adventures." },
              { title: "🦷 Habit Building", description: "Teach brushing teeth, sharing, or any habit through fun storytelling." },
              { title: "👨‍👩‍👧‍👦 Family Bonding", description: "Include family members in adventures that strengthen relationships." },
              { title: "🌟 Confidence Building", description: "Show your child overcoming challenges and being brave in their own story." },
              { title: "🎓 Learning Adventures", description: "Educational stories that make learning fun and memorable." }
            ].map((useCase, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Give Your Child a Lifetime Memory
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Help them build habits, confidence, and joy through the power of personalized storytelling. 
            They'll love watching themselves be the hero!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Story Today
            </Link>
            <Link 
              to="/demos" 
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              See Examples First
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
