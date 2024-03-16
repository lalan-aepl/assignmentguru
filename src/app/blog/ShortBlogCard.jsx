/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

// import { Link } from "react-router-dom";
// import { truncateString } from "../../utils/truncateString";
// import Image from "next/image";

export function ShortBlogCard({
  src,
  metadescription,
  title,
  to,
  author,
  category,
  date,
}) {
  // const para = truncateString(metadescription, 140);

  const para = (str, maxLength) => {
    if (!str) {
      return ""; // Return an empty string if the input is undefined or null
    }

    if (str.length <= maxLength) {
      return str;
    }

    return str.substring(0, maxLength) + "...";
  };

  return (
    <>
      <a href={to} className="cursor-pointer hover:no-underline">
        <div className="shadow-md w-full gap-2 hover:border-2 hover:transition hover:rounded hover:border-[#605cd2] hover:shadow-md hover:shadow-blue-darkBlue">
          <div color="blue-gray ">
            <img
              loading="eager"
              src={src}
              alt="ui/ux review check"
              title="ui/ux review check"
              className="w-full h-36 object-cover"
              width={512}
              height={512}
            />
          </div>
          <div className="px-3 py-2 w-full">
            <h2
              color="blue-gray"
              className="text-base font-bold font-QuickSand"
            >
              {title}
            </h2>

            {metadescription !== undefined && (
              <p className="pt-4 text-sm font-medium font-Nunito">{para}</p>
            )}

            <div className="flex justify-between w-full gap-2 py-3">
              <p className="text-xs font-bold font-Nunito">
                Author:{" "}
                <span className="font-medium font-QuickSand">{author}</span>
              </p>
              <p className="text-xs font-bold font-Nunito">
                Topic:{" "}
                <span className="font-medium font-QuickSand">{category}</span>
              </p>
              <span className="text-xs font-bold font-Nunito">{date}</span>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}
