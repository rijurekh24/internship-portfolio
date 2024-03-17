import PropTypes from "prop-types";

const SingleResume = ({ element }) => {
  const { company_name, startDate, endDate, summary, jobTitle } = element;
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="st-resume-timeline">
      <h3 className="st-resume-timeline-title">{jobTitle}</h3>
      <div className="st-resume-timeline-duration">
        {formatDate(startDate)} - {formatDate(endDate)}
      </div>
      <h4 className="st-resume-timeline-subtitle">{company_name}</h4>
      <div className="st-resume-timeline-text">
        <p>{summary}</p>
      </div>
    </div>
  );
};

SingleResume.propTypes = {
  element: PropTypes.object,
};

export default SingleResume;
