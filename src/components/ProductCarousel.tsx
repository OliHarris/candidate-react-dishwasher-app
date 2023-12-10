import styles from "../assets/styles/ProductCarousel.module.scss";

interface ProductCarouselInterface {
  image: string;
}

const ProductCarousel = ({ image }: ProductCarouselInterface) => {
  return (
    <div className={styles.productCarousel}>
      <figure>
        <img src={image} alt="image of dishwasher in a slider" />
      </figure>
    </div>
  );
};

export default ProductCarousel;
