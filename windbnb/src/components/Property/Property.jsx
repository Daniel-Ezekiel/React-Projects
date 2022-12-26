import { MdStarRate } from "react-icons/md";

const Property = ({ imgUrl, superHost, type, beds, rating, title }) => {
  return (
    <div className="property">
      <img src={imgUrl} alt="property" />

      <div className="property-info">
        <div>
          {superHost && <span className="super-host">Super Host</span>}
          <span className="apartment-info">
            {type} . {beds} beds
          </span>
        </div>
        <span className="apartment-rating">
          <MdStarRate />
          {rating}
        </span>

        <p>{title}</p>
      </div>
    </div>
  );
};

export default Property;
