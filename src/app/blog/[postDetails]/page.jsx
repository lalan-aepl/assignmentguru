// import React from "react";
import Page from "./pageCopy";
// import { Metadata } from "next";
import sanityClient from "../../../utils/sanityClient"; // Import sanityClient if not already imported

export const generateMetadata = async ({ params }) => {
  // Define an async function to fetch post details
  const fetchPost = async () => {
    try {
      const result = await sanityClient.fetch(
        `*[slug.current == "${params.postDetails}"] {
          title,
          slug,
          metaDescription,
          body,
          publishedAt,
          "categories": categories[]->title,
          mainImage {
            asset -> {
              _id,
              url
            },
            alt,
          },
          "name": author->name,
        }`
      );
      return result; // Return the fetched post details
    } catch (error) {
      // console.error("Error fetching post:", error);
      return null; // Return null if there's an error
    }
  };

  // Await the result of the fetchPost function
  const postDetailsArray = await fetchPost();

  // console.log(postDetailsArray, "postDetails");

  // Check if postDetailsArray is not empty
  if (postDetailsArray && postDetailsArray.length > 0) {
    const postDetails = postDetailsArray[0]; // Access the first element
    const title =
      postDetails.title || "24X7 Online Homework Assistance at Grades Achievers";
    const description =
      postDetails.metaDescription ||
      "Boost Your Grades with Grades Achievers Expert Homework Assistance Service. We Offers 24/7 Online Help, Personalized Solutions, & Experts Advice";
    console.log(title, "title");
    console.log(description, "description");
    return {
      title: title,
      description: description,
    };
  } else {
    return {
      title: "24X7 Online Homework Assistance at Grades Achievers",
      description:
        "Boost Your Grades with Grades Achievers Expert Homework Assistance Service. We Offers 24/7 Online Help, Personalized Solutions, & Experts Advice",
    };
  }
};

function BDpage() {
  return (
    <>
      <Page />
    </>
  );
}

export default BDpage;
