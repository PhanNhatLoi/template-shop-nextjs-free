const categories = [
  { image: "/img/category/c1.jpg", title: "Sneaker for Sports" },
  { image: "/img/category/c4.jpg", title: "Sneaker for Sports" },
  { image: "/img/category/c2.jpg", title: "Sneaker for Sports" },
  { image: "/img/category/c3.jpg", title: "Product for Couple" },
  { image: "/img/category/c5.jpg", title: "Sneaker for Sports" },
];

const CategoryArea = () => {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Column 1: Wide rectangle + Medium square */}
          <div className="lg:col-span-5 space-y-4 md:space-y-6">
            {/* Wide rectangle (horizontal) - 5/12 width */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 h-48 md:h-56 lg:h-64">
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-500 z-10"></div>
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={categories[0].image}
                alt={categories[0].title}
              />
              <div className="absolute inset-0 flex items-end p-4 md:p-6 z-20">
                <div className="text-white">
                  <h6 className="text-base md:text-lg font-semibold mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {categories[0].title}
                  </h6>
                  <div className="w-0 group-hover:w-12 h-0.5 bg-yellow-400 transition-all duration-500"></div>
                </div>
              </div>
            </div>

            {/* Medium square - 5/12 width */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 h-40 md:h-48 lg:h-56">
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-500 z-10"></div>
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={categories[1].image}
                alt={categories[1].title}
              />
              <div className="absolute inset-0 flex items-end p-4 md:p-6 z-20">
                <div className="text-white">
                  <h6 className="text-base md:text-lg font-semibold mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {categories[1].title}
                  </h6>
                  <div className="w-0 group-hover:w-12 h-0.5 bg-yellow-400 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Medium square + Wide rectangle */}
          <div className="lg:col-span-4 space-y-4 md:space-y-6">
            {/* Medium square - 4/12 width */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 h-40 md:h-48 lg:h-56">
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-500 z-10"></div>
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={categories[2].image}
                alt={categories[2].title}
              />
              <div className="absolute inset-0 flex items-end p-4 md:p-6 z-20">
                <div className="text-white">
                  <h6 className="text-base md:text-lg font-semibold mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {categories[2].title}
                  </h6>
                  <div className="w-0 group-hover:w-12 h-0.5 bg-yellow-400 transition-all duration-500"></div>
                </div>
              </div>
            </div>

            {/* Wide rectangle (horizontal) - 4/12 width */}
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 h-48 md:h-56 lg:h-64">
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-500 z-10"></div>
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={categories[3].image}
                alt={categories[3].title}
              />
              <div className="absolute inset-0 flex items-end p-4 md:p-6 z-20">
                <div className="text-white">
                  <h6 className="text-base md:text-lg font-semibold mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {categories[3].title}
                  </h6>
                  <div className="w-0 group-hover:w-12 h-0.5 bg-yellow-400 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Full height large square */}
          <div className="lg:col-span-3">
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 h-full min-h-[24rem] md:min-h-[28rem] lg:min-h-[32rem]">
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-500 z-10"></div>
              <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={categories[4].image}
                alt={categories[4].title}
              />
              <div className="absolute inset-0 flex items-end p-4 md:p-6 z-20">
                <div className="text-white">
                  <h6 className="text-base md:text-lg font-semibold mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {categories[4].title}
                  </h6>
                  <div className="w-0 group-hover:w-12 h-0.5 bg-yellow-400 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryArea;
