import { defineDocumentType } from "contentlayer/source-files";
import { format } from "date-fns";

export const Certification = defineDocumentType(() => ({
  name: "Certification",
  filePathPattern: `certifications/**/*.md`,
  fields: {
    title: {
      type: "string",
      description: "The title of the certification",
      required: true,
    },
    certifier: {
      type: "string",
      description: "The entity that gave the certificate",
      required: true,
    },
    date: {
      type: "date",
      description: "The date of the certificate",
      required: true,
    },
    href: {
      type: "string",
      description: "Link to the certificate",
      required: true,
    },
  },

  computedFields: {
    period: {
      type: "date",
      resolve: (cert) => format(new Date(cert.date), "MMMM yyyy"),
    },
  },
}));
