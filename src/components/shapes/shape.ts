/// <reference path="../../../typings/index.d.ts" />

export abstract class Shape {
    // public fillColor;
    // public borderColor;

    constructor(public shapeColorParams: Array<any>) {
        // this.fillColor = "#000";
        // this.borderColor = "#fff";
    }

    // printName(): void {
    //     // console.log("Department name: " + this.name);
    // }

    private ValidateParams(): boolean {
        return true;
    }

    abstract CalculateSides(): Number;
    abstract CalculateArea(): Number;
    abstract CalculatePerimeter(): Number;
    abstract Draw(): void;
}