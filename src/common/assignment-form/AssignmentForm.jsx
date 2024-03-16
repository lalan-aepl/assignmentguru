"use client";
import { useState } from "react";
import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";

const AssignmentForm = () => {
  const [step1Data, setStep1Data] = useState(null);
  const [step1Submitted, setStep1Submitted] = useState(false);

  const handleStep1Submit = (data) => {
    setStep1Data(data); // Set the submitted data from Form 1
    setStep1Submitted(true); // Update the state to indicate that Step 1 has been submitted
  };

  return (
    <div>
      {!step1Submitted && <Step1Form onSubmit={handleStep1Submit} />}
      {step1Submitted && <Step2Form data={step1Data} />}
    </div>
  );
};

export default AssignmentForm;
