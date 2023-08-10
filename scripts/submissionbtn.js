import { saveOrder } from "./TransientState.js";


const handleOrderSubmission = (clickEvent) => {
  if (clickEvent.target.id === "saveSubmission") {
    saveOrder();
  }
};

export const SaveSubmission = () => {

  document.addEventListener("click", handleOrderSubmission);

  return "<div><button id='saveSubmission'>Save Submission</button></div>"
};