import { Shape } from "./Shape";

export class Rectangle extends Shape {
    constructor(borderColor: string, bgColor: string, private x: number, private y: number,
                private width: number, private height: number) {
        super(borderColor, bgColor);
    }

    public getType (): string {
        return "rectangle";
    }

    public setX(x: number): void {
        this.x = x;
    }

    public getX(): number {
        return this.x;
    }

    public setY(y: number): void {
        this.y = y;
    }

    public getY(): number {
        return this.y;
    }

    public setWidth(width: number) {
        this.width = width;
    }

    public getWidth(): number {
        return this.width;
    }

    public setHeight(height: number): void {
        this.height = height;
    }

    public getHeight(): number {
        return this.height;
    }

    public getArea(): number {
        return this.width * this.height;
    }

    public getPerimeter(): number {
        return 2 * (this.width + this.height);
    }

    public draw (canvasContext: any): void {
        let context = canvasContext.getContext("2d");
        context.clearRect(0, 0, canvasContext.width, canvasContext.height);
        context.beginPath();
        context.fillStyle = this.getBgColor();
        context.lineWidth = 0.5;
        context.strokeStyle = this.getBorderColor();
        context.strokeRect(this.x, this.y, this.width, this.height);
        context.fillRect(this.x, this.y, this.width, this.height);
    }
}
