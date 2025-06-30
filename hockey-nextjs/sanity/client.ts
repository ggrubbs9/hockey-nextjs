import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "tea38j8h",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});