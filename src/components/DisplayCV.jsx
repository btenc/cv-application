import "../styles/DisplayCV.css";

function DisplayCV({ generalInfo, educationExperience, practicalExperience }) {
  return (
    <div className="DisplayCV">
      <h1>{generalInfo.name}</h1>
      <div className="GeneralInfoDisplay">
        <h3>Contact Information</h3>
        {generalInfo.email && <p>Email: {generalInfo.email}</p>}
        {generalInfo.phone && <p>Phone: {generalInfo.phone}</p>}
        {generalInfo.portfolio && (
          <p>
            External Link:{" "}
            <a
              href={generalInfo.portfolio}
              target="_blank"
              rel="noopener noreferrer"
            >
              {generalInfo.portfolio}
            </a>
          </p>
        )}
      </div>
      {educationExperience.length > 0 &&
        educationExperience.some(
          (exp) => exp.school || exp.titleOfStudy || exp.dateOfStudy
        ) && (
          <div className="EducationExperienceDisplay">
            <h3>Education</h3>
            {educationExperience.map((experience) =>
              experience.school ||
              experience.titleOfStudy ||
              experience.dateOfStudy ? (
                <div key={experience.id}>
                  {experience.school && (
                    <p>
                      <strong>{experience.school}</strong>
                    </p>
                  )}
                  {experience.titleOfStudy && (
                    <p>Title of Study: {experience.titleOfStudy}</p>
                  )}
                  {experience.dateOfStudy && (
                    <p>Completion: {experience.dateOfStudy}</p>
                  )}
                </div>
              ) : null
            )}
          </div>
        )}
      {practicalExperience.length > 0 &&
        practicalExperience.some(
          (exp) =>
            exp.company ||
            exp.positionTitle ||
            exp.mainResponsibilities ||
            exp.dateFrom ||
            exp.dateUntil
        ) && (
          <div className="PracticalExperienceDisplay">
            <h3>Experience</h3>
            {practicalExperience.map((experience) =>
              experience.company ||
              experience.positionTitle ||
              experience.mainResponsibilities ||
              experience.dateFrom ||
              experience.dateUntil ? (
                <div key={experience.id}>
                  {experience.company && (
                    <p>
                      <strong>{experience.company}</strong>
                    </p>
                  )}
                  {experience.positionTitle && (
                    <p>Position Title: {experience.positionTitle}</p>
                  )}
                  {experience.mainResponsibilities && (
                    <p>Responsibilities: {experience.mainResponsibilities}</p>
                  )}
                  {experience.dateFrom && (
                    <p>Date From: {experience.dateFrom}</p>
                  )}
                  {experience.dateUntil && (
                    <p>Date Until: {experience.dateUntil}</p>
                  )}
                </div>
              ) : null
            )}
          </div>
        )}
    </div>
  );
}

export default DisplayCV;
