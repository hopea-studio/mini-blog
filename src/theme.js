import { createMuiTheme } from "@material-ui/core"

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
      light: "#336b68",
      main: "#004643",
      dark: "#00312e",
      contrastText: "#e8e4e6",
    },
    secondary: {
      light: "#bbdad1",
      main: "#abd1c6",
      dark: "#77928a",
      contrastText: "#001e1d",
    },
    background: {
      default: "#004643",
    },
    warning: {
      main: "#f9bc60",
    },
  },
})
