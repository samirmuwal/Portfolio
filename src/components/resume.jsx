import React from "react";
function Resume() {
    return(
            <div className="w-full max-h-[80vh] overflow-y-auto rounded-xl shadow-lg border border-[#272445] scrollbar-thin scrollbar-thumb-blue-800 scrollbar-track-blue-200">
        <img
          src="/resume.jpg"
          alt="Resume"
          className="w-full object-contain"
        />
      </div>
      
    )
}
export default Resume;