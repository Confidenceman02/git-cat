import "./style.css";
import { Tracker, extractCubicCurves, coordsToXYTuple } from './curveHelpers';
import { VectorDraw } from './VectorDraw';
const D = document;
const ns = 'http://www.w3.org/2000/svg';
const $ = D.querySelector.bind(D);
// select quadratic curves that shape eyes
const bottomLeftEyeElement = $('#bottom-left-eye');
const topLeftEyeElement = $('#top-left-eye');
const bottomRightEyeElement = $('#bottom-right-eye');
const topRightEyeElement = $('#top-right-eye');
// github elment
const gitCat = $('#gitcat');
gitCat.style.display = "block";
let circle = new VectorDraw;
const batchedCubicCoords = coordsToXYTuple(extractCubicCurves(gitCat.getAttribute('d')));
const batchCubicAttributes = batchedCubicCoords.map((coordTuple) => ({ fill: '#f06', cx: coordTuple[0], cy: coordTuple[1], r: '3' }));
circle.createSvg({ svgType: 'circle', targetId: 'drawing' })
    .batchAttributes(batchCubicAttributes, { listener: 'hover', handler: () => console.log('hovered') })
    .batchDraw();
const trackedElements = new Tracker({
    trackedElements: document.getElementsByClassName('eye'),
    displayTrackedElements: true,
    displayControlPoints: false
});
// anything from 0 - 1 below .5 ideal for smoothness
let t = .3;
// linear interpolation to ease animation
const lerp = (norm, min, max) => {
    return (max - min) * norm + min;
};
// maximum values
let bottomEyeControlPointMaxY = 275;
let topEyeControlPointMaxY = 225;
// minimum values
let bottomEyeControlPointMinY = 240;
let topEyeControlPointMinY = 249;
let frame = null;
const openEyes = () => {
    bottomLeftEyeElement.setAttribute('d', `M175,230 Q185,${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()} 245,265`);
    topLeftEyeElement.setAttribute('d', `M175,230 Q225,${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()} 245,265`);
    bottomRightEyeElement.setAttribute('d', `M267,265 Q327,${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()} 337,230`);
    topRightEyeElement.setAttribute('d', `M267, 265 Q287,${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()} 337,230`);
    trackedElements.updateAllControlPoints();
    frame = requestAnimationFrame(openEyes);
    t += .019;
    if (t > 1) {
        cancelAnimationFrame(frame);
        t = .3;
        bottomEyeControlPointMaxY = 260;
        topEyeControlPointMaxY = 235;
        bottomEyeControlPointMinY = 275;
        topEyeControlPointMinY = 225;
        setTimeout(angryEyes, 1000);
    }
};
const angryEyes = () => {
    bottomLeftEyeElement.setAttribute('d', `M175,230 Q185,${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()} 245,265`);
    topLeftEyeElement.setAttribute('d', `M175,230 Q225,${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()} 245,265`);
    bottomRightEyeElement.setAttribute('d', `M267,265 Q327 ${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()} 337,230`);
    topRightEyeElement.setAttribute('d', `M267, 265 Q287,${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()} 337,230`);
    trackedElements.updateAllControlPoints();
    frame = requestAnimationFrame(angryEyes);
    t += .06;
    if (t > 1) {
        cancelAnimationFrame(frame);
        t = .3;
        bottomEyeControlPointMaxY = 232;
        topEyeControlPointMaxY = 252;
        bottomEyeControlPointMinY = 260;
        topEyeControlPointMinY = 235;
        setTimeout(blinkClose, 1000);
    }
};
const blinkClose = () => {
    bottomLeftEyeElement.setAttribute('d', `M175,230 Q185,${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()} 245,265`);
    topLeftEyeElement.setAttribute('d', `M175,230 Q225,${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()} 245,265`);
    bottomRightEyeElement.setAttribute('d', `M267,265 Q327 ${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()} 337,230`);
    topRightEyeElement.setAttribute('d', `M267, 265 Q287,${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()} 337,230`);
    trackedElements.updateAllControlPoints();
    frame = requestAnimationFrame(blinkClose);
    t += .05;
    if (t > 1) {
        cancelAnimationFrame(frame);
        t = .3;
        bottomEyeControlPointMaxY = 260;
        topEyeControlPointMaxY = 235;
        bottomEyeControlPointMinY = 232;
        topEyeControlPointMinY = 252;
        blinkOpen();
    }
};
const blinkOpen = () => {
    bottomLeftEyeElement.setAttribute('d', `M175,230 Q185,${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()} 245,265`);
    topLeftEyeElement.setAttribute('d', `M175,230 Q225,${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()} 245,265`);
    bottomRightEyeElement.setAttribute('d', `M267,265 Q327 ${lerp(t, bottomEyeControlPointMinY, bottomEyeControlPointMaxY).toString()} 337,230`);
    topRightEyeElement.setAttribute('d', `M267, 265 Q287,${lerp(t, topEyeControlPointMinY, topEyeControlPointMaxY).toString()} 337,230`);
    trackedElements.updateAllControlPoints();
    frame = requestAnimationFrame(blinkOpen);
    t += .05;
    if (t > 1) {
        cancelAnimationFrame(frame);
        t = .3;
        bottomEyeControlPointMaxY = 232;
        topEyeControlPointMaxY = 252;
        bottomEyeControlPointMinY = 260;
        topEyeControlPointMinY = 235;
        setTimeout(blinkClose, 3000);
    }
};
setTimeout(openEyes, 1000);
