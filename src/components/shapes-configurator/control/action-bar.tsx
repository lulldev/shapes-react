/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/index.d.ts" />

import * as React from 'react';
import * as RB from 'react-bootstrap';

export class ActionBar extends React.Component<any, any> {

    constructor (props) {
        super(props);
    }

    private isActivateFormControl () : boolean {
        return (this.props.shapeType !== '') &&
            (!!this.props.shapeParams);
    }

    render () {

        if (!this.isActivateFormControl()) {
            return null;
        }
        
        return (
            <div>
                <RB.Button bsStyle="success">Draw shape!</RB.Button>&nbsp;
                <RB.Button bsStyle="default">Reset form</RB.Button>
            </div>
        );
    }
}
