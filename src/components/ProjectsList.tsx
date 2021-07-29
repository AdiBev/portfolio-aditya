import { projectsListData } from "../portfolioData";
import { BodyTitle } from "./BodyTitle";
import { ProjectListItem } from "./ProjectListItem";

export const ProjectsList: React.FunctionComponent = () => {
  return (
    <div id="projects">
      <BodyTitle title="Recent Projects" />
      {projectsListData.map((project) => (
        <ProjectListItem {...project} />
      ))}
    </div>
  );
};
