/// <reference path="../../../../typings/index.d.ts" />

import * as React from 'react';

export interface ICanvasAreaProps {
}

export interface ICanvasAreaState {
}

export class CanvasArea extends React.Component<ICanvasAreaProps, ICanvasAreaState> {
    constructor () {
        super();
    }

    setState() {
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
