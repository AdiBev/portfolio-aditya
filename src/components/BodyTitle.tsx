import { Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  bodyTitle: {
    fontWeight: 600,
    marginBottom: "4rem",
    marginTop: "4rem",
  },
}));

export const BodyTitle: React.FunctionComponent<{
  title: string;
}> = ({ title }) => {
  const classes = useStyles();
  return (
    <Typography variant="h2" color="primary" className={classes.bodyTitle}>
      {title}
    </Typography>
  );
};
