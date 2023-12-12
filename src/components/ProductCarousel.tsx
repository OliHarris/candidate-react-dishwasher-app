import styles from "../assets/styles/ProductCarousel.module.scss";

interface ProductCarouselInterface {
  images: string[];
}

const ProductCarousel = ({ images }: ProductCarouselInterface) => {
  return (
    <div className={styles.productCarousel}>
      <figure>
        <img src={images[0]} alt="image of dishwasher in a slider" />
      </figure>
    </div>
  );
};

export default ProductCarousel;
