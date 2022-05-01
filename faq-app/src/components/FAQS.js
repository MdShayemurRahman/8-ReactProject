import React from "react";
import FAQ from "./FAQ";
import faqData from "../faq-data";

const FAQS = () => {
  const [faqs, setFaqs] = React.useState(faqData);

  return (
    <div>
      <h1 className="App-header">FAQ Application</h1>
      {faqs.map((faq) => (
        <FAQ key={faq.id} {...faq} />
      ))}
    </div>
  );
};

export default FAQS;
