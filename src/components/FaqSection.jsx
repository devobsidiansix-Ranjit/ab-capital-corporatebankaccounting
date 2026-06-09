import React, { useState } from 'react';

/**
 * FAQ section containing collapsible question items managed cleanly by React state.
 */
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      q: "Can high-risk nationalities open a UAE corporate account?",
      a: "Yes — with proper preparation and the right bank. High-risk nationalities face enhanced due diligence, not bans. We specialise in exactly these cases, matching you to banks with appropriate risk appetite and preparing your documentation to the required compliance standard."
    },
    {
      q: "How long does the process take?",
      a: "Most accounts are activated within 7–21 business days from when documents are ready. Complex high-risk cases may take up to 30 days. Independent applications without guidance typically take 4–8 weeks with no guarantee of approval."
    },
    {
      q: "Do I need to be in Dubai physically?",
      a: "Some banks require in-person attendance for the verification interview, particularly for high-risk profiles. Others allow remote onboarding. During your free consultation, we'll tell you exactly what's required for your specific profile."
    },
    {
      q: "What's the minimum balance required?",
      a: "Corporate accounts require minimum balances ranging from AED 0 (digital banks like Wio) to AED 25,000–250,000 for traditional banks. We match you to options that fit your financial position and transaction volume."
    },
    {
      q: "Can you help after a bank rejection?",
      a: "Absolutely — this is one of our most common services. We assess what went wrong, rebuild your compliance profile, and submit to an appropriate alternative bank. Most post-rejection clients are approved within 2–3 weeks."
    },
    {
      q: "Do you handle personal bank accounts?",
      a: "No. AB Capital exclusively handles corporate and business bank accounts for UAE-registered companies — Free Zone, Mainland, or Offshore. We do not assist with personal banking."
    }
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-sec reveal" id="faq">
      <div className="faq-layout">
        <div>
          <div className="eyebrow">FAQ</div>
          <h2>
            Common<br />
            <em>Questions</em>
          </h2>
          <p className="section-lead">Everything you need to know before reaching out.</p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, idx) => (
            <div key={idx} className="faq-item">
              <button className="faq-q" onClick={() => handleToggle(idx)}>
                {faq.q}
                <span className={`faq-toggle ${openIndex === idx ? 'open' : ''}`}>
                  +
                </span>
              </button>
              <div className={`faq-a ${openIndex === idx ? 'open' : ''}`}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
