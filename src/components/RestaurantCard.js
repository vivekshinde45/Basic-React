import { IMG_CDN_URL, resList } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    area,
    sla,
    costForTwo,
    avgRating,
  } = resData?.info;

  return (
    <div className="res-card">
      <img
        className="dish-img"
        alt="biryani-image"
        src={IMG_CDN_URL + cloudinaryImageId}
      />
      {/* {console.log(cloudinaryImageId)} */}
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{avgRating} Stars</h3>
      <h4>{sla?.lastMileTravelString} away</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
