// /* eslint-disable react/prop-types */
// import { useState, useEffect, useRef, useCallback } from "react";
// import { FiChevronDown } from "react-icons/fi";
// import { DropdownItem } from "./DropdownItem";

// const Dropdown = ({ buttonContent, categories }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const closeDropdown = () => {
//     setIsOpen(false);
//   };

//   const handleOutsideClick = useCallback((event) => {
//     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//       closeDropdown();
//     }
//   }, []);

//   useEffect(() => {
//     if (isOpen) {
//       window.addEventListener("click", handleOutsideClick);
//     } else {
//       window.removeEventListener("click", handleOutsideClick);
//     }

//     return () => {
//       window.removeEventListener("click", handleOutsideClick);
//     };
//   }, [isOpen, handleOutsideClick]);

//   const handleMouseEnter = () => {
//     setIsOpen(true);
//   };

//   const handleMouseLeave = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div
//       className="relative group font-OpenSans"
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       ref={dropdownRef}
//     >
//       <button
//         className="text-white hover:text-gray-300 focus:outline-none flex items-center"
//         onClick={toggleDropdown}
//       >
//         <span className="font-OpenSans font-medium">{buttonContent}</span>
//         <span>
//           <FiChevronDown
//             className={`ml-1 text-2xl text-gray-300 transition-transform ${
//               isOpen ? "transform rotate-180" : ""
//             }`}
//           />
//         </span>
//       </button>
//       {isOpen && (
//         <div className="">
//           <div className="flex flex-row justify-between">
//             {categories.map((category, index) => (
//               <div key={index} className={`w-full px-4 py-3`}>
//                 {category.items.map((item, itemIndex) => (
//                   <DropdownItem
//                     key={itemIndex}
//                     item={item}
//                     categoryTitle={category.title}
//                     href={`/services/${item.href}`}
//                     onClick={() => onItemClick(category.title)}
//                   />
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Dropdown;

/* eslint-disable react/prop-types */
import { useState, useEffect, useRef, useCallback } from "react";
import { FiChevronDown } from "react-icons/fi";
import { DropdownItem } from "./DropdownItem";

const Dropdown = ({ buttonContent, categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleOutsideClick = useCallback((event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
    } else {
      window.removeEventListener("click", handleOutsideClick);
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, handleOutsideClick]);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const onItemClick = (categoryTitle) => {
    // TODO: Handle item click based on the categoryTitle
    console.log(`Clicked on an item in category: ${categoryTitle}`);
  };

  return (
    <div
      className="relative group font-Inter"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
    >
      <a
        className="text-white hover:text-gray-300 focus:outline-none flex items-center"
        onClick={toggleDropdown}
      >
        <span className="text-black cursor-pointer hover:text-red-400 text-xl rounded-md font-Inter transition">{buttonContent}</span>
        <span>
          <FiChevronDown
            className={`ml-1 text-2xl text-gray-300 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </span>
      </a>
      {isOpen && (
        <div className="">
          <div className="flex flex-row justify-between">
            {categories.map((category, index) => (
              <div key={index} className={`w-full px-4 py-3`}>
                {category.items.map((item, itemIndex) => (
                  <DropdownItem
                    key={itemIndex}
                    item={item}
                    categoryTitle={category.title}
                    href={`/services/${item.href}`}
                    onClick={() => onItemClick(category.title)}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
