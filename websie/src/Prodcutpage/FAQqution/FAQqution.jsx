import React, { useState } from "react";
import { FAQsrtring } from "./FAQsrting";
import "./FAQqution.css";

const FAQqution = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleAnswer = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((item) => item !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  const isAnswerOpen = (index) => {
    return openIndexes.includes(index);
  };

  return (
    <>
<div className="FAQSapphireimaginpage"> FAQ - Sapphire</div>

      {FAQsrtring.map((faqItem, index) => (
        <div className="faq-sapphire" key={index}>
          <div className="butoon-borader">
            <button className="howto" onClick={() => toggleAnswer(index)}>
              {faqItem.question}
              {isAnswerOpen(index) ? (
                <div className="chevron">
                  <i className="fa-solid fa-chevron-up"></i>
                </div>
              ) : (
                <div className="chevron">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              )}
            </button>
            <p
              className="answer"
              style={{ display: isAnswerOpen(index) ? "block" : "none" }}
            >
              {faqItem.answer}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FAQqution;
