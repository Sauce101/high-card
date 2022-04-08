// SPADES
import S2 from "../../assets/images/cards/plain/2S.svg"
import S3 from "../../assets/images/cards/plain/3S.svg"
import S4 from "../../assets/images/cards/plain/4S.svg"
import S5 from "../../assets/images/cards/plain/5S.svg"
import S6 from "../../assets/images/cards/plain/6S.svg"
import S7 from "../../assets/images/cards/plain/7S.svg"
import S8 from "../../assets/images/cards/plain/8S.svg"
import S9 from "../../assets/images/cards/plain/9S.svg"
import ST from "../../assets/images/cards/plain/TS.svg"
import SJ from "../../assets/images/cards/plain/JS.svg"
import SQ from "../../assets/images/cards/plain/QS.svg"
import SK from "../../assets/images/cards/plain/KS.svg"
import SA from "../../assets/images/cards/plain/AS.svg"
// DIAMONDS
import D2 from "../../assets/images/cards/plain/2D.svg"
import D3 from "../../assets/images/cards/plain/3D.svg"
import D4 from "../../assets/images/cards/plain/4D.svg"
import D5 from "../../assets/images/cards/plain/5D.svg"
import D6 from "../../assets/images/cards/plain/6D.svg"
import D7 from "../../assets/images/cards/plain/7D.svg"
import D8 from "../../assets/images/cards/plain/8D.svg"
import D9 from "../../assets/images/cards/plain/9D.svg"
import DT from "../../assets/images/cards/plain/TD.svg"
import DJ from "../../assets/images/cards/plain/JD.svg"
import DQ from "../../assets/images/cards/plain/QD.svg"
import DK from "../../assets/images/cards/plain/KD.svg"
import DA from "../../assets/images/cards/plain/AD.svg"
// HEARTS
import H2 from "../../assets/images/cards/plain/2H.svg"
import H3 from "../../assets/images/cards/plain/3H.svg"
import H4 from "../../assets/images/cards/plain/4H.svg"
import H5 from "../../assets/images/cards/plain/5H.svg"
import H6 from "../../assets/images/cards/plain/6H.svg"
import H7 from "../../assets/images/cards/plain/7H.svg"
import H8 from "../../assets/images/cards/plain/8H.svg"
import H9 from "../../assets/images/cards/plain/9H.svg"
import HJ from "../../assets/images/cards/plain/JH.svg"
import HT from "../../assets/images/cards/plain/TH.svg"
import HQ from "../../assets/images/cards/plain/QH.svg"
import HK from "../../assets/images/cards/plain/KH.svg"
import HA from "../../assets/images/cards/plain/AH.svg"
// CLUBS
import C2 from "../../assets/images/cards/plain/2C.svg"
import C3 from "../../assets/images/cards/plain/3C.svg"
import C4 from "../../assets/images/cards/plain/4C.svg"
import C5 from "../../assets/images/cards/plain/5C.svg"
import C6 from "../../assets/images/cards/plain/6C.svg"
import C7 from "../../assets/images/cards/plain/7C.svg"
import C8 from "../../assets/images/cards/plain/8C.svg"
import C9 from "../../assets/images/cards/plain/9C.svg"
import CJ from "../../assets/images/cards/plain/JC.svg"
import CT from "../../assets/images/cards/plain/TC.svg"
import CQ from "../../assets/images/cards/plain/QC.svg"
import CK from "../../assets/images/cards/plain/KC.svg"
import CA from "../../assets/images/cards/plain/AC.svg"

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
