/* eslint-disable react/prop-types */
export const DropdownItem = ({ name, categoryTitle, pl, textColor, textHoverColor, onClick, href }) => {
  const handleClick = () => {
    if (onClick) {
      onClick(categoryTitle);
    }
  };

  return (
    <a
      href={href}
      className={`block cursor-pointer font-Inter pl-${pl} pr-4 py-2 text-xs xl:text-sm text-${textColor} hover:text-${textHoverColor}`}
      role="menuitem"
      // onClick={onClick}
      onClick={handleClick}
    >
      {name}
    </a>
  );
};
