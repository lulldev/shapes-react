/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/index.d.ts" />

import * as React from 'react';
import * as RB from 'react-bootstrap';

export class TriangleControl extends React.Component<any, any> {

    constructor (props) {
        super(props);
    }

    private isActivateFormControl() : boolean {
        return (!!this.props.shapeType) && (this.props.shapeType === 'triangle');
    }

    render () {

        if (!this.isActivateFormControl()) {
            return null;
        }

        return (
            <div>
                <RB.FormGroup>
                    <label>X1-coord</label>
                    <RB.FormControl id="x1-coord" onChange={this.props.handleShapeParams} type="number" placeholder="50"></RB.FormControl>
                </RB.FormGroup>
                <RB.FormGroup>
                    <label>Y1-coord</label>
                    <RB.FormControl id="y1-coord" onChange={this.props.handleShapeParams} type="number" placeholder="20"></RB.FormControl>
                </RB.FormGroup>
                <RB.FormGroup>
                    <label>X2-coord</label>
                    <RB.FormControl id="x2-coord" onChange={this.props.handleShapeParams} type="number" placeholder="10"></RB.FormControl>
                </RB.FormGroup>
                <RB.FormGroup>
                    <label>Y2-coord</label>
                    <RB.FormControl id="y2-coord" onChange={this.props.handleShapeParams} type="number" placeholder="20"></RB.FormControl>
                </RB.FormGroup>
                <RB.FormGroup>
                    <label>X3-coord</label>
                    <RB.FormControl id="x3-coord" onChange={this.props.handleShapeParams} type="number" placeholder="10"></RB.FormControl>
                </RB.FormGroup>
                <RB.FormGroup>
                    <label>Y3-coord</label>
                    <RB.FormControl id="y3-coord" onChange={this.props.handleShapeParams} type="number" placeholder="20"></RB.FormControl>
                </RB.FormGroup>
            </div>
        );
    }
}
