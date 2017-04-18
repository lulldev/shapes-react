/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/index.d.ts" />

import * as React from 'react';
import * as RB from 'react-bootstrap';

export class RectangleControl extends React.Component<any, any> {

    constructor (props) {
        super(props);
    }

    private isActivateFormControl() : boolean {
        return (!!this.props.shapeType) && (this.props.shapeType === 'rectangle');
    }
    
    render () {

        if (!this.isActivateFormControl())
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
