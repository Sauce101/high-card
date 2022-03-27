// SPADES
import S2 from "../assets/images/deck/2S.svg"
import S3 from "../assets/images/deck/3S.svg"
import S4 from "../assets/images/deck/4S.svg"
import S5 from "../assets/images/deck/5S.svg"
import S6 from "../assets/images/deck/6S.svg"
import S7 from "../assets/images/deck/7S.svg"
import S8 from "../assets/images/deck/8S.svg"
import S9 from "../assets/images/deck/9S.svg"
import ST from "../assets/images/deck/TS.svg"
import SJ from "../assets/images/deck/JS.svg"
import SQ from "../assets/images/deck/QS.svg"
import SK from "../assets/images/deck/KS.svg"
import SA from "../assets/images/deck/AS.svg"
// DIAMONDS
import D2 from "../assets/images/deck/2D.svg"
import D3 from "../assets/images/deck/3D.svg"
import D4 from "../assets/images/deck/4D.svg"
import D5 from "../assets/images/deck/5D.svg"
import D6 from "../assets/images/deck/6D.svg"
import D7 from "../assets/images/deck/7D.svg"
import D8 from "../assets/images/deck/8D.svg"
import D9 from "../assets/images/deck/9D.svg"
import DT from "../assets/images/deck/TD.svg"
import DJ from "../assets/images/deck/JD.svg"
import DQ from "../assets/images/deck/QD.svg"
import DK from "../assets/images/deck/KD.svg"
import DA from "../assets/images/deck/AD.svg"
// HEARTS
import H2 from "../assets/images/deck/2H.svg"
import H3 from "../assets/images/deck/3H.svg"
import H4 from "../assets/images/deck/4H.svg"
import H5 from "../assets/images/deck/5H.svg"
import H6 from "../assets/images/deck/6H.svg"
import H7 from "../assets/images/deck/7H.svg"
import H8 from "../assets/images/deck/8H.svg"
import H9 from "../assets/images/deck/9H.svg"
import HJ from "../assets/images/deck/JH.svg"
import HT from "../assets/images/deck/TH.svg"
import HQ from "../assets/images/deck/QH.svg"
import HK from "../assets/images/deck/KH.svg"
import HA from "../assets/images/deck/AH.svg"
// CLUBS
import C2 from "../assets/images/deck/2C.svg"
import C3 from "../assets/images/deck/3C.svg"
import C4 from "../assets/images/deck/4C.svg"
import C5 from "../assets/images/deck/5C.svg"
import C6 from "../assets/images/deck/6C.svg"
import C7 from "../assets/images/deck/7C.svg"
import C8 from "../assets/images/deck/8C.svg"
import C9 from "../assets/images/deck/9C.svg"
import CJ from "../assets/images/deck/JC.svg"
import CT from "../assets/images/deck/TC.svg"
import CQ from "../assets/images/deck/QC.svg"
import CK from "../assets/images/deck/KC.svg"
import CA from "../assets/images/deck/AC.svg"

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
