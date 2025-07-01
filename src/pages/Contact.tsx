import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, Clock, Shield, MessageCircle, Send, Package } from 'lucide-react';
import emailjs from 'emailjs-com';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const location = useLocation();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    parentName: '',
    email: '',
    phone: '',
    childName: '',
    childAge: '',
    storyTheme: '',
    packageType: '',
    additionalInfo: '',
    urgency: 'standard'
  });

  const packages = [
    { title: "Mini Hero", duration: "1 minute", originalPrice: 100, discountedPrice: 40 },
    { title: "Story Champion", duration: "2 minutes", originalPrice: 200, discountedPrice: 80 },
    { title: "Epic Adventure", duration: "3 minutes", originalPrice: 300, discountedPrice: 120 }
  ];

  // Set the story theme and package from URL params when component mounts
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const theme = params.get('theme');
    const packageType = params.get('package');
    
    if (theme) {
      setFormData(prev => ({
        ...prev,
        storyTheme: theme
      }));
    }
    
    if (packageType) {
      setFormData(prev => ({
        ...prev,
        packageType: packageType
      }));
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const selectedPackage = packages.find(pkg => pkg.title === formData.packageType);
      const packageInfo = selectedPackage 
        ? `${selectedPackage.title} (${selectedPackage.duration}) - $${selectedPackage.discountedPrice} (60% OFF from $${selectedPackage.originalPrice})`
        : 'Not selected';

      // Prepare the message with all form data
      const message = `
New Story Request:

Parent Name: ${formData.parentName}
Email: ${formData.email}
Phone: ${formData.phone}
Child Name: ${formData.childName}
Child Age: ${formData.childAge}
Story Theme: ${formData.storyTheme}
Package Selected: ${packageInfo}
Timeline: ${formData.urgency}
Additional Information: ${formData.additionalInfo || 'None provided'}
      `;

      await emailjs.send(
        "service_fyq11zf",
        "template_ij4bygj",
        {
          name: formData.parentName,
          time: new Date().toLocaleString(),
          message: message,
        },
        "9sFdGsHiXBeqnVOWN",
      );

      toast({
        title: "Request Sent Successfully!",
        description: "Thank you! We'll get back to you within 24 hours with next steps.",
      });

      // Reset form
      setFormData({
        parentName: '',
        email: '',
        phone: '',
        childName: '',
        childAge: '',
        storyTheme: '',
        packageType: '',
        additionalInfo: '',
        urgency: 'standard'
      });

    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error Sending Request",
        description: "Something went wrong. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const selectedPackage = packages.find(pkg => pkg.title === formData.packageType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Let's Create Your Child's Story
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to get started? Fill out the form below and we'll guide you through the magical process 
            of creating your child's personalized adventure!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Tell Us About Your Little Hero</h2>
              
              {/* Package Selection Display */}
              {selectedPackage && (
                <div className="mb-6 p-4 bg-gradient-to-r from-sky-50 to-indigo-50 rounded-lg border border-sky-200">
                  <div className="flex items-center space-x-2 mb-2">
                    <Package className="h-5 w-5 text-sky-600" />
                    <h3 className="font-semibold text-sky-800">Selected Package</h3>
                  </div>
                  <div className="text-sky-700">
                    <p className="font-medium">{selectedPackage.title} ({selectedPackage.duration})</p>
                    <p className="text-sm">
                      <span className="line-through text-red-500">${selectedPackage.originalPrice}</span>
                      <span className="ml-2 text-2xl font-bold text-emerald-600">${selectedPackage.discountedPrice}</span>
                      <span className="ml-2 bg-amber-100 text-amber-800 px-2 py-1 rounded text-xs font-semibold">60% OFF</span>
                    </p>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Parent Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      required
                      value={formData.parentName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Child Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Child's Name *
                    </label>
                    <input
                      type="text"
                      name="childName"
                      required
                      value={formData.childName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Your child's name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Child's Age *
                    </label>
                    <input
                      type="number"
                      name="childAge"
                      required
                      min="2"
                      max="12"
                      value={formData.childAge}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder="Age"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Package Selection *
                  </label>
                  <select
                    name="packageType"
                    required
                    value={formData.packageType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  >
                    <option value="">Select a package...</option>
                    {packages.map((pkg) => (
                      <option key={pkg.title} value={pkg.title}>
                        {pkg.title} ({pkg.duration}) - ${pkg.discountedPrice} (60% OFF)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Story Theme/Goal *
                  </label>
                  <select
                    name="storyTheme"
                    required
                    value={formData.storyTheme}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  >
                    <option value="">Select a theme...</option>
                    <option value="brushing-teeth">Brushing Teeth</option>
                    <option value="sharing-toys">Sharing Toys</option>
                    <option value="bedtime-routine">Bedtime Routine</option>
                    <option value="family-bonding">Family Bonding</option>
                    <option value="confidence-building">Confidence Building</option>
                    <option value="birthday-adventure">Birthday Adventure</option>
                    <option value="holiday-story">Holiday Story</option>
                    <option value="custom">Custom Theme</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Information
                  </label>
                  <textarea
                    name="additionalInfo"
                    rows={4}
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder="Tell us about your child's interests, favorite colors, specific habits you'd like to address, or any other details that would make their story special..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline Preference
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                  >
                    <option value="standard">Standard (5-7 business days) - Free</option>
                    <option value="rush">Rush (2-3 business days) - +$50</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-bold py-4 px-6 rounded-lg hover:from-sky-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                  <span>{isLoading ? 'Sending...' : 'Send My Request'}</span>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="space-y-6">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-sky-100 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">corp.brainhouse@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <p className="text-gray-600">(+353) 871886502</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Response Time</p>
                    <p className="text-gray-600">Within 48 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Process Steps */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">What Happens Next?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-sky-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">We'll Contact You</p>
                    <p className="text-gray-600 text-sm">Within 48 hours to discuss details and confirm your order</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-sky-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Character Creation</p>
                    <p className="text-gray-600 text-sm">We'll create your child's cartoon character and send a preview</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-sky-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                    3
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Story Production</p>
                    <p className="text-gray-600 text-sm">Our writers and animators create your personalized story</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="bg-sky-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">
                    4
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">Delivery & Joy!</p>
                    <p className="text-gray-600 text-sm">Your child's personalized story is delivered and the magic begins!</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy Guarantee */}
            <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
              <div className="flex items-center space-x-2 mb-3">
                <Shield className="h-6 w-6 text-green-600" />
                <h3 className="text-lg font-bold text-green-800">Privacy Guaranteed</h3>
              </div>
              <p className="text-green-700 text-sm">
                Your child's information is completely safe with us. We collect only what's needed 
                to create their story and permanently delete everything after delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
