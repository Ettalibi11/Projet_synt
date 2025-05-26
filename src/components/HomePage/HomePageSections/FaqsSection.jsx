      // src/components/HomePageSections/FaqsSection.jsx
import React, { useState } from 'react';

// You can keep faqsData here or pass it as a prop if it might change or come from elsewhere
const faqsData = [
  {
    id: 1,
    question: "What types of flowers do you offer?",
    answer: "We offer a wide variety of fresh flowers including roses, lilies, tulips, peonies, orchids, and seasonal specialties. We also have a beautiful selection of mixed bouquets and arrangements for all occasions."
  },
  {
    id: 2,
    question: "Do you offer same-day delivery?",
    answer: "Yes, we offer same-day delivery for orders placed before 2 PM in our local delivery zones. Please check our delivery information page for more details and specific cutoff times."
  },
  {
    id: 3,
    question: "Can I customize my flower order?",
    answer: "Absolutely! We love creating custom arrangements. Please contact us directly or visit our store to discuss your specific needs, color preferences, and flower choices with one of our florists."
  },
  {
    id: 4,
    question: "What is your return policy for plants and flowers?",
    answer: "We guarantee the freshness of our flowers. If you are not satisfied with your order, please contact us within 24 hours of receipt with a photo, and we will be happy to assist you with a replacement or refund where appropriate."
  }
];

function FaqsSection() {
  const [openFaqId, setOpenFaqId] = useState(null);

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faqs-section" className="faqs-section homepage-section">
      <div className="section-content-wrapper">
        <h2 className="section-title">Frequently Asked Questions</h2>
        <div className="faqs-list">
          {faqsData.map(faq => (
            <div key={faq.id} className="faq-item">
              <button
                className={`faq-question ${openFaqId === faq.id ? 'open' : ''}`}
                onClick={() => toggleFaq(faq.id)}
                aria-expanded={openFaqId === faq.id}
                aria-controls={`faq-answer-${faq.id}`}
              >
                {faq.question}
                <span className="faq-icon">{openFaqId === faq.id ? '−' : '+'}</span>
              </button>
              {openFaqId === faq.id && (
                <div id={`faq-answer-${faq.id}`} className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqsSection;