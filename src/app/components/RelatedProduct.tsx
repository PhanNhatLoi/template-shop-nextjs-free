const RelatedProduct = () => {
  const products = [
    {
      id: 1,
      image: "/img/l4.jpg",
      name: "Football Shirt",
      price: "$189.00",
      oldPrice: "$210.00",
    },
    {
      id: 2,
      image: "/img/l2.jpg",
      name: "S-1",
      price: "$189.00",
      oldPrice: "$210.00",
    },
    {
      id: 3,
      image: "/img/l7.jpg",
      name: "S-2",
      price: "$189.00",
      oldPrice: "$210.00",
    },
    {
      id: 4,
      image: "/img/l5.jpg",
      name: "S-3",
      price: "$189.00",
      oldPrice: "$210.00",
    },
    {
      id: 5,
      image: "/img/l6.jpg",
      name: "S-4",
      price: "$189.00",
      oldPrice: "$210.00",
    },
    {
      id: 6,
      image: "/img/l3.jpg",
      name: "S-5",
      price: "$189.00",
      oldPrice: "$210.00",
    },
    {
      id: 7,
      image: "/img/l1.jpg",
      name: "S-6",
      price: "$189.00",
      oldPrice: "$210.00",
    },
    {
      id: 8,
      image: "/img/l8.jpg",
      name: "S-7",
      price: "$189.00",
      oldPrice: "$210.00",
    },
    {
      id: 9,
      image: "/img/q1.jpg",
      name: "S-8",
      price: "$189.00",
      oldPrice: "$210.00",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4">
            Deals of the Week
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-40 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-2 left-2">
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                        Sale
                      </span>
                    </div>
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="text-sm md:text-lg font-semibold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg md:text-xl font-bold text-yellow-600">
                        {product.price}
                      </span>
                      <span className="text-gray-400 line-through text-sm md:text-base">
                        {product.oldPrice}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Side Banner */}
          <div className="lg:col-span-1">
            <div className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 h-64 md:h-80 lg:h-96">
              <img
                src="/img/category/c5.jpg"
                alt="Special Offer"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    Special Offer
                  </h3>
                  <p className="text-base md:text-lg">Up to 50% Off</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RelatedProduct;
