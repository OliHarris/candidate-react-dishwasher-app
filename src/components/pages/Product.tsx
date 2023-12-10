import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import getDishwashersData from "../../api/getDishwashersData";
import ProductCarousel from "../ProductCarousel";
import ProductDetails from "../ProductDetails";
import { useScreenDetector } from "../../hooks/UseScreenDetector";
import styles from "../../assets/styles/pages/Product.module.scss";

interface ProductInterface {
  appStyles: CSSModuleClasses;
}

const Product = ({ appStyles: appStyles }: ProductInterface) => {
  const { isMobile, isTablet, isDesktop } = useScreenDetector();

  const [productData, setProductData] = useState<{
    productId: string;
    type: string;
    title: string;
    code: string;
    averageRating: number;
    reviews: number;
    image: string;
    alternativeImageUrls: string[];
    displaySpecialOffer: string;
    nonPromoMessage: string;
    defaultSkuId: string;
    defaultVariantId: string;
    colorSwatches: [
      {
        color: string;
        basicColor: string;
        colorSwatchUrl: string;
        isAvailable: boolean;
        skuId: string;
        id: string;
        isColorOfDefaultVariant: boolean;
      }
    ];
    outOfStock: boolean;
    isAvailableToOrder: boolean;
    compare: boolean;
    fabric: string;
    swatchAvailable: boolean;
    brand: string;
    ageRestriction: number;
    isInStoreOnly: boolean;
    isMadeToMeasure: boolean;
    isBundle: boolean;
    isProductSet: boolean;
    dynamicAttributes: {
      dimensions: string;
      range: string;
      modelnamenumber: string;
      manufacturerpartnumbermpn: string;
      augmentedrealityimageavailable: string;
      colour: string;
      truecolour: string;
      integratedorfreestanding: string;
      noiselevel: string;
      rinseaidindicator: string;
      noiselevelrating: string;
      timeremainingindicator: string;
      digitaldisplay: string;
      installationrequired: string;
      delicatewash: string;
      programsequenceindicator: string;
      childlock: string;
      cablelength: string;
      cycledurationatratedcapacityfortheecocycle: string;
      cutlerybasket: string;
      timerdelay: string;
      brand: string;
      weight: string;
      floodprotection: string;
      automaticloadadjustment: string;
      dryingsystem: string;
      smarttechnology: string;
      quietmark: string;
      saltlevelindicator: string;
      amperage: string;
      guarantee: string;
      fittingsincluded: string;
      energyratingoverall: string;
      invertermotor: string;
      quickwashcycletime: string;
      countryoforigin: string;
      widthbuiltinovens: string;
      weightedwaterconsumptionfortheecocycle: string;
      slimdepth: string;
      smarthometype: string;
      watersupplyfilltype: string;
      placesettings: string;
      dishwashersize: string;
      quickwash: string;
      noofprograms: string;
      autodose: string;
      homeappliancefeatures: string;
      combinedaperturedimensions: string;
      weightedenergyconsumptionper100cyclesforecocycle: string;
      adjustable: string;
      international: string;
      homearea: string;
      homeappliancetype: string;
      annualrunningcost: string;
      eligibleForTradeIn: string;
      producttype1: string;
    };
    multiSku: boolean;
    fabricByLength: boolean;
    messaging: {
      title: string;
      type: string;
      promotionGroup: string;
      promotionType: string;
    }[];
    variantPriceRange: {
      display: {
        max: string;
        min: string;
      };
      for: string;
      reductionHistory: [];
      value: {
        max: string;
        min: string;
      };
    };
    services: [
      {
        __typename: string;
        title: string;
        automaticallyIncluded: boolean;
      }
    ];
    attributes: {
      key: string;
      values: string[];
      displayName: string;
    }[];
    hiddenAttributes: {
      key: string;
      values: string[];
      displayName: string;
    }[];
    permanentOos: boolean;
    defaultParentCategory: {
      id: string;
      name: string;
    };
    customerNotifiableEvents: {
      backInStock: boolean;
      onRelease: boolean;
      onPreorderLaunch: boolean;
      newlyInStock: boolean;
    };
    energy: {
      rating: {
        value: string;
      };
      label: string;
    };
  }>(Object);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    setDataLoaded(false);
    getDishwashersData(setDataLoaded).then((data) => {
      const findQuery = () => {
        // method to retrieve queryParam
        return new URLSearchParams(location.search).get("id");
      };

      const product = data.products.filter(
        (obj: { productId: string }) => obj.productId === findQuery()
      )[0];
      console.log(product);
      if (product) {
        // can then be set here
        setProductData(product);
      }
    });
  }, [location.search]);

  return (
    <>
      <header className={styles.header}>
        <Link
          className={appStyles.link}
          to={{
            pathname: "/candidate-react-dishwasher-app/",
          }}
        >
          <span className={styles.linkBack}>{"\u2329"}</span>
        </Link>
        <h1>{Object.keys(productData).length > 0 && productData.title}</h1>
      </header>
      <main>
        {!dataLoaded && <div>Loading...</div>}
        {dataLoaded && !Object.keys(productData).length && <div>No data</div>}
        {Object.keys(productData).length > 0 && (
          <div className={styles.content}>
            <div className="row">
              <div className="small-12 xlarge-8 columns">
                <div className={styles.rightBorder}>
                  <ProductCarousel
                    image={productData.alternativeImageUrls[0]}
                  />
                  {(isMobile || isTablet) && (
                    <ProductDetails productData={productData} />
                  )}
                  <section className={styles.productInformation}>
                    <h2>Product information</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                    <div className={styles.code}>
                      Product code: {productData.code}
                    </div>
                  </section>
                </div>
              </div>
              <div className="small-12 xlarge-4 columns">
                {isDesktop && <ProductDetails productData={productData} />}
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};
export default Product;
