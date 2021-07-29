import { Typography, Paper, makeStyles } from "@material-ui/core";

type SkillItemProps = {
  title: string;
  subSkills: string[];
};

const useStyle = makeStyles((theme) => ({
  paper: {
    padding: "2rem",
    marginBottom: "1rem",
  },
}));

export const SkillItem: React.FunctionComponent<SkillItemProps> = ({
  title,
  subSkills,
}) => {
  const classes = useStyle();
  return (
    <Paper className={classes.paper}>
      <Typography variant={"h6"}>{title}</Typography>
      {subSkills.length > 0 && (
        <Typography variant="body1" color="textSecondary">
          {subSkills.join(", ")}
        </Typography>
      )}
    </Paper>
  );
};
