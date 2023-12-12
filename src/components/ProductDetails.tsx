import styles from "../assets/styles/ProductDetails.module.scss";

interface ProductDetailsInterface {
  productData: {
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
  };
}

const ProductDetails = ({ productData }: ProductDetailsInterface) => {
  return (
    <section className={styles.productDetails}>
      <div className={styles.price}>£{productData.price.now}</div>
      <div className={styles.messaging}>{productData.displaySpecialOffer}</div>
      <div className={styles.attributes}>
        {productData.dynamicAttributes.guarantee}
      </div>
    </section>
  );
};

export default ProductDetails;
