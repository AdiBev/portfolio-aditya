import { Box, Link, makeStyles, Paper, Typography } from "@material-ui/core";
import { IconType } from "../types";
import { BodyTitle } from "./BodyTitle";
import Icon from "./icons";

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    display: "grid",
    gridGap: "2rem",
    gridTemplateColumns: "repeat(3, max-content)",
  },
  iconLink: {
    display: "grid",
    gridTemplateColumns: "repeat(2, max-content)",
    gridGap: "0 1rem",
    alignItems: "center",
  },
  icon: {
    fill: theme.palette.primary.dark,
  },
}));

export const Contact: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Box id="contact">
      <BodyTitle title="Contact me" />
      <Box className={classes.iconContainer}>
        <Link
          href="https://github.com/AdiBev"
          target="_blank"
          rel="noopener"
          className={classes.iconLink}
        >
          <Icon
            iconType={IconType.github}
            width={38}
            height={38}
            className={classes.icon}
          />
        </Link>
        <Link
          href="mailto:adityabev@gmail.com"
          className={classes.iconLink}
          color="textSecondary"
        >
          <Icon
            iconType={IconType.email}
            width={38}
            height={38}
            className={classes.icon}
          />
        </Link>
      </Box>
    </Box>
  );
};
