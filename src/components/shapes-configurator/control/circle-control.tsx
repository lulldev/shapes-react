/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/index.d.ts" />

import * as React from 'react';
import * as RB from 'react-bootstrap';

export interface ICircleControlProps {
}

export interface ICircleControlState {
    display? : boolean
}

export class CircleControl extends React.Component<ICircleControlProps, ICircleControlState> {

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
                    <label>Radius:</label>
                    <RB.FormControl type="number" placeholder="10"></RB.FormControl>
                </RB.FormGroup>
                <RB.FormGroup>
                    <label>X-coord</label>
                    <RB.FormControl type="number" placeholder="50"></RB.FormControl>
                </RB.FormGroup>
                <RB.FormGroup>
                    <label>Y-coord</label>
                    <RB.FormControl type="number" placeholder="20"></RB.FormControl>
                </RB.FormGroup>
            </div>
        );
    }
}
