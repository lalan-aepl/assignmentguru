"use client";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const FaqItem = ({ title, content }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="bg-[#F4F6FB] border-[#b0b0b0] px-5 py-3 rounded-md w-full mb-4">
      <div
        onClick={handleClick}
        className="flex items-center justify-between gap-5 cursor-pointer"
      >
        <h4 className={` text-base md:text-lg font-bold text-black`}>
          {title}
        </h4>
        <div className="bg-slate-300 rounded-full flex items-center justify-center w-8 h-8 cursor-pointer ">
          {active ? (
            <BsChevronUp className="text-slate-900" />
          ) : (
            <BsChevronDown className="text-slate-900" />
          )}
        </div>
      </div>

      {active && (
        <div className="py-6">
          {content.map((paragraph, index) => (
            <p key={index} className={` text-sm font-Inter font-normal`}>
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

const Faq = ({ items }) => {
  const faqSchema = items.map((item, index) => ({
    "@type": "Question",
    name: item.title,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.content.join("\n"),
    },
  }));
  return (
    <>
      {/* <SEO
        // title="FAQ"
        schemaStruct={[
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqSchema,
          },
        ]}
      /> */}
      <section id="faq" aria-label="faq section" className="bg-white">
        <div className="mx-auto max-w-screen-lg px-8 py-12 md:px-16">
          <h4 className="text-4xl mb-7 font-Inter text-center font-semibold text-black capitalize">
            FAQ
          </h4>
          <div className="mb-5">
            {items.map((item, index) => (
              <FaqItem key={index} title={item.title} content={item.content} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
