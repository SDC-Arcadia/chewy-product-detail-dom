const buildFullDataResonse = (productInfo, sizeInfo) => {
  const {
    name,
    brand,
    seller,
    isFavorite,
  } = productInfo;

  const fullDataResponse = {
    name,
    brand,
    seller,
    isFavorite,
  };
  fullDataResponse.size_options = sizeInfo;

  fullDataResponse.review_count = 10;
  fullDataResponse.average_stars = 5;
  // TO DO - get review count and starts from review service
  return fullDataResponse;
};

const buildProductInfoResponse = (dbQueryResult) => {
  const {
    brand,
    name,
    seller,
  } = dbQueryResult;

  return { name, brand, seller };
};

module.exports.buildFullDataResonse = buildFullDataResonse;
module.exports.buildProductInfoResponse = buildProductInfoResponse;
