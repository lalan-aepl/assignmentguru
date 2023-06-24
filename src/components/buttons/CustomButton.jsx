/* eslint-disable react/prop-types */

// import classNames from 'classnames';

// function CustomButton({
//   children,
//   onClick,
//   bgColor,
//   icon,
//   iconPosition,
//   className,
//   textColor,
//   boxShadow,
// }) {
//   const backgroundColor = `bg-${bgColor} hover:bg-${bgColor} active:bg-${bgColor}`;
//   const textClass = textColor ? `text-${textColor}`: '';
//   const boxShadowClass = boxShadow ? `shadow-${boxShadow}` : ''

//   const classes = classNames(
//     'flex items-center justify-center gap-2 py-4 px-2 font-medium rounded-md font-Inter text-[14px]',
//     backgroundColor,
//     textClass,
//     className,
//     boxShadowClass,
//     'sm:text-sm sm:py-3 sm:px-6 sm:gap-3 sm:rounded-md'
//   );

//   const iconClasses = classNames('inline-block', {
//     'mr-2': iconPosition === 'left',
//     'ml-2': iconPosition === 'right',
//   });

//   const renderIcon = () => {
//     if (icon) {
//       const Icon = icon;
//       return <Icon className={iconClasses} />;
//     }
//     return null;
//   };

//   return (
//     <button
//       className={classes}
//       onClick={onClick}
//       style={{
//         background: bgColor,
//         color: textColor,
//         boxShadow: boxShadowClass,
//       }}
//     >
//       {iconPosition === 'left' && renderIcon()}
//       {children}
//       {iconPosition === 'right' && renderIcon()}
//     </button>
//   );
// }


// export default CustomButton;
// import classNames from 'classnames';

// function CustomButton({
//     children,
//     onClick,
//     bgGradientStart,
//     bgGradientEnd,
//     icon,
//     iconPosition,
//     className,
//     textColor,
//     boxShadow,
//     borderRadius,
//   }) {
//     const backgroundColor = bgGradientStart && bgGradientEnd
//       ? `bg-gradient-to-r ${bgGradientStart} ${bgGradientEnd} hover:from-${bgGradientStart} hover:to-${bgGradientEnd} active:from-${bgGradientStart} active:to-${bgGradientEnd}`
//       : '';
//     const textClass = textColor ? `text-${textColor}` : '';
//     const boxShadowClass = boxShadow ? `shadow-${boxShadow}` : '';
  
//     const classes = classNames(
//       'flex items-center justify-center gap-2 py-4 px-2 font-medium font-Inter text-[14px]',
//       backgroundColor,
//       textClass,
//       className,
//       boxShadowClass,
//       borderRadius === 'full' ? 'rounded-full' : `rounded-${borderRadius}`,
//       'sm:text-sm sm:py-3 sm:px-6 sm:gap-3 '
//     );
  
//     const iconClasses = classNames('inline-block', {
//       'mr-2': iconPosition === 'left',
//       'ml-2': iconPosition === 'right',
//     });
  
//     const renderIcon = () => {
//       if (icon) {
//         const Icon = icon;
//         return <Icon className={iconClasses} />;
//       }
//       return null;
//     };
  
//     return (
//       <button
//         className={classes}
//         onClick={onClick}
//         style={{
//           background: bgGradientStart && bgGradientEnd ? `linear-gradient(90deg, ${bgGradientStart} 0%, ${bgGradientEnd} 100%)` : '',
//           color: textColor,
//           boxShadow: boxShadowClass,
//         }}
//       >
//         {iconPosition === 'left' && renderIcon()}
//         {children}
//         {iconPosition === 'right' && renderIcon()}
//       </button>
//     );
//   }
  
//   export default CustomButton;

import classNames from 'classnames';

function CustomButton({
  children,
  onClick,
  bgColor,
  bgGradientStart,
  bgGradientEnd,
  icon,
  iconPosition,
  className,
  textColor,
  boxShadow,
  borderRadius,
}) {
  const backgroundColor = bgColor
    ? `bg-${bgColor} hover:bg-${bgColor} active:bg-${bgColor}`
    : bgGradientStart && bgGradientEnd
    ? `bg-gradient-to-r ${bgGradientStart} ${bgGradientEnd} hover:from-${bgGradientStart} hover:to-${bgGradientEnd} active:from-${bgGradientStart} active:to-${bgGradientEnd}`
    : '';
  const textClass = textColor ? `text-${textColor}` : '';
  const boxShadowClass = boxShadow ? `shadow-${boxShadow}` : '';

  const classes = classNames(
    'flex items-center justify-center gap-2 py-4 px-2 font-medium font-Inter text-[14px]',
    backgroundColor,
    textClass,
    className,
    boxShadowClass,
    borderRadius === 'full' ? 'rounded-full' : `rounded-${borderRadius}`,
    'sm:text-sm sm:py-3 sm:px-6 sm:gap-3 '
  );

  const iconClasses = classNames('inline-block', {
    'mr-2': iconPosition === 'left',
    'ml-2': iconPosition === 'right',
  });

  const renderIcon = () => {
    if (icon) {
      const Icon = icon;
      return <Icon className={iconClasses} />;
    }
    return null;
  };

  return (
    <button
      className={classes}
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        background: bgGradientStart && bgGradientEnd ? `linear-gradient(90deg, ${bgGradientStart} 0%, ${bgGradientEnd} 100%)` : '',
        color: textColor,
        boxShadow: boxShadowClass,
      }}
    >
      {iconPosition === 'left' && renderIcon()}
      {children}
      {iconPosition === 'right' && renderIcon()}
    </button>
  );
}

export default CustomButton;
