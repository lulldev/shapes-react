/// <reference path="../../../typings/index.d.ts" />

import * as React from 'react';
import {Shape} from './Shape';

export class Circle extends Shape {
    CalculateSides():Number {
        return 1;
    }

    CalculateArea():Number {
        return undefined;
    }

    CalculatePerimeter():Number {
        return undefined;
    }

    Draw():void {
    }

}