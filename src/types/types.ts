export type Project = {
  title: string;
  description: string;
  tech_set: TechItem[];
  status: Status;
  url: string | undefined;
  image: ImageMetadata;
};

type TechItem = { name: string; color: string };
type Status = {
  statusDescription: string;
  statusCode: "completed" | "wip" | "not-started";
};
export type Projects = Project[];
