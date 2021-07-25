import { IconProps, IconType } from "../../types";
import { NotificationIcon } from "./NotificationIcon";
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
      case IconType.notification:
        return <NotificationIcon {...iconProps} />;
      case IconType.projects:
        return <ProjectsIcon {...iconProps} />;
      case IconType.skills:
        return <SkillsIcon {...iconProps} />;
    }
  };

  return <>{getIcon()}</>;
};

export default Icon;
