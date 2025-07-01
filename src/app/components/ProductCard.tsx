interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  oldPrice: string;
}

const ProductCard = ({ image, name, price, oldPrice }: ProductCardProps) => {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="single-product">
        <img className="img-fluid" src={image} alt="" />
        <div className="product-details">
          <h6>{name}</h6>
          <div className="price">
            <h6>{price}</h6>
            <h6 className="l-through">{oldPrice}</h6>
          </div>
          <div className="prd-bottom">
            <a href="" className="social-info">
              <span className="ti-bag"></span>
              <p className="hover-text">add to bag</p>
            </a>
            <a href="" className="social-info">
              <span className="lnr lnr-heart"></span>
              <p className="hover-text">Wishlist</p>
            </a>
            <a href="" className="social-info">
              <span className="lnr lnr-sync"></span>
              <p className="hover-text">compare</p>
            </a>
            <a href="" className="social-info">
              <span className="lnr lnr-move"></span>
              <p className="hover-text">view more</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
