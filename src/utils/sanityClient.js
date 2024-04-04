import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "slldkd28",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-09-09",
});


export default client;
