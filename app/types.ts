export enum QuadraticCoords {
  ControlPointX = 0,
  ControlPointY,
  PositionX,
  PositionY
}

export enum CubicCoords {
  StartCurveXY = 0,
  EndCurveXY,
  EndLineXY
}

export type XYCoord = [string, string]

export type CubicAxis = [string, string, string]