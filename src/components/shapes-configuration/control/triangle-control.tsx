/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/index.d.ts" />

import * as React from "react";
import * as _RB from "react-bootstrap";

export class TriangleControl extends React.Component<any, any> {

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
                    <label>X1-coordinate</label>
                    <_RB.FormControl id="x1-coordinate" onChange={this.props.handleShapeParams}
                                    type="number" placeholder="50"></_RB.FormControl>
                </_RB.FormGroup>
                <_RB.FormGroup>
                    <label>Y1-coordinate</label>
                    <_RB.FormControl id="y1-coordinate" onChange={this.props.handleShapeParams}
                                    type="number" placeholder="20"></_RB.FormControl>
                </_RB.FormGroup>
                <_RB.FormGroup>
                    <label>X2-coordinate</label>
                    <_RB.FormControl id="x2-coordinate" onChange={this.props.handleShapeParams}
                                    type="number" placeholder="10"></_RB.FormControl>
                </_RB.FormGroup>
                <_RB.FormGroup>
                    <label>Y2-coordinate</label>
                    <_RB.FormControl id="y2-coordinate" onChange={this.props.handleShapeParams}
                                    type="number" placeholder="20"></_RB.FormControl>
                </_RB.FormGroup>
                <_RB.FormGroup>
                    <label>X3-coordinate</label>
                    <_RB.FormControl id="x3-coordinate" onChange={this.props.handleShapeParams}
                                    type="number" placeholder="10"></_RB.FormControl>
                </_RB.FormGroup>
                <_RB.FormGroup>
                    <label>Y3-coordinate</label>
                    <_RB.FormControl id="y3-coordinate" onChange={this.props.handleShapeParams}
                                    type="number" placeholder="20"></_RB.FormControl>
                </_RB.FormGroup>
            </div>
        );
    }

    private isActivateFormControl (): boolean {
        return (!!this.props.shapeType) && (this.props.shapeType === "triangle");
    }
}
