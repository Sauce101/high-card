import { Grid, Card, CardActionArea, CardMedia } from "@mui/material"
import Deck from "./Deck"
import BlueBack from "../assets/images/deckBack/1B.svg"

let playerDeck, computerDeck, playerCard, computerCard

export default function SetOne(props) {
  // Card
  const radius = "14px"
  const cardWidthP = "32%"
  const cardWidthL = "60%"

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

  return (
    <>
      <Grid
        // container
        sx={{
          "@media (orientation: portrait)": {
            display: "grid",
            gridTemplateRows: "1fr",
            gap: 4,
            mb: "auto",
          },
          "@media (orientation: landscape)": {
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            mb: "auto",
          },
        }}
      >
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              "@media (orientation: portrait)": {
                transform: "rotateZ(90deg)",
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
            <CardMedia component="img" src={playerCard} alt="player card" />
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              "@media (orientation: portrait)": {
                transform: "rotateZ(90deg)",
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
            <CardActionArea onClick={props.drawCards}>
              <CardMedia
                component="img"
                src={BlueBack}
                alt="card deck black diamond back"
              />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card
            sx={{
              "@media (orientation: portrait)": {
                transform: "rotateZ(90deg)",
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
            <CardMedia component="img" src={computerCard} alt="computer card" />
          </Card>
        </Grid>
      </Grid>
    </>
  )
}
