/// <reference path="../../../../typings/index.d.ts" />

import * as React from 'react';

export class CanvasArea extends React.Component<any, any> {
    constructor () {
        super();
    }

    render () {
        return (
            <div>
                <label>Canvas output:</label>
                <canvas id="canvas-area"></canvas>
                <p>
                    Shape area: <span>0</span>&nbsp;
                    Shape perimeter: <span>0</span>
                </p>
            </div>
        );
    }
}
