
interface CommonAttributes {
  width?: string;
  height?: string
}

export type BatchCircleAttributes = CircleAttributes[]

export interface CircleAttributes extends CommonAttributes {
  cx: string;
  cy: string;
  r: string;
  fill: string
}

export interface RectAttributes extends CommonAttributes {
  x?: string;
  y?: string;
  fill: string;
}