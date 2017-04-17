/// <reference path="../typings/tsd.d.ts" />

import * as ReactDOM from 'react-dom';

import {ShapesApp} from './components/shapes-configurator/application';

ReactDOM.render(
    <ShapesApp />,
    document.getElementById('app')
);