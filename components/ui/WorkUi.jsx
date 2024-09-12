import React from "react";
import "../ui/styles/WorkUi.scss";

const WorkUi = () => {
  const workExperience = [
    {
      companyName: "Mindhome",
      companyLogo: "",
      startDate: "",
      endDate: "",
      companyDescription: "",
    },
  ];

  return (
    <div className="work-ui-container">
      {workExperience.map((company) => {
        return (
          <>
            <div>{company.companyName}</div>
            <div className="company-start-end-date-container">
              <div>{company.startDate}</div>
              <div>{company.endDate}</div>
            </div>
            <div>{company.companyDescription}</div>
          </>
        );
      })}
    </div>
  );
};

export default WorkUi;
