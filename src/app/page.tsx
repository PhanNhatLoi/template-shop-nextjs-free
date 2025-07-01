import Banner from "./components/Banner";
import Features from "./components/Features";
import CategoryArea from "./components/CategoryArea";
import ProductArea from "./components/ProductArea";
import ExclusiveDeal from "./components/ExclusiveDeal";
import BrandArea from "./components/BrandArea";
import RelatedProduct from "./components/RelatedProduct";

export default function Home() {
  return (
    <main>
      <Banner />
      <Features />
      <CategoryArea />
      <ProductArea />
      <ExclusiveDeal />
      <BrandArea />
      <RelatedProduct />
    </main>
  );
}
