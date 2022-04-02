// SPADES
import S2 from "../assets/images/deckOldCards/2S.svg"
import S3 from "../assets/images/deckOldCards/3S.svg"
import S4 from "../assets/images/deckOldCards/4S.svg"
import S5 from "../assets/images/deckOldCards/5S.svg"
import S6 from "../assets/images/deckOldCards/6S.svg"
import S7 from "../assets/images/deckOldCards/7S.svg"
import S8 from "../assets/images/deckOldCards/8S.svg"
import S9 from "../assets/images/deckOldCards/9S.svg"
import ST from "../assets/images/deckOldCards/TS.svg"
import SJ from "../assets/images/deckOldCards/JS.svg"
import SQ from "../assets/images/deckOldCards/QS.svg"
import SK from "../assets/images/deckOldCards/KS.svg"
import SA from "../assets/images/deckOldCards/AS.svg"
// DIAMONDS
import D2 from "../assets/images/deckOldCards/2D.svg"
import D3 from "../assets/images/deckOldCards/3D.svg"
import D4 from "../assets/images/deckOldCards/4D.svg"
import D5 from "../assets/images/deckOldCards/5D.svg"
import D6 from "../assets/images/deckOldCards/6D.svg"
import D7 from "../assets/images/deckOldCards/7D.svg"
import D8 from "../assets/images/deckOldCards/8D.svg"
import D9 from "../assets/images/deckOldCards/9D.svg"
import DT from "../assets/images/deckOldCards/TD.svg"
import DJ from "../assets/images/deckOldCards/JD.svg"
import DQ from "../assets/images/deckOldCards/QD.svg"
import DK from "../assets/images/deckOldCards/KD.svg"
import DA from "../assets/images/deckOldCards/AD.svg"
// HEARTS
import H2 from "../assets/images/deckOldCards/2H.svg"
import H3 from "../assets/images/deckOldCards/3H.svg"
import H4 from "../assets/images/deckOldCards/4H.svg"
import H5 from "../assets/images/deckOldCards/5H.svg"
import H6 from "../assets/images/deckOldCards/6H.svg"
import H7 from "../assets/images/deckOldCards/7H.svg"
import H8 from "../assets/images/deckOldCards/8H.svg"
import H9 from "../assets/images/deckOldCards/9H.svg"
import HJ from "../assets/images/deckOldCards/JH.svg"
import HT from "../assets/images/deckOldCards/TH.svg"
import HQ from "../assets/images/deckOldCards/QH.svg"
import HK from "../assets/images/deckOldCards/KH.svg"
import HA from "../assets/images/deckOldCards/AH.svg"
// CLUBS
import C2 from "../assets/images/deckOldCards/2C.svg"
import C3 from "../assets/images/deckOldCards/3C.svg"
import C4 from "../assets/images/deckOldCards/4C.svg"
import C5 from "../assets/images/deckOldCards/5C.svg"
import C6 from "../assets/images/deckOldCards/6C.svg"
import C7 from "../assets/images/deckOldCards/7C.svg"
import C8 from "../assets/images/deckOldCards/8C.svg"
import C9 from "../assets/images/deckOldCards/9C.svg"
import CJ from "../assets/images/deckOldCards/JC.svg"
import CT from "../assets/images/deckOldCards/TC.svg"
import CQ from "../assets/images/deckOldCards/QC.svg"
import CK from "../assets/images/deckOldCards/KC.svg"
import CA from "../assets/images/deckOldCards/AC.svg"

const SPADES = [S2, S3, S4, S5, S6, S7, S8, S9, ST, SJ, SQ, SK, SA]
const DIAMONDS = [D2, D3, D4, D5, D6, D7, D8, D9, DT, DJ, DQ, DK, DA]
const HEARTS = [H2, H3, H4, H5, H6, H7, H8, H9, HT, HJ, HQ, HK, HA]
const CLUBS = [C2, C3, C4, C5, C6, C7, C8, C9, CT, CJ, CQ, CK, CA]

const freshDeck = SPADES.concat(DIAMONDS, HEARTS, CLUBS)

export default class Deck {
  constructor(cards = freshDeck) {
    this.cards = cards
  }

  get numberOfCards() {
    return this.cards.length
  }

  pop() {
    return this.cards.shift()
  }

  push(card) {
    this.cards.push(card)
  }

  shuffle() {
    for (let i = this.numberOfCards - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1))
      const oldValue = this.cards[newIndex]
      this.cards[newIndex] = this.cards[i]
      this.cards[i] = oldValue
    }
  }
}
