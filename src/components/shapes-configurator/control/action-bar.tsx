/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/index.d.ts" />

import * as React from 'react';
import * as RB from 'react-bootstrap';

export interface IActionBarProps {
}

export interface IActionBarState {
    display?: boolean;
}

export class ActionBar extends React.Component<IActionBarProps, IActionBarState> {
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
                <RB.Button bsStyle="success">Draw shape!</RB.Button>&nbsp;
                <RB.Button bsStyle="default">Reset form</RB.Button>
            </div>
        );
    }
}
