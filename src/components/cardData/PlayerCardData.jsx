import React from "react"
import { Card, CardMedia } from "@mui/material"
import { keyframes } from "@emotion/react"

const PlayerCardData = ({ playerCard, ...cardsize }) => {
  const rotationPortrait = keyframes({
    from: { transform: "rotate(-90deg)" },
    to: { transform: "rotate(270deg)" },
  })
  const rotationLandscape = keyframes({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  })

  return (
    <Card
      sx={{
        "@media (orientation: portrait)": {
          maxWidth: cardsize.cardWidthP,
          borderRadius: cardsize.radius,
          mx: "auto",
          transformOrigin: "center",
          transform: "rotate(-90deg)",
          animation: `${rotationPortrait} .5s 1 ease-out`,
        },
        "@media (orientation: landscape)": {
          maxWidth: cardsize.cardWidthL,
          borderRadius: cardsize.radius,
          ml: "auto",
          mr: 4,
          animation: `${rotationLandscape} .5s 1 ease-out`,
        },
      }}
    >
      <CardMedia component="img" src={playerCard} alt="card" />
    </Card>
  )
}

export default PlayerCardData
