import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationExperience from "./components/EducationExperience";
import PracticalExperience from "./components/PracticalExperience";
import DisplayCV from "./components/DisplayCV";
import "./styles/App.css";
import html2pdf from "html2pdf.js";

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    portfolio: "",
  });

  const [educationExperience, setEducationExperience] = useState([
    { id: 1, school: "", titleOfStudy: "", dateOfStudy: "" },
  ]);

  const [practicalExperience, setPracticalExperience] = useState([
    {
      id: 1,
      company: "",
      positionTitle: "",
      mainResponsibilities: "",
      dateFrom: "",
      dateUntil: "",
    },
  ]);

  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleGeneralInfoChange(event) {
    const { name, value } = event.target;
    setGeneralInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  }

  function handleEducationExperienceChange(id, event) {
    const { name, value } = event.target;
    setEducationExperience((prevExperience) =>
      prevExperience.map((exp) =>
        exp.id === id ? { ...exp, [name]: value } : exp
      )
    );
  }

  function handlePracticalExperienceChange(id, event) {
    const { name, value } = event.target;
    setPracticalExperience((prevExperience) =>
      prevExperience.map((exp) =>
        exp.id === id ? { ...exp, [name]: value } : exp
      )
    );
  }

  function addEducationExperience() {
    setEducationExperience((prevExperience) => [
      ...prevExperience,
      {
        id: prevExperience.length + 1,
        school: "",
        titleOfStudy: "",
        dateOfStudy: "",
      },
    ]);
  }

  function removeEducationExperience(id) {
    setEducationExperience((prevExperience) =>
      prevExperience.filter((exp) => exp.id !== id)
    );
  }

  function addPracticalExperience() {
    setPracticalExperience((prevExperience) => [
      ...prevExperience,
      {
        id: prevExperience.length + 1,
        company: "",
        positionTitle: "",
        mainResponsibilities: "",
        dateFrom: "",
        dateUntil: "",
      },
    ]);
  }

  function removePracticalExperience(id) {
    setPracticalExperience((prevExperience) =>
      prevExperience.filter((exp) => exp.id !== id)
    );
  }

  function handleSubmit() {
    setIsSubmitted(true);
  }

  function handleEdit() {
    setIsSubmitted(false);
  }

  function handleDownloadPDF() {
    const element = document.getElementById("cv-display");
    html2pdf().from(element).save("CV.pdf");
  }

  return (
    <div className="App">
      <header>
        <h1>Curriculum Vitae Generator</h1>
      </header>
      {!isSubmitted ? (
        <div className="form-container">
          <GeneralInfo data={generalInfo} onChange={handleGeneralInfoChange} />
          {educationExperience.map((experience) => (
            <EducationExperience
              key={experience.id}
              data={experience}
              onChange={(e) =>
                handleEducationExperienceChange(experience.id, e)
              }
              onRemove={() => removeEducationExperience(experience.id)}
            />
          ))}
          <div className="button-container">
            <button
              className="add-section-button"
              onClick={addEducationExperience}
            >
              Add Education
            </button>
          </div>

          {practicalExperience.map((experience) => (
            <PracticalExperience
              key={experience.id}
              data={experience}
              onChange={(e) =>
                handlePracticalExperienceChange(experience.id, e)
              }
              onRemove={() => removePracticalExperience(experience.id)}
            />
          ))}
          <div className="button-container">
            <button
              className="add-section-button"
              onClick={addPracticalExperience}
            >
              Add Experience
            </button>
          </div>

          <div className="button-container">
            <button className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </div>
      ) : (
        <div className="form-container">
          <div id="cv-display">
            <DisplayCV
              generalInfo={generalInfo}
              educationExperience={educationExperience}
              practicalExperience={practicalExperience}
            />
          </div>
          <div className="button-container">
            <button className="edit-button" onClick={handleEdit}>
              Edit
            </button>
            <button className="download-button" onClick={handleDownloadPDF}>
              Download as PDF
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
