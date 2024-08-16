import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Importing icons
import "../styles/FoldableSection.css";

function FoldableSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="foldable-section">
      <div
        className="foldable-header"
        onClick={toggleSection}
        style={{
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h2>{title}</h2>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />} {/* Toggle icons */}
      </div>
      <div
        style={{
          maxHeight: isOpen ? "1000px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        {children}
      </div>
    </div>
  );
}

export default FoldableSection;
