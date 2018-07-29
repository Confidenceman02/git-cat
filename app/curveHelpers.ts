import { QuadraticCoords } from './types';

const quadraticRegex = RegExp(/^Q/ || /^q/)

const isQuadraticCurve = (coordinates: string) => (quadraticRegex.test(coordinates))

const extractQuadraticCurve = (svgElement: Element): string => {
  const svgShapeCoordinates: string = svgElement.getAttribute('d')
  let quadraticCurve: string
  svgShapeCoordinates.split(' ').forEach((element, index, array) => {
    if (isQuadraticCurve(element)) {
      quadraticCurve = `${element},${array[index + 1]}`
    }
  });
  return quadraticCurve
}

const extractQuadraticYAxis = (quadCoord: string): string => {
  return quadCoord.split(",")[QuadraticCoords.ControlPointY]
}

const getAttributeValue = (element: Element, attribute: string): string => {
  return element.getAttribute(attribute)
}

interface TrackerConfig {
  trackedElements: HTMLCollectionOf<Element>;
  displayTrackedElements: boolean;
  displayControlPoints: boolean;
}

export class Tracker {
  private _trackedElements: HTMLCollectionOf<Element>

  private _displayControlPoints: boolean

  private _displayTrackedElements: boolean

  private _displayElements = (elements: HTMLElement[] | HTMLCollectionOf<Element>) => {
    Array.prototype.map.call(elements, (element: HTMLElement) => {
      element.style.display = "block"
    })
  }
  private _updateControlPointsY = () => {
    for (let i = 0; i < this._trackedElements.length; i++) {
      const quadraticYValue: string = extractQuadraticYAxis(extractQuadraticCurve(this._trackedElements[i]))
      const trackedElementId = getAttributeValue(this._trackedElements[i], 'id')
      const trackedElementMarker = document.getElementById(`${trackedElementId}-marker`)
      trackedElementMarker.setAttribute('cy', quadraticYValue)
    }
  }
  
  constructor(config: TrackerConfig) {
    this._trackedElements = config.trackedElements
    this._displayControlPoints = config.displayControlPoints
    this._displayTrackedElements = config.displayTrackedElements

    if (this._displayControlPoints) {
      this._displayElements(this.getMarkers())
    }

    if (this._displayTrackedElements) {
      this._displayElements(this._trackedElements)
    }
  }

  getMarkers = () => {
    let elements: HTMLElement[] = []
    for (let i = 0; i < this._trackedElements.length; i++) {
      elements.push(document.getElementById(`${getAttributeValue(this._trackedElements[i], 'id')}-marker`))
    }
    return elements
  }

  extractCoordinates = (): string[] => (
    Array.prototype.map.call(this._trackedElements, (trackedElement: Element) => {
      return extractQuadraticCurve(trackedElement)
    })
  )

  updateAllControlPoints = () => {
    this._updateControlPointsY()
  }

}