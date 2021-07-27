import { createTheme, responsiveFontSizes } from "@material-ui/core";
import { ThemeType } from "./types";

/**
 *
 * @param themeType string (light | dark)
 * @returns light or dark theme
 */
export const themePicker = (themeType: ThemeType) => {
  const mainSecondaryColor =
    themeType === ThemeType.light ? "#7F00FF" : "#FCF951FF";

  const theme = createTheme({
    palette: {
      primary: { main: mainSecondaryColor },
      type: themeType,
    },
    typography: {
      htmlFontSize: 10,
      fontFamily: "Poppins, sans-serif",
    },
  });
  return responsiveFontSizes(theme);
};
