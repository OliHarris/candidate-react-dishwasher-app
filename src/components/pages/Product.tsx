import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import parse from "html-react-parser";

import getDishwasherItemData from "../../api/getDishwasherItemData";
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
    media: {
      videos: {
        urls: string[];
      };
      images: {
        urls: string[];
      };
    };
    bundleProducts: string[];
    nonPromoMessage: string;
    productId: string;
    details: {
      returns: string;
      features: [
        {
          attributes: {
            value: string;
            name: string;
            values: string[];
            multivalued: boolean;
          }[];
          groupName: string;
        }
      ];
      featuredArticles: {
        title: string;
        linkUrl: string;
      }[];
      buyingGuides: {
        title: string;
        linkUrl: string;
      }[];
      editorsNotes: string;
      productInformation: string;
    };
    priceBands: string[];
    type: string;
    price: {
      was: string;
      then1: string;
      uom: string;
      currency: string;
      then2: string;
      now: string;
    };
    releaseDateTimestamp: number;
    ageRestriction: number;
    code: string;
    specialOfferBundles: string[];
    seoURL: string;
    parentCategories: string[];
    deliveries: [
      {
        options: {
          isApprovedSupplier: boolean;
          newStandardDescription: string;
          price: string;
          id: string;
          shortDescription: string;
          newShortDescription: string;
          standardDescription: string;
          newPriority: number;
        }[];
        deliveryType: string;
      }
    ];
    lifeCycleState: string;
    averageRating: number;
    skus: [
      {
        media: {
          videos: {
            urls: string[];
          };
          images: {
            urls: string[];
          };
        };
        dynamicAttributes: {
          augmentedrealityimageavailable: string;
          dimensions: string;
          range: string;
          modelnamenumber: string;
          manufacturerpartnumbermpn: string;
        };
        size: string;
        priceBand: string;
        sizeHeadline: string;
        unitPriceInfo: object;
        price: {
          then1: string;
          now: string;
          then2: string;
          currency: string;
          uom: string;
          was: string;
        };
        id: string;
        swatchUrl: string;
        code: string;
        color: string;
        skuTitle: string;
        brandName: string;
        ticketType: string;
        availability: {
          message: string;
          stockLevel: number;
          isPreorder: boolean;
          availabilityStatus: string;
        };
        isNotifiable: false;
      }
    ];
    additionalServices: {
      optionalServices: {
        customProperties: {
          warrantyCustomTooltip: string;
          warrantyCustomConfirm: string;
          warrantyCustomDescription: string;
          warrantyCustomGeneric: string;
        };
        id: string;
        title: string;
        price: string;
        associatedProductId: string;
        orderOnSite: number;
        type: string;
        description: string;
      }[];
      includedServices: string[];
    };
    isFBL: boolean;
    isAsafShape: boolean;
    storeOnly: boolean;
    numberOfReviews: number;
    specialOffers: object;
    displaySpecialOffer: string;
    emailMeWhenAvailable: boolean;
    promotionalFeatures: string[];
    legs: string[];
    crumbs: {
      item: string;
      clickable: string;
      displayName: string;
      type: string;
    }[];
    defaultCategory: {
      id: string;
      name: string;
    };
    title: string;
    dynamicAttributes: {
      dimensions: string;
      delicatewash: string;
      energyratingoverall: string;
      floodprotection: string;
      rinseaidindicator: string;
      automaticloadadjustment: string;
      widthbuiltinovens: string;
      autodose: string;
      programsequenceindicator: string;
      brand: string;
      dryingsystem: string;
      watersupplyfilltype: string;
      noiselevelrating: string;
      saltlevelindicator: string;
      cablelength: string;
      slimdepth: string;
      weight: string;
      amperage: string;
      digitaldisplay: string;
      cycledurationatratedcapacityfortheecocycle: string;
      timerdelay: string;
      combinedaperturedimensions: string;
      timeremainingindicator: string;
      homeappliancefeatures: string[];
      noofprograms: string;
      noiselevel: string;
      placesettings: string;
      manufacturerpartnumbermpn: string;
      dishwashersize: string;
      integratedorfreestanding: string;
      countryoforigin: string;
      weightedenergyconsumptionper100cyclesforecocycle: string;
      adjustable: string;
      onlineexclusive: string;
      childlock: string;
      cutlerybasket: string;
      weightedwaterconsumptionfortheecocycle: string;
      quickwash: string;
      smarttechnology: string[];
      quickwashcycletime: string;
      guarantee: string;
      invertermotor: string;
      installationrequired: string;
      quietmark: string;
      modelnamenumber: string;
      range: string;
    };
    defaultSku: string;
    brand: {
      logo: string;
      name: string;
      story: string;
    };
    templateType: string;
  }>(Object);
  const [dataLoaded, setDataLoaded] = useState<boolean>(false);

  const location = useLocation();

  useEffect(() => {
    const findQuery = () => {
      // method to retrieve queryParam
      return new URLSearchParams(location.search).get("id");
    };
    setDataLoaded(false);
    getDishwasherItemData(findQuery(), setDataLoaded).then((data) => {
      // can then be set here
      setProductData(data);
    });
  }, [location.search]);

  return (
    <>
      <header className={styles.header}>
        <Link
          className={appStyles.link}
          to={{
            pathname: "/",
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
                  <ProductCarousel images={productData.media.images.urls} />
                  {(isMobile || isTablet) && (
                    <ProductDetails productData={productData} />
                  )}
                  <section className={styles.productInformation}>
                    <h2>Product information</h2>
                    {isDesktop && (
                      <div className={styles.code}>
                        Product code: {productData.code}
                      </div>
                    )}
                    {parse(productData.details.productInformation)}
                    {(isMobile || isTablet) && (
                      <div className={styles.code}>
                        Product code: {productData.code}
                      </div>
                    )}
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
