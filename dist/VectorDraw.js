var QualifiedNames;
(function (QualifiedNames) {
    QualifiedNames["Width"] = "width";
    QualifiedNames["Height"] = "height";
    QualifiedNames["Fill"] = "fill";
    QualifiedNames["Cx"] = "cx";
    QualifiedNames["Cy"] = "cy";
    QualifiedNames["R"] = "r";
})(QualifiedNames || (QualifiedNames = {}));
const xmlns = 'http://www.w3.org/2000/svg';
class SvgRect {
    constructor(options) {
        this._ns = xmlns;
        this._svg = document.createElementNS(this._ns, 'svg');
        this.draw = () => {
            this._svg.setAttributeNS(null, QualifiedNames.Width, this._attributes.width);
            this._svg.setAttributeNS(null, QualifiedNames.Height, this._attributes.height);
            let rect = document.createElementNS(this._ns, this._svgType);
            rect.setAttributeNS(null, QualifiedNames.Width, "100%");
            rect.setAttributeNS(null, QualifiedNames.Height, "100%");
            rect.setAttributeNS(null, QualifiedNames.Fill, this._attributes.fill);
            this._svg.appendChild(rect);
            this._targetElement.appendChild(this._svg);
        };
        this._svgType = options.svgType;
        this._targetId = options.targetId;
        this._targetElement = document.getElementById(options.targetId);
    }
    attributes(args) {
        this._attributes = args;
        return this;
    }
}
class SvgCircle {
    constructor(options) {
        this._ns = 'http://www.w3.org/2000/svg';
        this._svg = document.createElementNS(this._ns, 'svg');
        this._createElement = (attr) => {
            let circle = document.createElementNS(this._ns, this._svgType);
            circle.setAttributeNS(null, QualifiedNames.Cx, attr.cx);
            circle.setAttributeNS(null, QualifiedNames.Cy, attr.cy);
            circle.setAttributeNS(null, QualifiedNames.R, attr.r);
            circle.setAttributeNS(null, QualifiedNames.Fill, attr.fill);
            circle.addEventListener('mouseover', () => (console.log('hovered')));
            return this._targetElement.appendChild(circle);
        };
        this.draw = () => {
            this._createElement(this._attributes);
        };
        this.batchDraw = () => {
            for (let i = 0; i < this._batchAttributes.length; i++) {
                this._createElement(this._batchAttributes[i]);
            }
        };
        this._svgType = options.svgType;
        this._targetId = options.targetId;
        this._targetElement = document.getElementById(options.targetId);
    }
    attributes(args, options) {
        this._attributes = args;
        return this;
    }
    batchAttributes(args, options) {
        if (options.handler) {
            this._registeredEventHandlers.push(options.handler);
        }
        this._batchAttributes = args;
        return this;
    }
}
export class VectorDraw {
    createSvg(options) {
        switch (options.svgType) {
            case "rect":
                return new SvgRect({ svgType: options.svgType, targetId: options.targetId });
            case "circle":
                return new SvgCircle({ svgType: options.svgType, targetId: options.targetId });
            default:
                throw new Error('Select either rect or circle');
        }
    }
}
