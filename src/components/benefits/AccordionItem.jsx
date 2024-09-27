import { useState } from 'react';
import Image from '../../assests/images/image 18.png'
const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div>
    <button
      className="w-full text-left py-3 flex justify-between items-center"
      onClick={onClick}
    >
      <span className="AllTitle">{title}</span>
      <span className="text-blue-400 text-2xl">{isOpen ? 'x' : '+'}</span>
    </button>
  
    {/* Child div with smooth transition */}
    <div
      className={`text-[18px] border-l border-r text-[#565656] overflow-hidden transition-all duration-500 ease-in-out ${
        isOpen ? 'max-h-96 opacity-100 p-4' : 'max-h-0 opacity-0'
      }`}
      style={{ transition: 'max-height 1s ease, opacity 1s ease' }} // Ensure smooth transition
    >
      {content}
    </div>
  </div>
  
  );
};

export default function AccordionExample() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex max-w-[1200px] mx-auto pt-[50px]  h-auto lg:h-[630px] flex-col lg:flex-row  gap-x-[100px] gap-4 p-4">
      {/* Left Section */}
      <div className=" w-full lg:w-[545px]">
        <h1 className=" text-[28px] sm:text-[42px] AllTitle ">
          Lorem & Impsum <span className="text-[#1B7EF6]">love</span> lorem ipsum!
        </h1>
        

        <div className="mt-4">
          {accordionData.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>

      {/* Right Section */}
      <div className=" w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]">
        <img
          src={Image} 
          alt="Family Image"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
}

const accordionData = [
    {
      title: "Lorem ipsum, for the lorem ipsum!",
      content: "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  {
    title: "Vide et controla tua liberos",
    content: "ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    title: "Vide et controla tua liberos demand",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Vide et controla tua liberos gifts",
    content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    title: "Vide et controla tua liberos pace",
    content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    title: "Vide et controla tua liberos",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
];
