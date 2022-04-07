import React from "react"
import { Card, CardActionArea, CardMedia } from "@mui/material"
import RedDBack from "../../assets/images/cards/plain/2B.svg"
import DarkDBack from "../../assets/images/cards/plain/1B.svg"

const DeckCardData = ({ flipCards, nextdeck, ...cardsize }) => {
  return (
    <Card
      sx={{
        "@media (orientation: portrait)": {
          // transform: "rotate(-90deg)",
          // transformOrigin: "center",
          maxWidth: cardsize.cardWidthP,
          borderRadius: cardsize.radius,
          mx: "auto",
        },
        "@media (orientation: landscape)": {
          maxWidth: cardsize.cardWidthL,
          borderRadius: cardsize.radius,
          mx: "auto",
        },
      }}
    >
      <CardActionArea
        onClick={flipCards}
        sx={{
          color: "red",
          ...(nextdeck === false && { color: "black" }),
        }}
      >
        <CardMedia
          component="img"
          src={nextdeck ? RedDBack : DarkDBack}
          alt="red diamond back"
        />
      </CardActionArea>
    </Card>
  )
}

export default DeckCardData
