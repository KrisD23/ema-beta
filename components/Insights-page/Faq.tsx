"use client";

import { faqData } from "@/lib/constants";
import { useState } from "react";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="block sm:hidden w-full  py-16 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-medium font-satoshi text-center mb-10">
          FAQs on Ema&apos;s
          <br />
          Employee Experience
        </h2>

        <div className="space-y-0">
          {faqData.map((faq, index) => (
            <div key={index} className="border-t border-gray-300">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="text-base font-medium pr-4">
                  {faq.question}
                </span>
                <span
                  className={`text-primary-green text-3xl font-light transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className=" text-sm leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-gray-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
