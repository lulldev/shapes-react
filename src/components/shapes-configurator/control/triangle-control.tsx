/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/index.d.ts" />

import * as React from 'react';
import * as RB from 'react-bootstrap';

export interface ITriangleControlProps {
}

export interface ITriangleControlState {
    display? : boolean
}

export class TriangleControl extends React.Component<ITriangleControlProps, ITriangleControlState> {

    constructor (props) {
        super(props);
        this.state = {display: false};
    }

    render () {

        const isComponentDisplay = this.state.display;

        if (!isComponentDisplay)
        {
            return null;
        }

        return (
            <div>
                <RB.FormGroup>
                    <label>X1-coord</label>
                    <RB.FormControl type="number" placeholder="50"></RB.FormControl>
                </RB.FormGroup>
                <RB.FormGroup>
                    <label>Y1-coord</label>
                    <RB.FormControl type="number" placeholder="20"></RB.FormControl>
                </RB.FormGroup>
                <RB.FormGroup>
                    <label>X2-coord</label>
                    <RB.FormControl type="number" placeholder="10"></RB.FormControl>
                </RB.FormGroup>
                <RB.FormGroup>
                    <label>Y2-coord</label>
                    <RB.FormControl type="number" placeholder="20"></RB.FormControl>
                </RB.FormGroup>
                <RB.FormGroup>
                    <label>X3-coord</label>
                    <RB.FormControl type="number" placeholder="10"></RB.FormControl>
                </RB.FormGroup>
                <RB.FormGroup>
                    <label>Y3-coord</label>
                    <RB.FormControl type="number" placeholder="20"></RB.FormControl>
                </RB.FormGroup>
            </div>
        );
    }
}
