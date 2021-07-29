import { Link, Paper, Typography, makeStyles, Box } from "@material-ui/core";

type ProjectListItemProps = {
  link: string;
  title: string;
  tags: string[];
  description: string;
};

const useClass = makeStyles((theme) => ({
  projectsList: {
    padding: "2rem",
    display: "grid",
    gridGap: "1rem 0",
  },
}));

export const ProjectListItem: React.FunctionComponent<ProjectListItemProps> = ({
  title,
  link,
  tags,
  description,
}) => {
  const classes = useClass();

  return (
    <Box mb={3}>
      <Paper className={classes.projectsList}>
        <Link href={link} target="_blank" rel="noopener">
          <Typography variant="h5">{title}</Typography>
        </Link>
        <Typography variant="body1">{description}</Typography>
        <Typography variant="body2" component="span" color="textSecondary">
          {tags.join(", ")}
        </Typography>
      </Paper>
    </Box>
  );
};
