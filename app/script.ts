import "./style.css";
import { extractQuadraticCurve } from './curveHelpers'

// select quadratic curves that shape eyes
const bottomLeftEyeElement: HTMLElement = document.querySelector('#bottom-left-eye')
const topLeftEyeElement: HTMLElement = document.querySelector('#top-left-eye')
const bottomRightEyeElement: HTMLElement = document.querySelector('#bottom-right-eye')
const topRightEyeElement: HTMLElement = document.querySelector('#top-right-eye')

// control point markers
const bottomLeftEyeMarkerElement = document.querySelector('#bottom-left-eye-marker')
const topLeftEyeMarkerElement = document.querySelector('#top-left-eye-marker')
const bottomRightEyeMarkerElement = document.querySelector('#bottom-right-eye-marker')
const topRightEyeMarkerElement = document.querySelector('#top-right-eye-marker')

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
  bottomLeftEyeElement.style.display = 'block'
  bottomLeftEyeElement.setAttribute('d', `M175,230 Q185,${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()} 245,265`)
  // bottomLeftEyeMarkerElement.style.display = 'block'
  bottomLeftEyeMarkerElement.setAttribute('cy', `${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()}`)

  topLeftEyeElement.style.display = 'block'
  topLeftEyeElement.setAttribute('d', `M175,230 Q225,${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()} 245,265`)
  // topLeftEyeMarkerElement.style.display = 'block'
  topLeftEyeMarkerElement.setAttribute('cy', `${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()}`)

  bottomRightEyeElement.style.display = 'block'
  bottomRightEyeElement.setAttribute('d', `M267,265 Q327 ${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()} 337,230`)
  // bottomRightEyeMarkerElement.style.display = 'block'
  bottomRightEyeMarkerElement.setAttribute('cy', `${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()}`)

  topRightEyeElement.style.display = 'block'
  topRightEyeElement.setAttribute('d', `M267, 265 Q287,${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()} 337,230`)
  // topRightEyeMarkerElement.style.display = 'block'
  topRightEyeMarkerElement.setAttribute('cy', `${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()}`)

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
  bottomLeftEyeMarkerElement.setAttribute('cy', `${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()}`)

  topLeftEyeElement.setAttribute('d', `M175,230 Q225,${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()} 245,265`)
  topLeftEyeMarkerElement.setAttribute('cy', `${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()}`)

  bottomRightEyeElement.setAttribute('d', `M267,265 Q327 ${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()} 337,230`)
  bottomRightEyeMarkerElement.setAttribute('cy', `${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()}`)

  topRightEyeElement.setAttribute('d', `M267, 265 Q287,${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()} 337,230`)
  topRightEyeMarkerElement.setAttribute('cy', `${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()}`)

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
  bottomLeftEyeMarkerElement.setAttribute('cy', `${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()}`)

  topLeftEyeElement.setAttribute('d', `M175,230 Q225,${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()} 245,265`)
  topLeftEyeMarkerElement.setAttribute('cy', `${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()}`)

  bottomRightEyeElement.setAttribute('d', `M267,265 Q327 ${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()} 337,230`)
  bottomRightEyeMarkerElement.setAttribute('cy', `${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()}`)

  topRightEyeElement.setAttribute('d', `M267, 265 Q287,${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()} 337,230`)
  topRightEyeMarkerElement.setAttribute('cy', `${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()}`)

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
  console.log('blinkOpen')
  bottomLeftEyeElement.setAttribute('d', `M175,230 Q185,${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()} 245,265`)
  bottomLeftEyeMarkerElement.setAttribute('cy', `${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()}`)

  topLeftEyeElement.setAttribute('d', `M175,230 Q225,${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()} 245,265`)
  topLeftEyeMarkerElement.setAttribute('cy', `${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()}`)

  bottomRightEyeElement.setAttribute('d', `M267,265 Q327 ${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()} 337,230`)
  bottomRightEyeMarkerElement.setAttribute('cy', `${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()}`)

  topRightEyeElement.setAttribute('d', `M267, 265 Q287,${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()} 337,230`)
  topRightEyeMarkerElement.setAttribute('cy', `${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()}`)

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
