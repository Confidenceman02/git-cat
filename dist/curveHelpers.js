import { QuadraticCoords } from './types';
const quadraticRegex = RegExp(/^Q/ || /^q/);
const cubicRegex = RegExp(/^C/ || /^c/);
const isQuadraticCurve = (coordinates) => (quadraticRegex.test(coordinates));
const isCubicCurve = (coordinates) => (cubicRegex.test(coordinates));
export const coordsToXYTuple = (coords) => {
    let splitCoords = [];
    for (let i = 0; i < coords.length; i++) {
        let currentElement = coords[i];
        currentElement.reduce((acc, value) => {
            let splitCoord = value.split(',');
            acc.push([splitCoord[0], splitCoord[1]]);
            return splitCoords;
        }, splitCoords);
    }
    return splitCoords;
};
const extractQuadraticCurve = (svgElement) => {
    const svgShapeCoordinates = svgElement.getAttribute('d');
    let quadraticCurve;
    svgShapeCoordinates.split(' ').forEach((element, index, array) => {
        if (isQuadraticCurve(element)) {
            quadraticCurve = `${element},${array[index + 1]}`;
        }
    });
    return quadraticCurve;
};
const removeCurveIdentifier = (value) => (value.slice(1));
export const extractCubicCurves = (allCoordiantes) => {
    const splitCooridnates = allCoordiantes.split(' ');
    let cubicCurvePositions = [];
    for (let i = 0; i < splitCooridnates.length; i++) {
        if (isCubicCurve(splitCooridnates[i])) {
            cubicCurvePositions.push([removeCurveIdentifier(splitCooridnates[i]), splitCooridnates[i + 1], splitCooridnates[i + 2]]);
            // bump index to last relevant cubic curve element to avoid unecessary mapping
            i = i + 2;
        }
    }
    return cubicCurvePositions;
};
const extractQuadraticYAxis = (quadCoord) => {
    return quadCoord.split(",")[QuadraticCoords.ControlPointY];
};
export const getAttributeValue = (element, attribute) => {
    return element.getAttribute(attribute);
};
const allQuadraticCurves = (elements) => (Array.prototype.map.call(elements, (trackedElement) => {
    return extractQuadraticCurve(trackedElement);
}));
export class Tracker {
    constructor(config) {
        this._displayElements = (elements) => {
            Array.prototype.map.call(elements, (element) => {
                element.style.display = "block";
            });
        };
        this._updateControlPointsY = () => {
            for (let i = 0; i < this._trackedElements.length; i++) {
                const quadraticYValue = extractQuadraticYAxis(extractQuadraticCurve(this._trackedElements[i]));
                const trackedElementId = getAttributeValue(this._trackedElements[i], 'id');
                if (trackedElementId.includes("top")) {
                    this._currentTopEyeQuadraticY = quadraticYValue;
                }
                else {
                    this._currentBottomEyeQuadraticY = quadraticYValue;
                }
                const trackedElementMarker = document.getElementById(`${trackedElementId}-marker`);
                trackedElementMarker.setAttribute('cy', quadraticYValue);
            }
        };
        this.getMarkers = () => {
            let elements = [];
            for (let i = 0; i < this._trackedElements.length; i++) {
                elements.push(document.getElementById(`${getAttributeValue(this._trackedElements[i], 'id')}-marker`));
            }
            return elements;
        };
        this.updateAllControlPoints = () => {
            this._updateControlPointsY();
        };
        this._trackedElements = config.trackedElements;
        this._displayControlPoints = config.displayControlPoints;
        this._displayTrackedElements = config.displayTrackedElements;
        if (this._displayControlPoints) {
            this._displayElements(this.getMarkers());
        }
        if (this._displayTrackedElements) {
            this._displayElements(this._trackedElements);
        }
    }
}
