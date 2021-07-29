import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "flex-end",
    borderTop: `1px solid ${theme.palette.primary.main}`,
  },
  footerText: {
    marginTop: "1rem",
  },
}));

export const Footer: React.FunctionComponent = () => {
  const classes = useStyles();
  return (
    <Box pb={4} mt={4} className={classes.footer}>
      <Typography
        variant="h6"
        color="textPrimary"
        className={classes.footerText}
      >
        Made by Aditya
      </Typography>
      <Typography variant="body1" component="span" color="textPrimary">
        &copy; 2021
      </Typography>
    </Box>
  );
};
