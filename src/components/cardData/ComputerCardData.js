import { Card, CardMedia } from "@mui/material"
import { keyframes } from "@emotion/react"

const ComputerCardData = ({ computerCard, ...cardsize }) => {
  const rotationPortrait = keyframes({
    from: { transform: "rotate(-90deg)" },
    to: { transform: "rotate(270deg)" },
  })
  const rotationLandscape = keyframes({
    from: { transform: "rotateY(0deg)" },
    to: { transform: "rotateY(360deg)" },
  })

  return (
    <Card
      sx={{
        "@media (orientation: portrait)": {
          maxWidth: cardsize.cardWidthP,
          borderRadius: cardsize.radius,
          mx: "auto",
          transform: "rotate(-90deg)",
          animation: `${rotationPortrait} .6s 1 ease-out`,
        },
        "@media (orientation: landscape)": {
          maxWidth: cardsize.cardWidthL,
          borderRadius: cardsize.radius,
          mr: "auto",
          ml: 4,
          animation: `${rotationLandscape} .6s 1 ease-out`,
          transformStyle: "preserve-3d",
        },
      }}
    >
      <CardMedia component="img" src={computerCard} alt="card" />
    </Card>
  )
}

export default ComputerCardData
