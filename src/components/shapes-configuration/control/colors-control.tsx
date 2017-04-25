/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/index.d.ts" />

import * as React from "react";
import * as _RB from "react-bootstrap";

export class ColorsControl extends React.Component<any, any> {

    constructor (props) {
        super(props);
    }

    public render () {
        if (!this.isDisplayColorsChoose()) {
            return null;
        }
        return (
            <div>
                <_RB.FormGroup>
                    <label>Select font color:</label>
                    <_RB.FormControl id="shapeFontColor" type="color" placeholder="#ffffff"
                                    onChange={this.props.handleChangeColors}></_RB.FormControl>
                </_RB.FormGroup>
                <_RB.FormGroup>
                    <label>Select background color:</label>
                    <_RB.FormControl id="shapeBgColor" type="color" placeholder="#ffffff"
                                    onChange={this.props.handleChangeColors}></_RB.FormControl>
                </_RB.FormGroup>
            </div>
        );
    }

    private isDisplayColorsChoose (): boolean {
        return !!this.props.shapeType && (this.props.shapeType !== "");
    }
}
