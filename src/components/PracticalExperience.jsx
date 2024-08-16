import "../styles/FormSection.css";
import FoldableSection from "./FoldableSection";

function PracticalExperience(props) {
  return (
    <FoldableSection title="Experience">
      <div className="PracticalExperience form-section">
        <label>
          Company Name:
          <input
            type="text"
            name="company"
            value={props.data.company}
            onChange={props.onChange}
          />
        </label>
        <label>
          Position Title:
          <input
            type="text"
            name="positionTitle"
            value={props.data.positionTitle}
            onChange={props.onChange}
          />
        </label>
        <label>
          Main Responsibilities:
          <textarea
            name="mainResponsibilities"
            value={props.data.mainResponsibilities}
            onChange={props.onChange}
          />
        </label>
        <label className="date-label">
          Date From:
          <input
            type="month"
            name="dateFrom"
            value={props.data.dateFrom}
            onChange={props.onChange}
            className="date-input"
          />
        </label>
        <label className="date-label">
          Date Until:
          <input
            type="month"
            name="dateUntil"
            value={props.data.dateUntil}
            onChange={props.onChange}
            className="date-input"
          />
        </label>
        <button className="remove-section-button" onClick={props.onRemove}>
          Remove
        </button>
      </div>
    </FoldableSection>
  );
}

export default PracticalExperience;
