import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";

const SocialLinks = ({ data }) => {
  const [activeLink, setActiveLink] = useState(0);
  const handleIconHover = (index) => {
    setActiveLink(index);
  };

  return (
    <div className="st-social-link">
      {data.map(
        (item, index) =>
          // Check if the item is enabled before rendering it
          item.enabled && (
            <Link
              to={item.link}
              className={
                index === activeLink ? "st-social-btn active" : "st-social-btn"
              }
              onMouseEnter={() => handleIconHover(index)}
              key={index}
            >
              <span className="st-social-icon">
                {item.image && item.image.url && (
                  <img src={item.image.url} alt="" />
                )}
              </span>
              <span className="st-icon-name">{item.platform}</span>
            </Link>
          )
      )}
    </div>
  );
};

SocialLinks.propTypes = {
  data: PropTypes.array,
};

export default SocialLinks;
