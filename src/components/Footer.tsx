
import { Heart, Shield, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full">
                <Star className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">StoryHeroes</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Creating magical personalized stories that help children learn, grow, and build lifelong memories.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-300">
              <Shield className="h-4 w-4" />
              <span>Privacy Protected</span>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="/" className="hover:text-purple-400 transition-colors">Home</a></li>
              <li><a href="/demos" className="hover:text-purple-400 transition-colors">Demo Stories</a></li>
              <li><a href="/pricing" className="hover:text-purple-400 transition-colors">Pricing</a></li>
              <li><a href="/contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>Email: hello@storyheroes.com</p>
              <p>Phone: (555) 123-STORY</p>
              <p>Response time: Within 24 hours</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for children everywhere</span>
          </p>
          <p className="text-sm text-gray-400 mt-2">
            © 2024 StoryHeroes. All rights reserved. Your child's privacy is our priority.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
