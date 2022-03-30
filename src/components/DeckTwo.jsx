// SPADES
import S2 from "../assets/images/deckTwo/2S.svg"
import S3 from "../assets/images/deckTwo/3S.svg"
import S4 from "../assets/images/deckTwo/4S.svg"
import S5 from "../assets/images/deckTwo/5S.svg"
import S6 from "../assets/images/deckTwo/6S.svg"
import S7 from "../assets/images/deckTwo/7S.svg"
import S8 from "../assets/images/deckTwo/8S.svg"
import S9 from "../assets/images/deckTwo/9S.svg"
import ST from "../assets/images/deckTwo/TS.svg"
import SJ from "../assets/images/deckTwo/JS.svg"
import SQ from "../assets/images/deckTwo/QS.svg"
import SK from "../assets/images/deckTwo/KS.svg"
import SA from "../assets/images/deckTwo/AS.svg"
// DIAMONDS
import D2 from "../assets/images/deckTwo/2D.svg"
import D3 from "../assets/images/deckTwo/3D.svg"
import D4 from "../assets/images/deckTwo/4D.svg"
import D5 from "../assets/images/deckTwo/5D.svg"
import D6 from "../assets/images/deckTwo/6D.svg"
import D7 from "../assets/images/deckTwo/7D.svg"
import D8 from "../assets/images/deckTwo/8D.svg"
import D9 from "../assets/images/deckTwo/9D.svg"
import DT from "../assets/images/deckTwo/TD.svg"
import DJ from "../assets/images/deckTwo/JD.svg"
import DQ from "../assets/images/deckTwo/QD.svg"
import DK from "../assets/images/deckTwo/KD.svg"
import DA from "../assets/images/deckTwo/AD.svg"
// HEARTS
import H2 from "../assets/images/deckTwo/2H.svg"
import H3 from "../assets/images/deckTwo/3H.svg"
import H4 from "../assets/images/deckTwo/4H.svg"
import H5 from "../assets/images/deckTwo/5H.svg"
import H6 from "../assets/images/deckTwo/6H.svg"
import H7 from "../assets/images/deckTwo/7H.svg"
import H8 from "../assets/images/deckTwo/8H.svg"
import H9 from "../assets/images/deckTwo/9H.svg"
import HJ from "../assets/images/deckTwo/JH.svg"
import HT from "../assets/images/deckTwo/TH.svg"
import HQ from "../assets/images/deckTwo/QH.svg"
import HK from "../assets/images/deckTwo/KH.svg"
import HA from "../assets/images/deckTwo/AH.svg"
// CLUBS
import C2 from "../assets/images/deckTwo/2C.svg"
import C3 from "../assets/images/deckTwo/3C.svg"
import C4 from "../assets/images/deckTwo/4C.svg"
import C5 from "../assets/images/deckTwo/5C.svg"
import C6 from "../assets/images/deckTwo/6C.svg"
import C7 from "../assets/images/deckTwo/7C.svg"
import C8 from "../assets/images/deckTwo/8C.svg"
import C9 from "../assets/images/deckTwo/9C.svg"
import CJ from "../assets/images/deckTwo/JC.svg"
import CT from "../assets/images/deckTwo/TC.svg"
import CQ from "../assets/images/deckTwo/QC.svg"
import CK from "../assets/images/deckTwo/KC.svg"
import CA from "../assets/images/deckTwo/AC.svg"

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
