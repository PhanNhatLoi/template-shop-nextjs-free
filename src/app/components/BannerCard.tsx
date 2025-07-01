import Link from "next/link";
import React from "react";

const BannerCard = ({ title, link }: { title: string; link: string }) => {
  return (
    <section className="relative h-[40vh] bg-cover bg-center bg-no-repeat overflow-hidden bg-gradient-to-r from-yellow-400 to-orange-500 py-16 lg:bg-[url('/img/banner/common-banner.jpg')]">
      <div className="absolute bottom-1/3 right-[20%] bg-opacity-30">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{title}</h1>
          <nav className="flex justify-center items-center space-x-2 text-white">
            <Link href="/" className="hover:text-yellow-200 transition-colors">
              Home
            </Link>
            <span className="text-yellow-200">→</span>
            <span>{link}</span>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default BannerCard;
