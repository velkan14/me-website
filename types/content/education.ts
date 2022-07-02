import { defineDocumentType } from "contentlayer/source-files";

export const Education = defineDocumentType(() => ({
  name: "Education",
  filePathPattern: `education/**/*.md`,
  fields: {
    degree: {
      type: "string",
      description: "The title of the ",
      required: true,
    },
    school: {
      type: "string",
      description: "The title of the certification",
      required: true,
    },
    date: {
      type: "date",
      description: "The start date",
      required: true,
    },
    period: {
      type: "string",
      description: "The start year and end year",
      required: true,
    },
  },
}));
