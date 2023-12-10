import styles from "../assets/styles/ProductDetails.module.scss";

interface ProductDetailsInterface {
  productData: {
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
  };
}

const ProductDetails = ({ productData }: ProductDetailsInterface) => {
  return (
    <section className={styles.productDetails}>
      <div className={styles.price}>
        {productData.variantPriceRange &&
          productData.variantPriceRange.display.max}
      </div>
      {productData.messaging.length > 0 && (
        <div className={styles.messaging}>
          {productData.messaging.map(
            (
              item: {
                title: string;
                type: string;
                promotionGroup: string;
                promotionType: string;
              },
              index
            ) => (
              <div key={index}>{item.title}</div>
            )
          )}
        </div>
      )}
      <div className={styles.attributes}>
        {productData.attributes.map(
          (
            item: {
              key: string;
              values: string[];
              displayName: string;
            },
            index
          ) => item.key === "guarantee" && <div key={index}>{item.values}</div>
        )}
      </div>
    </section>
  );
};

export default ProductDetails;
