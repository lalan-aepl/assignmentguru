/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";
import sanityClient from "../../../utils/sanityClient"// import Image from "next/image";
import { format } from "date-fns";
import "../style.css";
import { ShortBlogCard } from "../ShortBlogCard";
// import Head from "next/head";
// import { generateMetadata } from "./page";

// import { BlogCard } from "./BlogCard";
// import SEO from "../../components/Seo";
// import { truncateString } from "../../utils/truncateString";

const extractTextFromBlocks = (blocks) => {
  if (!blocks || !Array.isArray(blocks)) {
    return "";
  }

  // Extract text content from blocks
  const textContent = blocks
    .map((block) => block.children.map((child) => child.text).join(""))
    .join(" ");

  return textContent;
};

const Page = () => {
  const [singlePost, setSinglePost] = useState(null);
  const [posts, setPosts] = useState([]); // Add this line
  const [loading, setLoading] = useState(true);
  const { postDetails } = useParams();

  console.log(postDetails, "postttt");

  useEffect(() => {
    const fetchSinglePost = sanityClient.fetch(
      `*[slug.current == "${postDetails}"] {
        title,
        slug,
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

    const fetchPosts = sanityClient.fetch(
      `*[_type == "post"] {
        title,
        slug,
        body,
        meta,
        publishedAt,
        "categories": categories[]->title,
        "name": author->name,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt,
        }
      } | order(publishedAt desc)`
    );

    Promise.all([fetchSinglePost, fetchPosts])
      .then(([singlePostData, postsData]) => {
        setSinglePost(singlePostData[0]);
        setPosts(postsData);
        setLoading(false);
      })
      .catch(console.error);
  }, [postDetails]);

  // const metadata = generateMetadata({
  //   params: { postDetails: singlePost.title },
  // });

  if (!singlePost)
    return (
      <div className="flex items-center justify-center h-screen">
        Loading...
      </div>
    );

  // const truncatedDescription = truncateString(singlePost?.body || "", 140);
  // console.log(singlePost?.title, "title");
  return (
    <>
      {/* <SEO
        title={`${singlePost.title} | Grades Achievers`}
        schemaStruct={[
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `https://assignment-guru.com/blog/${singlePost.slug.current}`,
            },
            headline: singlePost.title,
            // description: truncateString(singlePost?.body || "", 140),
            description: extractTextFromBlocks(singlePost?.body) || "", // Use the extracted text
            image: singlePost.mainImage?.asset?.url || "",
            author: {
              "@type": "Organization",
              name: singlePost.name,
            },
            publisher: {
              "@type": "Organization",
              name: "Grades Achievers",
              logo: {
                "@type": "ImageObject",
                url: "https://assignment-guru.com/assets/D13_Logo-289828a8.webp",
              },
            },
            datePublished: format(
              new Date(singlePost.publishedAt),
              "yyyy-MM-dd"
            ),
          },
        ]}
      />  */}
      {/* <Head>
        <title>{singlePost.title} | Grades Achievers</title>
        <meta name="title" content={`${singlePost.title} | Grades Achievers`} />
      </Head> */}
      {/* <generateMetadata mettitle={`${singlePost.title} | Grades Achievers`} /> */}
      {/* <Metadata>
        <title>{metadata.title}</title>
      </Metadata> */}
      <div className="mt-28 full-page flex flex-col lg:flex-row gap-4 px-8 max-w-screen-xl justify-center mx-auto">
        <div className="flex flex-col lg:col-span-3">
          {loading ? (
            <div className="flex justify-center h-screen">
              <div className=" loader " />
            </div>
          ) : (
            <article className="para">
              <div className="lg:py-10 max-w-6xl justify-center flex flex-col mx-auto">
                <h1 className="text-4xl md:text-justify font-bold font-Nunito pb-4">
                  {singlePost?.title}
                </h1>
                <div className="pb-10">
                  {singlePost?.mainImage && singlePost?.mainImage?.asset && (
                    <img
                      src={singlePost?.mainImage?.asset?.url}
                      alt={singlePost?.title}
                      title={singlePost?.title}
                      className="w-full md:h-[400px] xl:h-[500px] rounded"
                      // width="100%"
                      // height="100%"
                      width={512}
                      height={512}
                    />
                  )}

                  {singlePost?.publishedAt && (
                    <div className="flex justify-between w-full gap-4 py-5">
                      <p className="text-xs font-bold font-Nunito">
                        Author:{" "}
                        <span className="font-medium font-QuickSand">
                          {singlePost?.name}
                        </span>
                      </p>
                      <p className="text-xs font-bold font-Nunito">
                        Category:{" "}
                        <span className="font-medium font-QuickSand">
                          {singlePost?.categories}
                        </span>
                      </p>
                      <p className="text-xs font-bold font-Nunito">
                        Date:{" "}
                        <span className="font-medium font-QuickSand">
                          {format(
                            new Date(singlePost?.publishedAt),
                            "dd/MM/yyyy"
                          )}
                        </span>
                      </p>
                    </div>
                  )}
                  <div className="blockcontent-style">
                    <BlockContent
                      blocks={singlePost?.body}
                      projectId="l5o6s57n"
                      dataset="production"
                    // serializers={{
                    //   h2: (props) => (
                    //     <h2 className="text-2xl font-bold py-6" {...props} />
                    //   ),
                    //   h3: (props) => (
                    //     <h3
                    //       className="text-2xl font-bold py-6 text-red-400"
                    //       {...props}
                    //     />
                    //   ),
                    // }}
                    />
                  </div>
                </div>
                <div className="flex w-full mb-6">
                  <a
                    href="/blog"
                    className="w-auto capitalize hover:no-underline bg-gradient-to-r cursor-pointer from-slate-900 to-slate-700 text-white px-12 py-4 rounded-full font-bold font-Nunito"
                  >
                    Read more articles
                  </a>
                </div>
              </div>
            </article>
          )}
        </div>
        <div className="flex sidebar lg:pt-4 lg:pb-10 lg:basis-2/5">
          <div className="lg:sticky lg:top-5">
            <div className="flex lg:sticky lg:top-5 gap-2 mt-10 lg:pb-10 flex-col border-[#a4a4a4] border-l-2 pl-4 ">
              <h3 className="text-2xl md:text-justify font-bold font-Nunito py-2 pl-4 bg-[#f07029] rounded-sm">
                Related Posts
              </h3>
              {posts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
                  {posts
                    .slice(0, Math.min(posts.length, 6))
                    .map((post, index) => (
                      <ShortBlogCard
                        key={index}
                        src={post?.mainImage?.asset?.url}
                        title={post?.title}
                        author={post?.name}
                        category={post?.categories}
                        date={format(new Date(post?.publishedAt), "dd/MM/yyyy")}
                        to={`/blog/${post?.slug?.current}`}
                      />
                    ))}
                </div>
              ) : (
                <p className="pt-28 w-full text-center">No Posts Found</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
