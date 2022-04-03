import { useState } from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material"
import SetTwo from "./SetTwo"
import SetThree from "./SetThree"

const theme = createTheme({
  palette: {
    primary: {
      light: "#629749",
      main: "#33691e",
      dark: "#003d00",
      contrastText: "#fff",
    },
    secondary: {
      light: "#6a4f4b",
      main: "#3e2723",
      dark: "#1b0000",
      contrastText: "#fff",
    },
  },
})

export default function HighCardTwo() {
  const [nextdeck, setNextdeck] = useState(true)
  const deckStyle = () => setNextdeck(!nextdeck)

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "primary.main",
        }}
      >
        <AppBar
          position="relative"
          sx={{
            backgroundColor: "secondary.main",
            mb: "auto",
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              color="inherit"
              noWrap
              sx={{
                ml: 2,
                mr: "auto",
                fontFamily: "'Roboto Serif', serif",
              }}
              onClick={deckStyle}
            >
              High Card
            </Typography>
          </Toolbar>
        </AppBar>
        {nextdeck ? <SetTwo /> : <SetThree />}
      </Box>
    </ThemeProvider>
  )
}
