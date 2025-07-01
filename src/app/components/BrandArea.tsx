const brands = [
  { id: 1, logo: "/img/brand/1.png", name: "Brand 1" },
  { id: 2, logo: "/img/brand/2.png", name: "Brand 2" },
  { id: 3, logo: "/img/brand/3.png", name: "Brand 3" },
  { id: 4, logo: "/img/brand/4.png", name: "Brand 4" },
  { id: 5, logo: "/img/brand/5.png", name: "Brand 5" },
];

const BrandArea = () => {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">
            Trusted by Leading Brands
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            {`We partner with the world's most trusted brands to bring you the
            best products`}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-4 md:p-6 flex items-center justify-center h-20 md:h-24 lg:h-28"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="max-w-full max-h-full object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandArea;
