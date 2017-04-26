export interface IShape {
    setBorderColor(borderColor: string): void;
    getBorderColor(): string;
    setBgColor(bgColor: string): void;
    getBgColor(): string;
    getArea(): number;
    getPerimeter(): number;
    draw(canvasContext: any): void;
}
