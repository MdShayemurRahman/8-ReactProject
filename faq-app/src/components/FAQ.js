import React from "react";

const FAQ = ({ id, question, answer }) => {
  const [faq, setFaq] = React.useState(false);
  return (
    <div>
      <div className="faq-content">
        <h4>{question}</h4>
        <button onClick={() => setFaq(!faq)}>{faq ? "+" : "-"}</button>
      </div>
      {faq && <p>{answer}</p>}
    </div>
  );
};

export default FAQ;
