import { useState, useEffect } from "react";

/**
 * 
 * @returns ResumeLink Component
 */
const ResumeLink: React.FC = () => {
    const [resumeUrl, setResumeUrl] = useState('');
  
    useEffect(() => {
      // Dynamically import the resume PDF
      import('/Chung_Ezra_Resume.pdf').then((module) => {
        setResumeUrl(module.default);
      });
    }, []);
  
    return (
      <div>
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    );
  };
  
  export default ResumeLink;