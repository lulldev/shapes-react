/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/index.d.ts" />

import * as React from 'react';
import * as RB from 'react-bootstrap';

export class ColorsControl extends React.Component<any, any> {

    constructor (props) {
        super(props);
    }

    private isDisplayColorsChoose(): boolean {
        return !!this.props.shapeType && (this.props.shapeType !== '');
    }

    render () {
        if (!this.isDisplayColorsChoose())
        {
            return null;
        }

        return (
            <div>
                <RB.FormGroup>
                    <label>Select font color:</label>
                    <RB.FormControl id="shapeFontColor" type="color" placeholder="#ffffff" onChange={this.props.handleChangeColors}></RB.FormControl>
                </RB.FormGroup>
                <RB.FormGroup>
                    <label>Select background color:</label>
                    <RB.FormControl id="shapeBgColor" type="color" placeholder="#ffffff" onChange={this.props.handleChangeColors}></RB.FormControl>
                </RB.FormGroup>
            </div>
        );
    }
}
