import React, { useState } from "react";

const Accordion = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <div className="border-b border-gray-200 whitespace-pre-wrap bg-[#909485] text-gray-900">
        <button
            className="w-full text-left py-4 px-6 text-2xl font-medium text-gray-700 hover:bg-gray-100 focus:outline-none flex justify-between items-center"
            onClick={() => setIsOpen(!isOpen)}
        >
            <span>{title}</span>
            <span>{isOpen ? "-" : "+"}</span>
        </button>
            {isOpen && <div className="px-20 py-4 whitespace-pre-wrap text-white opacity-95 text-lg bg-billiebg">{content}</div>}
      </div>
  );
};

export default Accordion;
