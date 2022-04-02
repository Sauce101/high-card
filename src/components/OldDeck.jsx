// SPADES
import S2 from "../assets/images/deckOld/2S.svg"
import S3 from "../assets/images/deckOld/3S.svg"
import S4 from "../assets/images/deckOld/4S.svg"
import S5 from "../assets/images/deckOld/5S.svg"
import S6 from "../assets/images/deckOld/6S.svg"
import S7 from "../assets/images/deckOld/7S.svg"
import S8 from "../assets/images/deckOld/8S.svg"
import S9 from "../assets/images/deckOld/9S.svg"
import ST from "../assets/images/deckOld/TS.svg"
import SJ from "../assets/images/deckOld/JS.svg"
import SQ from "../assets/images/deckOld/QS.svg"
import SK from "../assets/images/deckOld/KS.svg"
import SA from "../assets/images/deckOld/AS.svg"
// DIAMONDS
import D2 from "../assets/images/deckOld/2D.svg"
import D3 from "../assets/images/deckOld/3D.svg"
import D4 from "../assets/images/deckOld/4D.svg"
import D5 from "../assets/images/deckOld/5D.svg"
import D6 from "../assets/images/deckOld/6D.svg"
import D7 from "../assets/images/deckOld/7D.svg"
import D8 from "../assets/images/deckOld/8D.svg"
import D9 from "../assets/images/deckOld/9D.svg"
import DT from "../assets/images/deckOld/TD.svg"
import DJ from "../assets/images/deckOld/JD.svg"
import DQ from "../assets/images/deckOld/QD.svg"
import DK from "../assets/images/deckOld/KD.svg"
import DA from "../assets/images/deckOld/AD.svg"
// HEARTS
import H2 from "../assets/images/deckOld/2H.svg"
import H3 from "../assets/images/deckOld/3H.svg"
import H4 from "../assets/images/deckOld/4H.svg"
import H5 from "../assets/images/deckOld/5H.svg"
import H6 from "../assets/images/deckOld/6H.svg"
import H7 from "../assets/images/deckOld/7H.svg"
import H8 from "../assets/images/deckOld/8H.svg"
import H9 from "../assets/images/deckOld/9H.svg"
import HJ from "../assets/images/deckOld/JH.svg"
import HT from "../assets/images/deckOld/TH.svg"
import HQ from "../assets/images/deckOld/QH.svg"
import HK from "../assets/images/deckOld/KH.svg"
import HA from "../assets/images/deckOld/AH.svg"
// CLUBS
import C2 from "../assets/images/deckOld/2C.svg"
import C3 from "../assets/images/deckOld/3C.svg"
import C4 from "../assets/images/deckOld/4C.svg"
import C5 from "../assets/images/deckOld/5C.svg"
import C6 from "../assets/images/deckOld/6C.svg"
import C7 from "../assets/images/deckOld/7C.svg"
import C8 from "../assets/images/deckOld/8C.svg"
import C9 from "../assets/images/deckOld/9C.svg"
import CJ from "../assets/images/deckOld/JC.svg"
import CT from "../assets/images/deckOld/TC.svg"
import CQ from "../assets/images/deckOld/QC.svg"
import CK from "../assets/images/deckOld/KC.svg"
import CA from "../assets/images/deckOld/AC.svg"

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
