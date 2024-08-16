import "../styles/FormSection.css";
import FoldableSection from "./FoldableSection";

function GeneralInfo(props) {
  return (
    <FoldableSection title="General Information">
      <div className="GeneralInfo form-section">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={props.data.name}
            onChange={props.onChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={props.data.email}
            onChange={props.onChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="phone"
            value={props.data.phone}
            onChange={props.onChange}
          />
        </label>
        <label>
          External Link:
          <input
            type="url"
            name="portfolio"
            value={props.data.portfolio}
            onChange={props.onChange}
          />
        </label>
      </div>
    </FoldableSection>
  );
}

export default GeneralInfo;
