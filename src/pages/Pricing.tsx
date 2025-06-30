
import PricingCard from '../components/PricingCard';
import { Shield, Clock, Users, Star } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      title: "Mini Hero",
      duration: "1 minute",
      originalPrice: 100,
      discountedPrice: 40,
      features: [
        "Personalized cartoon character",
        "Your child's name throughout",
        "Choose your story theme",
        "High-quality animation",
        "Instant digital delivery",
        "Lifetime access"
      ]
    },
    {
      title: "Story Champion",
      duration: "2 minutes",
      originalPrice: 200,
      discountedPrice: 80,
      features: [
        "Everything in Mini Hero",
        "Extended storyline",
        "More character development",
        "Additional scenes & adventures",
        "Custom background settings",
        "Premium animation effects"
      ],
      isPopular: true
    },
    {
      title: "Epic Adventure",
      duration: "3 minutes",
      originalPrice: 300,
      discountedPrice: 120,
      features: [
        "Everything in Story Champion",
        "Full adventure storyline",
        "Multiple story arcs",
        "Advanced character interactions",
        "Spectacular visual effects",
        "Bonus surprise ending"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Choose Your Adventure Package
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Every package includes a fully personalized story with your child as the hero. 
            Pick the length that's perfect for your little one!
          </p>
          
          {/* Discount Banner */}
          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-full px-6 py-3 inline-block text-lg font-bold mb-8">
            🎉 Limited Time: 60% OFF All Packages - Ends July 15th!
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        {/* Additional Characters Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-blue-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Add Family Members</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Make it a family adventure! Add mom, dad, siblings, or even grandparents to any package.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { name: "Mom", emoji: "👩" },
              { name: "Dad", emoji: "👨" },
              { name: "Sister", emoji: "👧" },
              { name: "Brother", emoji: "👦" }
            ].map((character, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
                <div className="text-4xl mb-2">{character.emoji}</div>
                <h3 className="font-semibold text-gray-800">{character.name}</h3>
                <p className="text-green-600 font-bold">+$40</p>
              </div>
            ))}
          </div>
        </div>

        {/* What's Included Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            What's Included in Every Package
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Personalized Character</h3>
              <p className="text-gray-600 text-sm">Cartoon character that looks like your child</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Privacy Protected</h3>
              <p className="text-gray-600 text-sm">All data deleted after delivery</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Quick Delivery</h3>
              <p className="text-gray-600 text-sm">Delivered within 5-7 business days</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Expert Writers</h3>
              <p className="text-gray-600 text-sm">Professional children's story writers</p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gray-100 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">How do you create the character?</h3>
              <p className="text-gray-600 text-sm">We use the basic information you provide (hair color, skin tone, etc.) to create a cartoon character. You can optionally share a photo for better accuracy, but it's not required.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">What story themes are available?</h3>
              <p className="text-gray-600 text-sm">We cover habits (brushing teeth, sharing), family relationships, confidence building, holiday adventures, and educational topics. Custom themes are also available!</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Is my child's information safe?</h3>
              <p className="text-gray-600 text-sm">Absolutely! We collect minimal information, create your story, and permanently delete all data immediately after delivery. Privacy is our top priority.</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-2">How long does delivery take?</h3>
              <p className="text-gray-600 text-sm">Most stories are completed within 5-7 business days. Rush delivery (2-3 days) is available for an additional $50.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Make Your Child the Hero?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Don't miss our limited-time 60% discount! Give your child a story they'll treasure forever.
          </p>
          
          <button className="bg-white text-purple-600 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 text-lg">
            Start Creating Your Story Now
          </button>
          
          <p className="text-sm mt-4 opacity-75">
            ⏰ Discount ends July 15th - Only a few days left!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
