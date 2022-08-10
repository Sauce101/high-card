import { useState, useEffect } from "react"
import { Grid } from "@mui/material"
import Deck from "./deck/OldDeck"
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

export default function SetThree() {
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
    cardWidthL: "70%",
    cardWidthPsm: "32%",
    cardWidthP: "40%",
    cardWidthPmd: "26%",
  }

  return (
    <>
      <Grid
        container
        sx={{
          "@media (orientation: portrait)": {
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 3,
          },
          "@media (orientation: landscape)": {
            display: "grid",
            gridTemplate: "1fr / repeat(3, 1fr)",
            gap: 5,
            px: 5,
          },
        }}
      >
        <Grid
          item
          sx={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
          {topcard && (
            <PlayerCardData
              playerCard={playerCard}
              nextdeck={nextdeck}
              {...cardsize}
            />
          )}
          {!topcard && (
            <PlayerCardData
              playerCard={playerCard}
              nextdeck={nextdeck}
              {...cardsize}
            />
          )}
        </Grid>

        <Grid item>
          <DeckCardData
            flipCards={flipCards}
            nextdeck={nextdeck}
            {...cardsize}
          />
        </Grid>

        <Grid
          item
          sx={{ perspective: "1000px", transformStyle: "preserve-3d" }}
        >
          {topcard && (
            <ComputerCardData
              computerCard={computerCard}
              nextdeck={nextdeck}
              {...cardsize}
            />
          )}
          {!topcard && (
            <ComputerCardData
              computerCard={computerCard}
              nextdeck={nextdeck}
              {...cardsize}
            />
          )}
        </Grid>
      </Grid>
    </>
  )
}
