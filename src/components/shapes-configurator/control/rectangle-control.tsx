/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/index.d.ts" />

import * as React from 'react';
import * as RB from 'react-bootstrap';

export interface IRectangleControlProps {
}

export interface IRectangleControlState {
    display? : boolean
}

export class RectangleControl extends React.Component<IRectangleControlProps, IRectangleControlState> {

    constructor (props) {
        super(props);
    }
    
    render () {

        console.log(this);
        // const isComponentDisplay = this.state.display;

        if (false)
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
            </div>
        );
    }
}
