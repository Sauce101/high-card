import { useState, useEffect } from "react"
import { Grid, Card, CardActionArea, CardMedia } from "@mui/material"
import { keyframes } from "@emotion/react"
import Deck from "./Decks/OldDeck"
import RedDBack from "../assets/images/cards/old/2B.svg"
import DarkDBack from "../assets/images/cards/old/1B.svg"

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

export default function SetThree() {
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
    to: { transform: "rotate(359deg)" },
  })
  const rotationPortrait = keyframes({
    from: { transform: "rotate(-90deg)" },
    to: { transform: "rotate(-449deg)" },
  })

  return (
    <>
      <Grid
        sx={{
          "@media (orientation: portrait)": {
            display: "grid",
            gridTemplateRows: "repeat(3, 1fr)",
            gap: 3,
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
                  maxWidth: cardWidthP,
                  borderRadius: radius,
                  mx: "auto",
                  transformOrigin: "center",
                  transform: "rotate(-90deg)",
                  animation: `${rotationPortrait} .6s 1 ease-out`,
                },
                "@media (orientation: landscape)": {
                  maxWidth: cardWidthL,
                  borderRadius: radius,
                  mx: "auto",
                  animation: `${rotationLandscape} .5s 1 ease-out`,
                },
              }}
            >
              <CardMedia component="img" src={playerCard} alt="card" />
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
                  animation: `${rotationPortrait} .6s ease-out`,
                },
                "@media (orientation: landscape)": {
                  maxWidth: cardWidthL,
                  borderRadius: radius,
                  mx: "auto",
                  animation: `${rotationLandscape} .5s 1 ease-out`,
                },
              }}
            >
              <CardMedia component="img" src={playerCard} alt="card" />
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
                  maxWidth: cardWidthP,
                  borderRadius: radius,
                  mx: "auto",
                  transformOrigin: "center",
                  transform: "rotate(-90deg)",
                  animation: `${rotationPortrait} .7s 1 ease-out `,
                },
                "@media (orientation: landscape)": {
                  maxWidth: cardWidthL,
                  borderRadius: radius,
                  mx: "auto",
                  animation: `${rotationLandscape} .7s 1 ease-out`,
                },
              }}
            >
              <CardMedia component="img" src={computerCard} alt="card" />
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
                  animation: `${rotationPortrait} .7s 1 ease-out `,
                },
                "@media (orientation: landscape)": {
                  maxWidth: cardWidthL,
                  borderRadius: radius,
                  mx: "auto",
                  animation: `${rotationLandscape} .7s 1 ease-out`,
                },
              }}
            >
              <CardMedia component="img" src={computerCard} alt="card" />
            </Card>
          )}
        </Grid>
      </Grid>
    </>
  )
}
