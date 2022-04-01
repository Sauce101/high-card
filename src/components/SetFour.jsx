import { useState, useEffect } from "react"
import { Grid, Card, CardActionArea, CardMedia } from "@mui/material"
import { keyframes } from "@emotion/react"
import Deck from "./DeckThree"
import RedDBack from "../assets/images/deckThree/2B.svg"

let playerDeck, computerDeck, playerCard, computerCard

StartGame()
function StartGame() {
  const deck = new Deck()
  deck.shuffle()

  const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
  playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
  computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))

  playerCard = playerDeck.pop()
  computerCard = computerDeck.pop()
}

export default function SetFour() {
  const [topcard, setTopcard] = useState(true)
  const flipCards = () => setTopcard(!topcard)

  useEffect(() => {
    // StartGame()
    playerCard = playerDeck.pop()
    computerCard = computerDeck.pop()
    if (computerDeck.numberOfCards === 0) {
      StartGame()
    }
  }, [topcard])

  // Card size and animate
  const radius = "14px"
  const cardWidthP = "32%"
  const cardWidthL = "55%"
  const rotationLandscape = keyframes({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  })
  const rotationPortrait = keyframes({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(270deg)" },
  })

  return (
    <>
      <Grid
        sx={{
          "@media (orientation: portrait)": {
            display: "grid",
            gridTemplateRows: "1fr",
            gap: 4,
            mb: "auto",
            // overflow: "hidden",
          },
          "@media (orientation: landscape)": {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            mb: "auto",
          },
        }}
      >
        <Grid item xs={12} sm={4}>
          {topcard && (
            <Card
              sx={{
                "@media (orientation: portrait)": {
                  transform: "rotate(-90deg)",
                  maxWidth: cardWidthP,
                  borderRadius: radius,
                  mx: "auto",
                  animation: `${rotationPortrait} 0.5s 1 ease-out`,
                },
                "@media (orientation: landscape)": {
                  maxWidth: cardWidthL,
                  borderRadius: radius,
                  mx: "auto",
                  animation: `${rotationLandscape} 0.5s 1 ease-out`,
                },
              }}
            >
              <CardMedia component="img" src={playerCard} alt="" />
            </Card>
          )}
          {!topcard && (
            <Card
              sx={{
                "@media (orientation: portrait)": {
                  transform: "rotate(-90deg)",
                  maxWidth: cardWidthP,
                  borderRadius: radius,
                  mx: "auto",
                  animation: `${rotationPortrait} 0.5s 1 ease-out`,
                },
                "@media (orientation: landscape)": {
                  maxWidth: cardWidthL,
                  borderRadius: radius,
                  mx: "auto",
                  animation: `${rotationLandscape} 0.5s 1 ease-out`,
                },
              }}
            >
              <CardMedia component="img" src={playerCard} alt="" />
            </Card>
          )}
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              "@media (orientation: portrait)": {
                transform: "rotateZ(-90deg)",
                maxWidth: cardWidthP,
                borderRadius: radius,
                mx: "auto",
              },
              "@media (orientation: landscape)": {
                maxWidth: cardWidthL,
                borderRadius: radius,
                mx: "auto",
              },
            }}
          >
            <CardActionArea onClick={flipCards} sx={{ color: "red" }}>
              <CardMedia
                component="img"
                src={RedDBack}
                alt="red diamond back"
              />
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          {topcard && (
            <Card
              sx={{
                "@media (orientation: portrait)": {
                  transform: "rotate(-90deg)",
                  maxWidth: cardWidthP,
                  borderRadius: radius,
                  mx: "auto",
                  animation: `${rotationPortrait} 0.5s 1 ease-out`,
                },
                "@media (orientation: landscape)": {
                  maxWidth: cardWidthL,
                  borderRadius: radius,
                  mx: "auto",
                  animation: `${rotationLandscape} 0.5s 1 ease-out`,
                },
              }}
            >
              <CardMedia component="img" src={computerCard} alt="" />
            </Card>
          )}
          {!topcard && (
            <Card
              sx={{
                "@media (orientation: portrait)": {
                  transform: "rotate(-90deg)",
                  maxWidth: cardWidthP,
                  borderRadius: radius,
                  mx: "auto",
                  animation: `${rotationPortrait} 0.5s 1 ease-out`,
                },
                "@media (orientation: landscape)": {
                  maxWidth: cardWidthL,
                  borderRadius: radius,
                  mx: "auto",
                  animation: `${rotationLandscape} 0.5s 1 ease-out`,
                },
              }}
            >
              <CardMedia component="img" src={computerCard} alt="" />
            </Card>
          )}
        </Grid>
      </Grid>
    </>
  )
}
