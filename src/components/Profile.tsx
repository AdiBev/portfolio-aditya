import { Box, makeStyles, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "auto",
    [theme.breakpoints.up("sm")]: {
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
  },
  title: {
    fontWeight: 600,
    marginBottom: "3rem",
    [theme.breakpoints.up("sm")]: {
      marginBottom: "5rem",
    },
  },

  highlight: {
    color: theme.palette.primary.dark,
  },
}));

export const Profile: React.FunctionComponent = () => {
  const classes = useStyle();
  return (
    <Box className={classes.container} id="profile">
      <Typography
        variant="h1"
        component="h1"
        color="primary"
        className={classes.title}
      >
        Hello, my name is Aditya.
      </Typography>
      <Typography variant="h6" component="h2">
        I'm a <span className={classes.highlight}>Front End Developer</span>{" "}
        living in Liverpool, UK. I have over two years of experience building
        web apps, websites for various clients. I mainly use{" "}
        <span className={classes.highlight}>React.js, TypeScript</span> to build
        websites and web apps. Checkout my skills and projects below.
      </Typography>
    </Box>
  );
};
