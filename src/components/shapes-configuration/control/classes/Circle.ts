import { Shape } from "./Shape";

export class Circle extends Shape {
    constructor(borderColor: string, bgColor: string, private x: number, private y: number, private radius: number) {
        super(borderColor, bgColor);
    }
    public getType (): string {
        return "circle";
    }
    public setX (x: number): void {
        this.x = x;
    }

    public getX (): number {
        return this.x;
    }

    public setY (y: number): void {
        this.y = y;
    }

    public getY(): number {
        return this.y;
    }

    public setRadius (radius: number): void {
        this.radius = radius;
    }

    public getRadius (): number {
        return this.radius;
    }

    public getArea (): number {
        return parseFloat((Math.PI * this.radius * this.radius).toFixed(2));
    }

    public getPerimeter (): number {
        return parseFloat((2 * Math.PI * this.radius).toFixed(2));
    }

    public draw (canvasContext: any): void {
        let context = canvasContext.getContext("2d");
        context.clearRect(0, 0, canvasContext.width, canvasContext.height);
        context.beginPath();
        context.arc(this.getX(), this.getY(), this.radius, 0, 2 * Math.PI, false);
        context.fillStyle = this.getBgColor();
        context.fill();
        context.lineWidth = 0.5;
        context.strokeStyle = this.getBorderColor();
        context.stroke();
    }
}
