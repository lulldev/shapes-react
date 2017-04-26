/// <reference path="../../../../typings/index.d.ts" />

import * as React from "react";

import {Circle} from "../control/classes/Circle";
import {Rectangle} from "../control/classes/Rectangle";

export class CanvasArea extends React.Component<any, any> {

    constructor (props) {
        super(props);

    }

    public render () {
        let shape;
        let area = 0;
        let perimeter = 0;
        if (this.props.shapeParams && this.props.shapeParams.actionDraw) {
            shape = this.initShape(this.props.shapeParams);
            const canvasContext = document.getElementById("canvas-area");
            shape.draw(canvasContext);
            area = shape.getArea();
            perimeter = shape.getPerimeter();
        }
        return (
            <div>
                <label>Canvas output:</label>
                <canvas id="canvas-area"></canvas>
                <p>
                    Shape area: {area},
                    Shape perimeter: {perimeter}
                </p>
            </div>
        );
    }

    private initShape (shapeParams: any): void {
        let shape;
        switch (shapeParams.shapeType) {
            case "circle":
                shape = new Circle(shapeParams.shapeBorderColor, shapeParams.shapeBgColor,
                    parseInt(shapeParams.x_coordinate, 10), parseInt(shapeParams.y_coordinate, 10),
                    parseInt(shapeParams.radius, 10));
                break;
            default:
                shape = new Rectangle(shapeParams.shapeBorderColor, shapeParams.shapeBgColor,
                    parseInt(shapeParams.x_coordinate, 10), parseInt(shapeParams.y_coordinate, 10),
                    parseInt(shapeParams.width, 10), parseInt(shapeParams.height, 10));
                break;
        }
        return shape;
    }
}
