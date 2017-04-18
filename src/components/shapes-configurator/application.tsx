/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../../typings/index.d.ts" />

import * as React from 'react';
import {Col, Row} from 'react-bootstrap';

import {CanvasArea} from './canvas/canvas-area';
import {ColorsControl} from './control/colors-control';
import {TypesControl} from './control/types-control';
import {CircleControl} from './control/circle-control';
import {RectangleControl} from './control/rectangle-control';
import {TriangleControl} from './control/triangle-control';
import {ActionBar} from './control/action-bar';

export class ShapesApp extends React.Component<any, any> {

    private shapeType: string;

    constructor(props: any) {
        super(props);
        this.handleChangeShapeType = this.handleChangeShapeType.bind(this);
        this.handleFormParams = this.handleFormParams.bind(this);
    }

    public handleChangeShapeType(event:any):void {
        event.preventDefault();
        this.setState({
            shapeType : event.target.value
        });
        this.props.shapeType = event.target.value;
    }

    public handleFormParams(event:any):void {
        event.preventDefault();
        const state = {};
        state[event.target.id] = event.target.value;
        this.setState(state);
    }
    
    render () {
        return (
            <Row>
                <Col lg={12}>
                    <h3>LW4 - Shape drawing with React+Typescript! by Kalagin Ivan (PS-22)</h3>
                </Col>
                <Col lg={8}>
                    <CanvasArea/>
                </Col>
                <Col lg={4}>
                    <form>
                        <label>Draw configurator:</label>
                        <TypesControl handleChangeShapeType={this.handleChangeShapeType}/>
                        <ColorsControl shapeType={this.props.shapeType} handleChangeColors={this.handleFormParams}/>
                        <CircleControl shapeType={this.props.shapeType} handleShapeParams={this.handleFormParams}/>
                        <RectangleControl shapeType={this.props.shapeType} handleShapeParams={this.handleFormParams}/>
                        <TriangleControl shapeType={this.props.shapeType} handleShapeParams={this.handleFormParams}/>
                        <ActionBar shapeParams={this.state}/>
                    </form>
                </Col>
            </Row>
        );
    }
}