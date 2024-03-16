import Page from "./pageBlogNormal";

// export const generateMetadata = ({ params }) => {
//   return {
//     title: `${params.serviceDetails}`,
//   };
// };

export const generateMetadata = ({ params }) => {
  return {
    title: "Explore Our Blog for Successful Learning | Grades Achievers",
    description:
      "Explore our Grades Achievers blog for insightful articles, expert tips, and inspiring stories on education. Stay informed and empowered with valuable resources .",
  };
};

function BPage() {
  return (
    <>
      <Page />
    </>
  );
}

export default BPage;
