
export const currentOffer = {
  discount: 60,
  originalText: "60% OFF",
  highlightText: "Limited Time: 60% OFF all packages!",
  deadline: "July 15th",
  deadlineText: "Offer ends July 15th",
  urgentText: "Only a few days left!",
  isActive: true,
  
  // Helper methods
  getDiscountedPrice: (originalPrice: number) => {
    if (!currentOffer.isActive) return originalPrice;
    return Math.round(originalPrice * (1 - currentOffer.discount / 100));
  },
  
  getBannerText: () => {
    if (!currentOffer.isActive) return "";
    return `🎉 ${currentOffer.highlightText}`;
  },
  
  getDeadlineText: () => {
    if (!currentOffer.isActive) return "";
    return `⏰ Discount ends ${currentOffer.deadline} - ${currentOffer.urgentText}`;
  }
};
