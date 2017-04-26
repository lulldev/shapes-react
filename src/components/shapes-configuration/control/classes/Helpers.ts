export function ValidateShapeByParams (params: any): boolean {
    if (!params || !params.hasOwnProperty("shapeType")) {
        return false;
    }
    const shapeType = params.shapeType;
    let valid: boolean = false;
    switch (shapeType) {
        case "circle":
            valid =  (params.hasOwnProperty("radius") && !isNaN(params.radius)) &&
                (params.hasOwnProperty("x_coordinate") && !isNaN(params.x_coordinate)) &&
                (params.hasOwnProperty("y_coordinate") && !isNaN(params.y_coordinate));
            break;
        case "rectangle":
            valid = (params.hasOwnProperty("x_coordinate") && !isNaN(params.x_coordinate)) &&
                (params.hasOwnProperty("y_coordinate") && !isNaN(params.y_coordinate)) &&
                (params.hasOwnProperty("width") && !isNaN(params.width)) &&
                (params.hasOwnProperty("height") && !isNaN(params.height));
            break;
        case "triangle":
            valid = (params.hasOwnProperty("x1_coordinate") && !isNaN(params.x1_coordinate)) &&
                (params.hasOwnProperty("y1_coordinate") && !isNaN(params.y1_coordinate)) &&
                (params.hasOwnProperty("x2_coordinate") && !isNaN(params.x2_coordinate)) &&
                (params.hasOwnProperty("y2_coordinate") && !isNaN(params.y2_coordinate)) &&
                (params.hasOwnProperty("x3_coordinate") && !isNaN(params.x3_coordinate)) &&
                (params.hasOwnProperty("y3_coordinate") && !isNaN(params.y3_coordinate));
            break;
        default:
            valid = false;
            break;
    }

    return valid;
}
