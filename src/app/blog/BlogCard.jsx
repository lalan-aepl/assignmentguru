/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { truncateString } from "../../utils/truncateString";
export function BlogCard({
  src,
  metadescription,
  title,
  to,
  author,
  category,
  date,
}) {
  // const para = truncateString(metadescription, 140);

  return (
    <>
      <a href={to} className="cursor-pointer hover:no-underline">
        <div className="shadow-md w-full hover:border-2 hover:transition hover:rounded hover:border-[#605cd2] hover:shadow-md hover:shadow-blue-darkBlue">
          <div color="blue-gray">
            <img
              loading="eager"
              src={src}
              alt="ui/ux review check"
              title="ui/ux review check"
              className="w-full h-44 object-cover"
              width="100%"
              height="100%"
            />
          </div>
          <div className="px-6 pt-5 w-full">
            <h2
              color="blue-gray"
              className="text-base font-bold font-QuickSand"
            >
              {title}
            </h2>

            {/* <p className="pt-4 text-sm font-medium font-Nunito">{para}</p> */}

            <div className="flex justify-between w-full gap-4 py-5">
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
