export function ValidateShapeByParams (params: any): boolean {
    console.log(params);
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
        default:
            valid = false;
            break;
    }

    return valid;
}