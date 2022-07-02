import { defineDocumentType } from "contentlayer/source-files";

export const Work = defineDocumentType(() => ({
  name: "Work",
  filePathPattern: `work/**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the job",
      required: true,
    },
    date: {
      type: "date",
      description: "The start date",
      required: true,
    },
    company: {
      type: "string",
      description: "The company where you worked",
      required: true,
    },
    period: {
      type: "string",
      description: "The start year and end year",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
      typeField: "string",
      description: "Tags with the technologies used",
      required: true,
    },
  },
}));
