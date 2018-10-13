import {AnalyzeArgs, DClassifierProps, CxClassifierProps, AnalyzeProperties } from './VATypes'
import { CubicAxis } from './types'

class CxClassifier {
}

class DClassifier {
  private _targetId: string;
  private _attributeLabel: AnalyzeProperties 
  private _attributeValue: string
  private _targetElement: HTMLElement
  constructor(args: DClassifierProps) {
    if (!!document.querySelector(`#${args.targetId}`).getAttribute(args.attribute)) {
      this._targetId = args.targetId
      this._attributeLabel = args.attribute
      this._attributeValue  = document.querySelector(`#${args.targetId}`).getAttribute(args.attribute)
      this._targetElement = document.getElementById(args.targetId)
    } else {
      throw new Error(`"${args.attribute}" not found on provided targetId`)
    }
  }

  fetchCubicCurves: () => CubicAxis[] = () => (
    extractCubicCurves(this._attributeValue)
  )
}

export class VectorAnalyze {
  analyze(args: DClassifierProps): DClassifier;
  analyze(args: CxClassifierProps): CxClassifier

  analyze(args: AnalyzeArgs ): DClassifier | CxClassifier {
    switch (args.attribute){
      case 'd':
        return new DClassifier({targetId: args.targetId, attribute: args.attribute})
      case 'cx':
        return new CxClassifier
      default:
        throw new Error('Select either rect or circle')
    }
  }
}

const cubicRegex = RegExp(/^C/ || /^c/)

const isCubicCurve = (coordinates: string) => (cubicRegex.test(coordinates))

const removeCurveIdentifier = (value: string) => (value.slice(1))

export const extractCubicCurves = (allCoordiantes: string): CubicAxis[] => {
  const splitCooridnates: string[] = allCoordiantes.split(' ')
  let cubicCurvePositions: CubicAxis[] = []
  for(let i = 0; i < splitCooridnates.length; i++) {
    if (isCubicCurve(splitCooridnates[i])) {
      cubicCurvePositions.push([removeCurveIdentifier(splitCooridnates[i]), splitCooridnates[i + 1], splitCooridnates[i + 2]])

      // bump index to last relevant cubic curve element to avoid unecessary iteration
      i = i + 2
    }
  }
  return cubicCurvePositions
}
