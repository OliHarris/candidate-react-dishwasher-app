import { Link } from "react-router-dom";

import styles from "../assets/styles/ProductListItem.module.scss";

interface ProductListItemInterface {
  appStyles: CSSModuleClasses;
  productId: string;
  image: string;
  title: string;
  price: string;
}

const ProductListItem = ({
  appStyles,
  productId,
  image,
  title,
  price,
}: ProductListItemInterface) => {
  return (
    <div className={styles.productListItem}>
      <Link
        className={appStyles.link}
        to={{
          pathname: "/product",
          search: `?id=${productId}`,
        }}
      >
        <figure>
          <img
            src={image}
            alt="image of dishwasher in a grid"
            style={{ width: "100%" }}
          />
        </figure>
        <div>{title}</div>
        <div className={styles.price}>{price}</div>
      </Link>
    </div>
  );
};
export default ProductListItem;
