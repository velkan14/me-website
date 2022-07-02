import { makeSource } from "contentlayer/source-files";
import { Projects } from "./types/content/projects";
import { Certification } from "./types/content/certification";
import { Education } from "./types/content/education";
import { Work } from "./types/content/work";

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Certification, Education, Work, Projects],
});
