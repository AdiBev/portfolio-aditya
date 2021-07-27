import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  makeStyles,
  Tooltip,
  useMediaQuery,
  Switch,
} from "@material-ui/core";
import { Dispatch, SetStateAction } from "react";
import { IconType, ThemeType } from "../types";
import Icon from "./icons";

const useStyle = makeStyles((theme) => ({
  drawer: {
    width: "4rem",
    flexShrink: 0,
    whiteSpace: "nowrap",
    [theme.breakpoints.up("sm")]: {
      width: "8rem",
    },
  },
  listButton: {
    paddingLeft: 0,
    paddingRight: 0,
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "1.6rem",
      paddingRight: "1.6rem",
    },
  },
  iconItem: {
    marginBottom: "2rem",
    justifyContent: "center",
  },
  icon: {
    fill: theme.palette.primary.main,
  },
}));

type Props = {
  setThemeType: Dispatch<SetStateAction<ThemeType>>;
  themeType: ThemeType;
};

export const SideMenuBar: React.FunctionComponent<Props> = ({
  setThemeType,
  themeType,
}) => {
  const classes = useStyle();
  const matches = useMediaQuery("(min-width:600px)");

  const iconList = [
    IconType.profile,
    IconType.skills,
    IconType.projects,
    IconType.contact,
  ];

  return (
    <Drawer
      anchor="left"
      open={true}
      variant="permanent"
      className={classes.drawer}
    >
      <List>
        {iconList.map((iconType) => (
          <Tooltip
            title={iconType.toUpperCase()}
            aria-label={iconType}
            placement="right"
            key={iconType}
          >
            <ListItem button className={classes.listButton}>
              <ListItemIcon className={classes.iconItem}>
                <Icon
                  iconType={iconType}
                  width={matches ? 38 : 24}
                  height={matches ? 38 : 24}
                  className={classes.icon}
                />
              </ListItemIcon>
            </ListItem>
          </Tooltip>
        ))}
        <Tooltip
          title="THEME SWITCHER"
          aria-label="Theme switcher"
          placement="right"
        >
          <ListItem button className={classes.listButton}>
            <Switch
              checked={themeType === ThemeType.light}
              color="primary"
              onChange={(e) =>
                e.target.checked
                  ? setThemeType(ThemeType.light)
                  : setThemeType(ThemeType.dark)
              }
              name="Theme switcher"
              inputProps={{ "aria-label": `${themeType}` }}
            />
          </ListItem>
        </Tooltip>
      </List>
    </Drawer>
  );
};
