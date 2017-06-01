'use strict';

import React from 'react';
import ReactDOM, {render} from 'react-dom';
import App from './App';

if (document) {
	ReactDOM.render(
		<App/>,
		document.getElementById('root')
	);
}