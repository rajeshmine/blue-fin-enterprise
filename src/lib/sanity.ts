import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "your_project_id",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});