import { useState, useEffect } from "react"
import { Grid, Card, CardActionArea, CardMedia } from "@mui/material"
import { keyframes } from "@emotion/react"
import Deck from "./JumboDeck"
import RedDBack from "../assets/images/deckJumbo/2B.svg"
import DarkDBack from "../assets/images/deckJumbo/1B.svg"

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

export default function SetTwo() {
  const [topcard, setTopcard] = useState(true)
  const [nextdeck, setNextdeck] = useState(true)
  const flipCards = () => setTopcard(!topcard)

  useEffect(() => {
    playerCard = playerDeck.pop()
    computerCard = computerDeck.pop()
    if (playerDeck.numberOfCards === 0) {
      StartGame()
      setNextdeck(!nextdeck)
    }
  }, [topcard, nextdeck])

  // Card size and animate
  const radius = "14px"
  const cardWidthP = "32%"
  const cardWidthL = "55%"
  const rotationLandscape = keyframes({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  })
  const rotationPortrait = keyframes({
    from: { transform: "rotate(-90deg)" },
    to: { transform: "rotate(-450deg)" },
  })

  return (
    <>
      <Grid
        sx={{
          "@media (orientation: portrait)": {
            display: "grid",
            gridTemplateRows: "1fr",
            gap: 5,
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
                  animation: `${rotationPortrait} 0.5s  ease-in-out`,
                  maxWidth: cardWidthP,
                  borderRadius: radius,
                  mx: "auto",
                  transform: "rotate(-90deg)",
                  transformOrigin: "center",
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
                  maxWidth: cardWidthP,
                  borderRadius: radius,
                  mx: "auto",
                  transformOrigin: "center",
                  transform: "rotate(-90deg)",
                  animation: `${rotationPortrait} 0.5s 1 ease-in-out`,
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
                transform: "rotate(-90deg)",
                transformOrigin: "center",
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
        </Grid>

        <Grid item xs={12} sm={4}>
          {topcard && (
            <Card
              sx={{
                "@media (orientation: portrait)": {
                  transform: "rotate(-90deg)",
                  transformOrigin: "center",
                  maxWidth: cardWidthP,
                  borderRadius: radius,
                  mx: "auto",
                  animation: `${rotationPortrait} .4s 1 ease-in-out`,
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
                  transformOrigin: "center",
                  maxWidth: cardWidthP,
                  borderRadius: radius,
                  mx: "auto",
                  animation: `${rotationPortrait} .4s 1 ease-in-out`,
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
