import React from "react"
import { Card, CardMedia } from "@mui/material"
import { keyframes } from "@emotion/react"
import RedDBack from "../../assets/images/cards/plain/2B.svg"
import DarkDBack from "../../assets/images/cards/plain/1B.svg"

const PlayerCardData = ({ playerCard, nextdeck, ...cardsize }) => {
  const rotationPortrait = keyframes({
    from: { transform: "translate(-50%, -50%) rotateY(0deg)" },
    to: { transform: "translate(-50%, -50%) rotateY(360deg)" },
  })
  const backsidePortrait = keyframes({
    from: { transform: "translate(-50%, -50%) rotateY(180deg)" },
    to: { transform: "translate(-50%, -50%) rotateY(540deg)" },
  })
  const rotationLandscape = keyframes({
    from: { transform: "rotateY(0deg)" },
    to: { transform: "rotateY(360deg)" },
  })
  const backsideLandscape = keyframes({
    from: { transform: "rotateY(180deg)" },
    to: { transform: "rotateY(540deg)" },
  })

  return (
    <>
      <Card
        sx={{
          "@media (orientation: portrait)": {
            maxWidth: cardsize.cardWidthP,
            borderRadius: cardsize.radius,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) ",
            animation: `${backsidePortrait} .3s 1 linear`,
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          },
          "@media (orientation: landscape)": {
            maxWidth: cardsize.cardWidthL,
            borderRadius: cardsize.radius,
            marginLeft: "30%",
            animation: `${backsideLandscape} .3s 1 linear`,
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            position: "absolute",
            width: "100%",
          },
        }}
      >
        <CardMedia
          component="img"
          src={nextdeck ? RedDBack : DarkDBack}
          alt="card"
        />
      </Card>
      <Card
        sx={{
          "@media (orientation: portrait)": {
            maxWidth: cardsize.cardWidthP,
            borderRadius: cardsize.radius,
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) ",
            animation: `${rotationPortrait} .3s 1 linear`,
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
          },
          "@media (orientation: landscape)": {
            maxWidth: cardsize.cardWidthL,
            borderRadius: cardsize.radius,
            marginLeft: "30%",
            animation: `${rotationLandscape} .3s 1 linear`,
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            position: "absolute",
            width: "100%",
          },
        }}
      >
        <CardMedia component="img" src={playerCard} alt="card" />
      </Card>
    </>
  )
}

export default PlayerCardData
