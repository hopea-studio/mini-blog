import { createMuiTheme } from "@material-ui/core"

const colorHue = {
  background: "#004643",
  headline: "#fffffe",
  paragraph: "#abd1c6",
  Button: "#f9bc60",
  ButtonText: "#001e1d",
  main: "#e8e4e6",
  stroke: "#001e1d",
  Tertiary: "#e16162",
}

export const theme = createMuiTheme({
  typography: {
    h6: {
      fontFamily: "'Libre Baskerville', serif",
    },
    body1: {
      fontFamily: "'Playfair Display', serif",
    },
  },
  palette: {
    primary: {
      main: colorHue.background,

      contrastText: colorHue.main,
    },
    secondary: {
      main: colorHue.paragraph,

      contrastText: colorHue.ButtonText,
    },
    background: {
      default: colorHue.paragraph,
    },
    warning: {
      main: colorHue.Tertiary,
    },
  },
})
