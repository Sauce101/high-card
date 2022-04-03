import { useState, useEffect } from "react"
import { Grid, Card, CardActionArea, CardMedia } from "@mui/material"
import Deck from "./Decks/PlainDeck"
import RedDBack from "../assets/images/cards/plain/2B.svg"
import DarkDBack from "../assets/images/cards/plain/1B.svg"
import PlayerCardData from "./cardData/PlayerCardData"
import ComputerCardData from "./cardData/ComputerCardData"

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
  const [topcard, setTopcard] = useState(() => {
    return true
  })
  const [nextdeck, setNextdeck] = useState(() => {
    return true
  })

  useEffect(() => {
    playerCard = playerDeck.pop()
    computerCard = computerDeck.pop()
    if (playerDeck.numberOfCards === 0) {
      StartGame()
      setNextdeck(!nextdeck)
    }
  }, [topcard, nextdeck])

  const flipCards = () => setTopcard(!topcard)

  // Card size
  const radius = "14px"
  const cardWidthP = "32%"
  const cardWidthL = "55%"

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
          {topcard && <PlayerCardData playerCard={playerCard} />}
          {!topcard && <PlayerCardData playerCard={playerCard} />}
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
          {topcard && <ComputerCardData computerCard={computerCard} />}
          {!topcard && <ComputerCardData computerCard={computerCard} />}
        </Grid>
      </Grid>
    </>
  )
}
