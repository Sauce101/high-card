import React, { useState } from "react"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import { AppBar, Box, CssBaseline, Toolbar, Typography } from "@mui/material"
import SetOne from "./SetOne"
import SetTwo from "./SetTwo"

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

export default function HighCard() {
  const [active, setActive] = useState(true)

  const drawCards = () => {
    setActive(flip => {
      return !flip
    })
  }

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
            <Typography variant="h6" color="inherit" noWrap sx={{ mr: 2 }}>
              High Card
            </Typography>
          </Toolbar>
        </AppBar>
        {active ? (
          <SetOne drawCards={drawCards} />
        ) : (
          <SetTwo drawCards={drawCards} />
        )}
      </Box>
    </ThemeProvider>
  )
}
