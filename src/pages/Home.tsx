
import { Link } from 'react-router-dom';
import { Star, Shield, Heart, Users, Play, ArrowRight, User, BookOpen, Package, CheckCircle, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=1200&h=600&fit=crop",
      title: "Emma's Magical Adventure",
      child: "Emma, Age 5"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1200&h=600&fit=crop",
      title: "Liam's Brave Journey",
      child: "Liam, Age 4"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=600&fit=crop",
      title: "Zoe's Family Quest",
      child: "Zoe, Age 6"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const howItWorksSteps = [
    {
      icon: User,
      title: "Tell Us About Your Kid",
      description: "Share your child's details or photo with us. We create their cartoon while maintaining complete privacy protection."
    },
    {
      icon: BookOpen,
      title: "Choose Your Story",
      description: "Select from our existing stories, tell us your custom story, or work with our expert story-writers to create something unique."
    },
    {
      icon: Package,
      title: "Place Your Order",
      description: "Choose your package duration and any additional characters. We'll start creating your personalized story."
    },
    {
      icon: CheckCircle,
      title: "Review Together",
      description: "We review the story with you before final delivery to ensure everything is perfect for your child."
    },
    {
      icon: Sparkles,
      title: "Your Story is Ready!",
      description: "When you're happy with the result, you receive the completed story - it's all yours to keep forever!"
    }
  ];

  const faqs = [
    {
      question: "How do you protect my child's privacy?",
      answer: "We take minimal information needed to create the cartoon, process it securely, and delete all data immediately after delivery. Your child's privacy is our top priority."
    },
    {
      question: "How long does it take to create a story?",
      answer: "Typically 3-5 business days from order confirmation to delivery. We'll keep you updated throughout the process."
    },
    {
      question: "Can I add multiple family members?",
      answer: "Yes! You can add parents, siblings, or other family members for just $40 each to any package."
    },
    {
      question: "What if I'm not satisfied with the story?",
      answer: "We review everything with you before final delivery and offer revisions to ensure you're completely happy with the result."
    },
    {
      question: "What formats do you deliver?",
      answer: "We deliver high-quality MP4 video files that work on all devices - phones, tablets, TVs, and computers."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative bg-gradient-to-br from-sky-100 via-blue-50 to-indigo-100 py-20 overflow-hidden">
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-30' : 'opacity-0'
              }`}
            >
              <img 
                src={slide.image} 
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-sky-200/60 to-indigo-200/60"></div>
            </div>
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 animate-fade-in">
              Your Child is the <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-indigo-600">Hero</span> of Their Story!
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Personalized cartoon stories featuring your child as the main character. Help them learn habits, build confidence, and create lifelong memories through the magic of storytelling!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                to="/pick-story" 
                className="bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-bold py-4 px-8 rounded-full hover:from-sky-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Play className="h-5 w-5" />
                <span>Get Started</span>
              </Link>
              <Link 
                to="/demos" 
                className="bg-white text-sky-600 font-bold py-4 px-8 rounded-full border-2 border-sky-500 hover:bg-sky-50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <span>Watch Demo Stories</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>

            <div className="bg-amber-100 border border-amber-300 rounded-lg p-4 max-w-md mx-auto">
              <p className="text-amber-800 font-semibold">🎉 Limited Time: 60% OFF all packages!</p>
              <p className="text-amber-600 text-sm">Offer ends July 15th</p>
            </div>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-sky-500' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Creating your child's personalized story is simple and secure. Here's our step-by-step process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-sky-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="bg-sky-500 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose toonMyKid?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We create more than just videos - we create experiences that shape your child's growth and imagination.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-sky-100 hover:bg-sky-200 transition-colors duration-300">
              <div className="bg-gradient-to-r from-sky-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Fully Personalized</h3>
              <p className="text-gray-600">
                Your child becomes the hero of their story with their name, appearance, and favorite themes woven throughout the narrative.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-emerald-100 hover:bg-emerald-200 transition-colors duration-300">
              <div className="bg-gradient-to-r from-emerald-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Privacy Protected</h3>
              <p className="text-gray-600">
                We take minimal information, create your story, and delete all data immediately after delivery. Your child's privacy is sacred.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-rose-100 hover:bg-rose-200 transition-colors duration-300">
              <div className="bg-gradient-to-r from-rose-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
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
      <section className="py-20 bg-white">
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
              <div key={index} className="bg-gradient-to-br from-sky-50 to-indigo-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about our personalized story service.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sky-600 to-indigo-600 text-white">
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
              to="/pick-story" 
              className="bg-white text-sky-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Story Today
            </Link>
            <Link 
              to="/demos" 
              className="bg-transparent border-2 border-white text-white font-bold py-4 px-8 rounded-full hover:bg-white hover:text-sky-600 transition-all duration-300 transform hover:scale-105"
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
