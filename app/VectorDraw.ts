import { RectAttributes, CircleAttributes, BatchCircleAttributes } from './VDTypes'

type AllowedSvgTypes = "rect" | "circle"

enum QualifiedNames {
  Width = 'width',
  Height = 'height',
  Fill = 'fill',
  Cx = 'cx',
  Cy = 'cy',
  R = 'r'
}

type EventTypes = 'mouseover' | 'click'

type EventHandler = (event: MouseEvent) => void

enum RegisteredEventTuple {
  EventType,
  Handler
}
type RegisteredEvents = [EventTypes, EventHandler ]

interface AttrOptions {
  listener: EventTypes,
  handler: EventHandler
}

interface VectorOptions {
  svgType: AllowedSvgTypes;
  targetId: string 
}

interface RectOptions {
  svgType: 'rect';
  targetId: string
}

interface CircleOptions {
  svgType: 'circle';
  targetId: string
}

const xmlns = 'http://www.w3.org/2000/svg'

class SvgRect {
  private _ns: string = xmlns
  private _svgType: "rect"
  private _targetId: string;
  private _targetElement: HTMLElement
  private _svg = document.createElementNS(this._ns, 'svg')
  private _attributes: RectAttributes;

  constructor(options: RectOptions) {
    this._svgType = options.svgType
    this._targetId = options.targetId
    this._targetElement = document.getElementById(options.targetId)
  }

  attributes(args: RectAttributes): SvgRect {
    this._attributes = args
    return this
  }

  draw: () => void = () => {
    this._svg.setAttributeNS(null, QualifiedNames.Width, this._attributes.width)
    this._svg.setAttributeNS(null, QualifiedNames.Height, this._attributes.height)
    let rect = document.createElementNS(this._ns, this._svgType)
    rect.setAttributeNS(null, QualifiedNames.Width, "100%")
    rect.setAttributeNS(null, QualifiedNames.Height, "100%")
    rect.setAttributeNS(null, QualifiedNames.Fill, this._attributes.fill)
    this._svg.appendChild(rect)
    this._targetElement.appendChild(this._svg)
  }
}

class SvgCircle {
  private _ns = 'http://www.w3.org/2000/svg'
  private _svgType: "circle"
  private _targetId: string;
  private _targetElement: HTMLElement
  private _svg = document.createElementNS(this._ns, 'svg')
  private _attributes: CircleAttributes;
  private _batchAttributes: BatchCircleAttributes;
  private _registeredEventHandlers: RegisteredEvents[] = []
  private _createElement: (attr: CircleAttributes) => Element = (attr) => {
    let circle = document.createElementNS(this._ns, this._svgType)
    this._attachListeners(circle)
    circle.setAttributeNS(null, QualifiedNames.Cx, attr.cx)
    circle.setAttributeNS(null, QualifiedNames.Cy, attr.cy)
    circle.setAttributeNS(null, QualifiedNames.R, attr.r)
    circle.setAttributeNS(null, QualifiedNames.Fill, attr.fill)
    // circle.addEventListener('mouseover', () => (console.log('hovered')))
    return this._targetElement.appendChild(circle)
  }
  private _attachListeners = (element: Element) => {
    if (!!this._registeredEventHandlers) {
      for (let i = 0; i < this._registeredEventHandlers.length; i++) {
        element.addEventListener(
          this._registeredEventHandlers[i][RegisteredEventTuple.EventType], 
          this._registeredEventHandlers[i][RegisteredEventTuple.Handler]
        )
      }
    }
  }

  constructor(options: CircleOptions) {
    this._svgType = options.svgType
    this._targetId = options.targetId
    this._targetElement = document.getElementById(options.targetId)
  }

  attributes(args: CircleAttributes, options?: AttrOptions): SvgCircle {
    this._attributes = args
    return this
  }

  batchAttributes(args: BatchCircleAttributes, options?: AttrOptions): SvgCircle {
    if (!!options.listener) {
      this._registeredEventHandlers.push([options.listener, options.handler])
    }
    this._batchAttributes = args
    return this
  }

  draw: () => void = () => {
    this._createElement(this._attributes)
  }

  batchDraw: () => void = () => {
    for(let i = 0; i < this._batchAttributes.length; i++) {
      this._createElement(this._batchAttributes[i])
    }
  }
}

export class VectorDraw {
  createSvg(options: RectOptions): SvgRect;
  createSvg(options: CircleOptions): SvgCircle;

  createSvg(options: VectorOptions): SvgCircle | SvgRect {
    switch (options.svgType) {
      case "rect":
        return new SvgRect({svgType: options.svgType, targetId: options.targetId})
      case "circle":
        return new SvgCircle({svgType: options.svgType, targetId: options.targetId})
      default: 
        throw new Error('Select either rect or circle')
    }
  }
}
