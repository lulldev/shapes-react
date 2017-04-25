/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/index.d.ts" />

import * as React from "react";
import * as _RB from "react-bootstrap";

export class ActionBar extends React.Component<any, any> {

    constructor (props) {
        super(props);
    }

    public render () {
        if (!this.isActivateFormControl()) {
            return null;
        }
        return (
            <div>
                <_RB.Button bsStyle="success">Draw shape!</_RB.Button>&nbsp;
                <_RB.Button bsStyle="default">Reset form</_RB.Button>
            </div>
        );
    }

    private isActivateFormControl (): boolean {
        return (this.props.shapeType !== "") &&
            (!!this.props.shapeParams);
    }
}
