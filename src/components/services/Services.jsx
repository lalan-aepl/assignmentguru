import { useEffect, useRef, useState } from "react";
import { DropdownItem } from "./DropdownItem";
import { options } from "../../data/nav";

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <li ref={dropdownRef} className=" -ml-24 fixed inline-block text-left">
      <button
        aria-label="menu-btn"
        title="Services"
        onClick={toggleDropdown}
        type="button"
        className="text-black cursor-pointer hover:text-red-400  rounded-md font-Inter sm:text-base font-bold transition"
        >
        <div  className="flex justify-between">
          <span>Services</span>
          <svg
            className=" h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M8.293 11.293a1 1 0 011.414 0L12 13.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1 p-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.reduce((acc, item, index) => {
              if (index % 2 === 0) {
                const nextItem = options[index + 1];
                acc.push(
                  <div key={index} className="grid grid-cols-2">
                    <DropdownItem
                      className="px-0 text-black cursor-pointer"
                      href={`/services/${item.href}`}
                      name={item.name}
                      target="_blank"
                      textColor="black"
                      textHoverColor=""
                      pl="4"
                    />
                    {nextItem && (
                      <DropdownItem
                        className="px-0 text-black cursor-pointer"
                        href={`/services/${nextItem.href}`}
                        name={nextItem.name}
                        target="_blank"
                        textColor="black"
                        textHoverColor=""
                        pl="4"
                      />
                    )}
                  </div>
                );
              }
              return acc;
            }, [])}
          </div>
        </div>
      )}
    </li>
  );
};

export default Services;
