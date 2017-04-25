import {IShape} from "./IShape";

export abstract class Shape implements IShape {
    constructor(protected borderColor: string, protected bgColor: string) {}

    public setBorderColor(borderColor: string): void {
        this.borderColor = borderColor;
    }

    public getBorderColor(): string {
        return this.borderColor;
    }

    public setBgColor(BgColor: string): void {
        this.bgColor = BgColor;
    }

    public getBgColor(): string {
        return this.bgColor;
    }

    public abstract getArea(): number;
    public abstract getPerimeter(): number;
    public abstract draw(): void;
    public abstract getType(): string;
}
