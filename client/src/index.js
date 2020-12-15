import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

//Import boostrap js
import 'bootstrap/dist/js/bootstrap.min.js'
import './style/main.scss'

import App from './js/components/App'

ReactDOM.render(
    <BrowserRouter>
            <App />
    </BrowserRouter>,
    document.getElementById('app')
);