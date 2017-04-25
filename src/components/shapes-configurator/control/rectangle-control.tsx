/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/index.d.ts" />

import * as React from "react";
import * as _RB from "react-bootstrap";

export class RectangleControl extends React.Component<any, any> {

    constructor (props) {
        super(props);
    }

    public render () {

        if (!this.isActivateFormControl()) {
            return null;
        }

        return (
            <div>
                <_RB.FormGroup>
                    <label>X1-coord</label>
                    <_RB.FormControl id="x1-coord" onChange={this.props.handleShapeParams}
                                    type="number" placeholder="50"></_RB.FormControl>
                </_RB.FormGroup>
                <_RB.FormGroup>
                    <label>Y1-coord</label>
                    <_RB.FormControl id="y1-coord" onChange={this.props.handleShapeParams}
                                    type="number" placeholder="20"></_RB.FormControl>
                </_RB.FormGroup>
                <_RB.FormGroup>
                    <label>X2-coord</label>
                    <_RB.FormControl id="x2-coord" onChange={this.props.handleShapeParams}
                                    type="number" placeholder="10"></_RB.FormControl>
                </_RB.FormGroup>
                <_RB.FormGroup>
                    <label>Y2-coord</label>
                    <_RB.FormControl id="y2-coord" onChange={this.props.handleShapeParams}
                                    type="number" placeholder="20"></_RB.FormControl>
                </_RB.FormGroup>
            </div>
        );
    }

    private isActivateFormControl (): boolean {
        return (!!this.props.shapeType) && (this.props.shapeType === "rectangle");
    }
}
