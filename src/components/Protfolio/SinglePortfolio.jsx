import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const SinglePortfolio = ({ data, getData }) => {
  const { title, image, description } = data;
  return (
    <div className="col-lg-4 col-md-6">
      <div
        className="st-portfolio-single st-style1"
        onClick={() => getData(image.url, title, description)}
      >
        <div className="st-portfolio-item">
          <div className="st-portfolio st-zoom">
            <div className="st-portfolio-img st-zoom-in">
              <img src={image.url} alt="portfolio" />
            </div>
            <div className="st-portfolio-item-hover">
              <Icon icon="mdi:plus-circle" />
              <h5>{title}</h5>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SinglePortfolio.propTypes = {
  data: PropTypes.object,
};

export default SinglePortfolio;
