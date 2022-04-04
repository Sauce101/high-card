import { useState, useEffect } from "react"
import { Grid } from "@mui/material"
import Deck from "./Decks/PlainDeck"
import PlayerCardData from "./cardData/PlayerCardData"
import ComputerCardData from "./cardData/ComputerCardData"
import DeckCardData from "./cardData/DeckCardData"

let playerDeck, computerDeck, playerCard, computerCard

function StartGame() {
  const deck = new Deck()
  deck.shuffle()

  const deckMidpoint = Math.ceil(deck.numberOfCards / 2)
  playerDeck = new Deck(deck.cards.slice(0, deckMidpoint))
  computerDeck = new Deck(deck.cards.slice(deckMidpoint, deck.numberOfCards))

  playerCard = playerDeck.pop()
  computerCard = computerDeck.pop()
}
StartGame()

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
  let cardsize = {
    radius: "14px",
    cardWidthL: "55%",
    cardWidthP: "32%",
  }

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
          {topcard && <PlayerCardData playerCard={playerCard} {...cardsize} />}
          {!topcard && <PlayerCardData playerCard={playerCard} {...cardsize} />}
        </Grid>

        <Grid item xs={12} sm={4}>
          <DeckCardData
            flipCards={flipCards}
            nextdeck={nextdeck}
            {...cardsize}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          {topcard && (
            <ComputerCardData computerCard={computerCard} {...cardsize} />
          )}
          {!topcard && (
            <ComputerCardData computerCard={computerCard} {...cardsize} />
          )}
        </Grid>
      </Grid>
    </>
  )
}
