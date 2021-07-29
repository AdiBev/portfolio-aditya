import { IconProps, IconType } from "../../types";
import { ContactIcon } from "./ContactIcon";
import { EmailIcon } from "./EmailIcon";
import { GithubIcon } from "./GithubIcon";
import { LinkedinIcon } from "./LinkedinIcon";
import { ProfileIcon } from "./ProfileIcon";
import { ProjectsIcon } from "./ProjectsIcon";
import { SkillsIcon } from "./SkillsIcon";

interface Props extends IconProps {
  iconType: IconType;
}

const Icon: React.FunctionComponent<Props> = ({
  color,
  height,
  iconType,
  width,
  className,
}) => {
  const iconProps = { color, height, width, className };

  const getIcon = () => {
    switch (iconType) {
      case IconType.profile:
        return <ProfileIcon {...iconProps} />;
      case IconType.contact:
        return <ContactIcon {...iconProps} />;
      case IconType.projects:
        return <ProjectsIcon {...iconProps} />;
      case IconType.skills:
        return <SkillsIcon {...iconProps} />;
      case IconType.linkedin:
        return <LinkedinIcon {...iconProps} />;
      case IconType.github:
        return <GithubIcon {...iconProps} />;
      case IconType.email:
        return <EmailIcon {...iconProps} />;
      default:
        return null;
    }
  };

  return <>{getIcon()}</>;
};

export default Icon;
