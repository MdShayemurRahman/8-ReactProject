import React from "react";

const FAQ = ({ id, question, answer }) => {
  const [faq, setFaq] = React.useState(false);
  return (
    <div className="faq-container">
      <div className="faq">
        <h4>{question}</h4>
        <button onClick={() => setFaq(!faq)}>{faq ? "+" : "-"}</button>
      </div>
      {faq && <p className="answer-content">{answer}</p>}
    </div>
  );
};

export default FAQ;
