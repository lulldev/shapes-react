/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/index.d.ts" />

import * as React from "react";
import * as _RB from "react-bootstrap";

export class CircleControl extends React.Component<any, any> {

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
                    <label>Radius:</label>
                    <_RB.FormControl id="radius" type="number" placeholder="10"
                                    onChange={this.props.handleShapeParams}></_RB.FormControl>
                </_RB.FormGroup>
                <_RB.FormGroup>
                    <label>X-coord</label>
                    <_RB.FormControl id="x-coord" type="number" placeholder="50"
                                    onChange={this.props.handleShapeParams}></_RB.FormControl>
                </_RB.FormGroup>
                <_RB.FormGroup>
                    <label>Y-coord</label>
                    <_RB.FormControl id="y-coord" type="number" placeholder="20"
                                    onChange={this.props.handleShapeParams}></_RB.FormControl>
                </_RB.FormGroup>
            </div>
        );
    }

    private isActivateFormControl(): boolean {
        return (!!this.props.shapeType) && (this.props.shapeType === "circle");
    }
}
