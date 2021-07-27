import { useState } from "react";
import { MuiThemeProvider, makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { SideMenuBar } from "./components/SideMenuBar";
import { Container } from "@material-ui/core";
import { Profile } from "./components/Profile";
import { ThemeType } from "./types";
import { themePicker } from "./themePicker";
import { SkillsList } from "./components/SkillsList";

const useStyle = makeStyles((theme) => ({
  main: {
    paddingLeft: "6rem",
    paddingTop: "5rem",
    [theme.breakpoints.up("sm")]: {
      paddingLeft: "10rem",
      paddingTop: 0,
    },
  },
}));

function App() {
  // set dark theme by default
  const [themetype, setThemeType] = useState<ThemeType>(ThemeType.dark);
  const clasess = useStyle();

  return (
    <MuiThemeProvider theme={themePicker(themetype)}>
      <CssBaseline />
      <SideMenuBar setThemeType={setThemeType} themeType={themetype} />
      <main className={clasess.main}>
        <Container>
          <Profile />
          <SkillsList />
        </Container>
      </main>
    </MuiThemeProvider>
  );
}

export default App;
