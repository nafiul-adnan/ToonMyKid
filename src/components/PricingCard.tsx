
import { Check, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { currentOffer } from '../config/offers';

interface PricingCardProps {
  title: string;
  duration: string;
  originalPrice: number;
  discountedPrice?: number;
  features: string[];
  isPopular?: boolean;
}

const PricingCard = ({ title, duration, originalPrice, discountedPrice, features, isPopular }: PricingCardProps) => {
  const finalDiscountedPrice = discountedPrice || currentOffer.getDiscountedPrice(originalPrice);
  
  return (
    <div className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 ${isPopular ? 'ring-4 ring-sky-500' : ''}`}>
      {isPopular && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-sky-500 to-indigo-500 text-white px-4 py-1 rounded-b-lg text-sm font-semibold">
          Most Popular
        </div>
      )}
      
      <div className="p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
          <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
            <Clock className="h-4 w-4" />
            <span>{duration} video</span>
          </div>
          
          <div className="mb-4">
            {currentOffer.isActive && (
              <span className="text-3xl font-bold text-red-500 line-through">${originalPrice}</span>
            )}
            <span className={`text-4xl font-bold text-emerald-600 ${currentOffer.isActive ? 'ml-2' : ''}`}>
              ${finalDiscountedPrice}
            </span>
          </div>
          
          {currentOffer.isActive && (
            <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold inline-block">
              {currentOffer.discount}% OFF - Ends {currentOffer.deadline}!
            </div>
          )}
        </div>

        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-3">
              <Check className="h-5 w-5 text-emerald-500 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="space-y-3">
          <Link 
            to={`/contact?package=${encodeURIComponent(title)}`}
            className="w-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-bold py-3 px-6 rounded-lg hover:from-sky-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 block text-center"
          >
            Get Started
          </Link>
          
          <div className="text-center">
            <p className="text-sm text-gray-600 flex items-center justify-center space-x-1">
              <Users className="h-4 w-4" />
              <span>+$40 for each additional character (Dad, Mom, Sibling)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
