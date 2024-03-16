import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "l5o6s57n",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-09-09",
});


export default client;
