import * as React from 'react';
import * as ReactDOM from 'react-dom';

require('./styles.css')
import App from './app';

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)