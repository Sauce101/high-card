import { Card, CardMedia } from "@mui/material"
import { keyframes } from "@emotion/react"

export default function ComputerCardData({ computerCard }) {
  // Card size and animate
  const radius = "14px"
  const cardWidthP = "32%"
  const cardWidthL = "55%"
  const rotationLandscape = keyframes({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(359deg)" },
  })
  const rotationPortrait = keyframes({
    from: { transform: "rotate(-90deg)" },
    to: { transform: "rotate(-449deg)" },
  })

  return (
    <Card
      sx={{
        "@media (orientation: portrait)": {
          maxWidth: cardWidthP,
          borderRadius: radius,
          mx: "auto",
          transformOrigin: "center",
          transform: "rotate(-90deg)",
          animation: `${rotationPortrait} .6s ease-out`,
        },
        "@media (orientation: landscape)": {
          maxWidth: cardWidthL,
          borderRadius: radius,
          mr: "auto",
          ml: 4,
          animation: `${rotationLandscape} .5s 1 ease-out`,
        },
      }}
    >
      <CardMedia component="img" src={computerCard} alt="card" />
    </Card>
  )
}
