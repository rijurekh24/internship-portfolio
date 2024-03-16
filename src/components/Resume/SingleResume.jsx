import PropTypes from "prop-types";

const SingleResume = ({ element }) => {
  const { company_name, startDate, endDate, summary, jobTitle } = element;
  return (
    <div className="st-resume-timeline">
      <h3 className="st-resume-timeline-title">{jobTitle}</h3>
      {/* <div className="st-resume-timeline-duration">{duration}</div> */}
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
