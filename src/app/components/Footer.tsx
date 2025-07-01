const Footer = () => (
  <footer className="bg-gray-900 text-white">
    {/* Main Footer */}
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {/* About Us */}
        <div className="space-y-3 md:space-y-4">
          <h6 className="text-lg md:text-xl font-semibold text-yellow-400 mb-3 md:mb-4">
            About Us
          </h6>
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore dolore magna aliqua.
          </p>
        </div>

        {/* Newsletter */}
        <div className="space-y-3 md:space-y-4">
          <h6 className="text-lg md:text-xl font-semibold text-yellow-400 mb-3 md:mb-4">
            Newsletter
          </h6>
          <p className="text-gray-300 text-sm md:text-base">
            Stay update with our latest
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter Email"
              className="flex-1 px-3 md:px-4 py-2 md:py-3 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-yellow-400 text-white placeholder-gray-400 text-sm md:text-base"
            />
            <button className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-r-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Instagram Feed */}
        <div className="space-y-3 md:space-y-4">
          <h6 className="text-lg md:text-xl font-semibold text-yellow-400 mb-3 md:mb-4">
            Instagram Feed
          </h6>
          <div className="grid grid-cols-4 gap-1 md:gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div
                key={num}
                className="relative group overflow-hidden rounded-lg"
              >
                <img
                  src={`/img/i${num}.jpg`}
                  alt={`Instagram ${num}`}
                  className="w-full h-12 md:h-16 lg:h-20 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Follow Us */}
        <div className="space-y-3 md:space-y-4">
          <h6 className="text-lg md:text-xl font-semibold text-yellow-400 mb-3 md:mb-4">
            Follow Us
          </h6>
          <p className="text-gray-300 text-sm md:text-base">Let us be social</p>
          <div className="flex space-x-3 md:space-x-4">
            <a
              href="#"
              className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-300 transform hover:scale-110"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-400 transition-all duration-300 transform hover:scale-110"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-500 transition-all duration-300 transform hover:scale-110"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.2.475-.504.89-.89 1.233-.386.344-.84.516-1.36.516-.52 0-.974-.172-1.36-.516-.386-.344-.69-.758-.89-1.233-.2-.475-.3-.98-.3-1.516 0-.536.1-1.04.3-1.516.2-.475.504-.89.89-1.233.386-.344.84-.516 1.36-.516.52 0 .974.172 1.36.516.386.344.69.758.89 1.233.2.475.3.98.3 1.516 0 .536-.1 1.04-.3 1.516z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-8 h-8 md:w-10 md:h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-800 transition-all duration-300 transform hover:scale-110"
            >
              <svg
                className="w-4 h-4 md:w-5 md:h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
