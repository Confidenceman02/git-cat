export var QuadraticCoords;
(function (QuadraticCoords) {
    QuadraticCoords[QuadraticCoords["ControlPointX"] = 0] = "ControlPointX";
    QuadraticCoords[QuadraticCoords["ControlPointY"] = 1] = "ControlPointY";
    QuadraticCoords[QuadraticCoords["PositionX"] = 2] = "PositionX";
    QuadraticCoords[QuadraticCoords["PositionY"] = 3] = "PositionY";
})(QuadraticCoords || (QuadraticCoords = {}));
export var CubicCoords;
(function (CubicCoords) {
    CubicCoords[CubicCoords["StartCurveXY"] = 0] = "StartCurveXY";
    CubicCoords[CubicCoords["EndCurveXY"] = 1] = "EndCurveXY";
    CubicCoords[CubicCoords["EndLineXY"] = 2] = "EndLineXY";
})(CubicCoords || (CubicCoords = {}));
