"use client";
import { createTheme, ThemeProvider as MuiThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
  // palette: {
  //   primary: {
  //     main: blueGrey[300],
  //   },
  // },
});

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
}
