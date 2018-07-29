import "./style.css";
import { Tracker } from './curveHelpers'

const D = document

const $ = D.querySelector.bind(D)
// select quadratic curves that shape eyes
const bottomLeftEyeElement: HTMLElement = $('#bottom-left-eye')
const topLeftEyeElement: HTMLElement = $('#top-left-eye')
const bottomRightEyeElement: HTMLElement = $('#bottom-right-eye')
const topRightEyeElement: HTMLElement = $('#top-right-eye')

const gitCat: HTMLElement = document.getElementById('gitcat')
gitCat.style.display = "block"

const trackedElements = new Tracker(
  {
    trackedElements: document.getElementsByClassName('eye'),
    displayTrackedElements: true,
    displayControlPoints: true
  }
)

// anything from 0 - 1 below .5 ideal for smoothness
let t: number = .3

// linear interpolation to ease animation
const lerp = (norm: number, min: number, max: number): number => {
  return (max - min) * norm + min
}

// maximum values
let bottomEyeControlPointMaxY: number = 275
let topEyeControlPointMaxY: number = 225

// minimum values
let bottomEyeControlPointMinY: number = 240
let topEyeControlPointMinY: number = 249

let frame = null
const openEyes = (): void => {
  bottomLeftEyeElement.setAttribute('d', `M175,230 Q185,${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()} 245,265`)

  topLeftEyeElement.setAttribute('d', `M175,230 Q225,${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()} 245,265`)

  bottomRightEyeElement.setAttribute('d', `M267,265 Q327,${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()} 337,230`)

  topRightEyeElement.setAttribute('d', `M267, 265 Q287,${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()} 337,230`)

  trackedElements.updateAllControlPoints()
  frame = requestAnimationFrame(openEyes)

  t += .019
  if (t > 1) {
    cancelAnimationFrame(frame)
    t = .3
    bottomEyeControlPointMaxY = 260
    topEyeControlPointMaxY = 235

    bottomEyeControlPointMinY = 275
    topEyeControlPointMinY = 225
    setTimeout(angryEyes, 1000)
  }
}

const angryEyes = () => {
  bottomLeftEyeElement.setAttribute('d', `M175,230 Q185,${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()} 245,265`)

  topLeftEyeElement.setAttribute('d', `M175,230 Q225,${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()} 245,265`)

  bottomRightEyeElement.setAttribute('d', `M267,265 Q327 ${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()} 337,230`)

  topRightEyeElement.setAttribute('d', `M267, 265 Q287,${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()} 337,230`)

  trackedElements.updateAllControlPoints()
  frame = requestAnimationFrame(angryEyes)

  t += .06
  if (t > 1) {
    cancelAnimationFrame(frame)
    t = .3
    bottomEyeControlPointMaxY = 232
    topEyeControlPointMaxY = 252

    bottomEyeControlPointMinY = 260
    topEyeControlPointMinY = 235
    setTimeout(blinkClose, 1000)
  }
}

const blinkClose = () => {
  bottomLeftEyeElement.setAttribute('d', `M175,230 Q185,${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()} 245,265`)

  topLeftEyeElement.setAttribute('d', `M175,230 Q225,${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()} 245,265`)

  bottomRightEyeElement.setAttribute('d', `M267,265 Q327 ${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()} 337,230`)

  topRightEyeElement.setAttribute('d', `M267, 265 Q287,${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()} 337,230`)

  trackedElements.updateAllControlPoints()
  frame = requestAnimationFrame(blinkClose)
  t += .05
  if (t > 1) {
    cancelAnimationFrame(frame)
    t = .3
    bottomEyeControlPointMaxY = 260
    topEyeControlPointMaxY = 235

    bottomEyeControlPointMinY = 232
    topEyeControlPointMinY = 252
    blinkOpen()
  }
}

const blinkOpen = () => {
  bottomLeftEyeElement.setAttribute('d', `M175,230 Q185,${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()} 245,265`)

  topLeftEyeElement.setAttribute('d', `M175,230 Q225,${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()} 245,265`)

  bottomRightEyeElement.setAttribute('d', `M267,265 Q327 ${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()} 337,230`)

  topRightEyeElement.setAttribute('d', `M267, 265 Q287,${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()} 337,230`)

  trackedElements.updateAllControlPoints()
  frame = requestAnimationFrame(blinkOpen)
  t += .05
  if (t > 1) {
    cancelAnimationFrame(frame)
    t = .3
    bottomEyeControlPointMaxY = 232
    topEyeControlPointMaxY = 252

    bottomEyeControlPointMinY = 260
    topEyeControlPointMinY = 235
    setTimeout(blinkClose, 3000)
  }
}

setTimeout(openEyes, 1000)
