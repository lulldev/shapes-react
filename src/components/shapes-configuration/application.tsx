/// <reference path="../../../typings/tsd.d.ts" />
/// <reference path="../../../typings/index.d.ts" />

import * as React from "react";
import {Col, Row} from "react-bootstrap";

import {CanvasArea} from "./canvas/canvas-area";
import {ColorsControl} from "./control/colors-control";
import {TypesControl} from "./control/types-control";
import {CircleControl} from "./control/circle-control";
import {RectangleControl} from "./control/rectangle-control";
import {TriangleControl} from "./control/triangle-control";
import {ActionBar} from "./control/action-bar";

import {ValidateShapeByParams} from "./control/classes/Helpers";

export class ShapesApp extends React.Component<any, any> {

    constructor (props: any) {
        super(props);
        this.handleChangeShapeType = this.handleChangeShapeType.bind(this);
        this.handleFormParams = this.handleFormParams.bind(this);
        this.drawShape = this.drawShape.bind(this);
    }

    public handleChangeShapeType (event: any): void {
        event.preventDefault();
        this.setState({
            actionDraw: false,
            shapeBgColor: "#ffffff",
            shapeBorderColor: "#000000",
            shapeType : event.target.value,
        });
        this.props.shapeType = event.target.value;
    }

    public handleFormParams (event: any): void {
        event.preventDefault();
        const state = {};
        state[event.target.id] = event.target.value;
        this.setState(state);
        this.setState({
            actionDraw: false,
        });
    }

    public drawShape (event: any): void {
        event.preventDefault();
        console.log(ValidateShapeByParams(this.state));
        if (ValidateShapeByParams(this.state)) {
            this.setState({
                actionDraw: true,
            });
        }
    }

    public render () {
        return (
            <Row>
                <Col lg={12}>
                    <h3>LW4 - Shape drawing with React+Typescript!</h3>
                </Col>
                <Col lg={8}>
                    <CanvasArea shapeParams={this.state}/>
                </Col>
                <Col lg={4}>
                    <form>
                        <label>Draw configuration:</label>
                        <TypesControl handleChangeShapeType={this.handleChangeShapeType}/>
                        <ColorsControl shapeType={this.props.shapeType} handleChangeColors={this.handleFormParams}/>
                        <CircleControl shapeType={this.props.shapeType} handleShapeParams={this.handleFormParams}/>
                        <RectangleControl shapeType={this.props.shapeType} handleShapeParams={this.handleFormParams}/>
                        <TriangleControl shapeType={this.props.shapeType} handleShapeParams={this.handleFormParams}/>
                        <ActionBar shapeParams={this.state} drawAction={this.drawShape}/>
                    </form>
                </Col>
            </Row>
        );
    }
}
