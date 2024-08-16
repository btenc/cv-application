import "../styles/FormSection.css";
import FoldableSection from "./FoldableSection";

function EducationExperience(props) {
  return (
    <FoldableSection title="Education">
      <div className="EducationExperience form-section">
        <label>
          School Name:
          <input
            type="text"
            name="school"
            value={props.data.school}
            onChange={props.onChange}
          />
        </label>
        <label>
          Title of Study:
          <input
            type="text"
            name="titleOfStudy"
            value={props.data.titleOfStudy}
            onChange={props.onChange}
          />
        </label>
        <label className="date-label">
          Completion:
          <input
            type="month"
            name="dateOfStudy"
            value={props.data.dateOfStudy}
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

export default EducationExperience;
