/* eslint-disable prettier/prettier */
import { createTheme } from "@mui/material";
declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }
 
}

export const theme = createTheme({
  palette: {
    primary: {
      main: '#8BAE56',
      contrastText: '#fff'
    },
    secondary: {
      main: '#733590'
    },
    neutral: {
      main: '#733590'
    },
    text: {
      primary: '#733590'
    }
  },
})