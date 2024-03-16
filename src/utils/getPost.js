import client from "./sanityClient";

export async function getPosts() {
  const posts = await client.fetch('*[_type == "blog"]');
  return posts;
}
