/// <reference path="../../../../typings/tsd.d.ts" />
/// <reference path="../../../../typings/index.d.ts" />

import * as React from "react";
import * as _RB from "react-bootstrap";

export class TypesControl extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div>
                <_RB.FormGroup>
                    <_RB.FormControl id="shape_type" componentClass="select" placeholder="Choose shape type"
                                               onChange={this.props.handleChangeShapeType}>
                        <option value=""></option>
                        <option value="circle">Circle</option>
                        <option value="rectangle">Rectangle</option>
                        <option value="triangle">Triangle</option>
                    </_RB.FormControl>
                </_RB.FormGroup>
            </div>
        );
    }
}
