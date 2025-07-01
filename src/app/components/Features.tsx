const features = [
  {
    icon: "/img/features/f-icon1.png",
    title: "Free Delivery",
    description: "Free Shipping on all order",
  },
  {
    icon: "/img/features/f-icon2.png",
    title: "Return Policy",
    description: "Free Shipping on all order",
  },
  {
    icon: "/img/features/f-icon3.png",
    title: "24/7 Support",
    description: "Free Shipping on all order",
  },
  {
    icon: "/img/features/f-icon4.png",
    title: "Secure Payment",
    description: "Free Shipping on all order",
  },
];

const Features = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-3 md:mb-4">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300">
                    <img
                      src={feature.icon}
                      alt={feature.title}
                      className="w-6 h-6 md:w-8 md:h-8 object-contain"
                    />
                  </div>
                </div>
                <h6 className="text-base md:text-lg font-semibold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                  {feature.title}
                </h6>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
