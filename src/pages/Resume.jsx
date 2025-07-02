import React from "react";
import Resume from "../components/resume";
Resume
function ResumeViewer() {
  return (
     <div className="w-full md:w-[80%] min-h-screen p-4 md:p-6 bg-[#1F1D36] text-white float-end">
      <h1 className="text-2xl md:text-4xl font-bold text-peach font-lobster text-center mb-6">
        {"<My Resume/>"}
      </h1>

  <Resume/>
    </div>

  );
}

export default ResumeViewer;
