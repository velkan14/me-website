import { defineDocumentType } from "contentlayer/source-files";

export const Projects = defineDocumentType(() => ({
  name: "Projects",
  filePathPattern: `projects/**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the ",
      required: true,
    },
    order: {
      type: "number",
      description: "The order that should be displayed",
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
    href: {
      type: "string",
      description: "Link to the project",
    },
  },
}));
