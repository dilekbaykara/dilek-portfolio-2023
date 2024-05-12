import React from "react";

const resumePDF = pdf("Dilek_Baykara_Resume_2024.pdf");

function Resume() {
  return (
    <div id="resume-div">
      <div id="resume-title">Resume</div>
      <div id="resume-description">
        If you would like to work together, please reach out!
      </div>
      <div id="resume-button-div">
        <a href={resumePDF} download={resumePDF}>
          <button className="resume-button"> Download Resume </button>
        </a>
      </div>
    </div>
  );
}
export default Resume;
function pdf(pdfFile: string): string {
  return pdfFile;
}
