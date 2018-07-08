import React from 'react'
import App from './App'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker'
import configureStore from './store/configureStore'

const store = configureStore()

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'))
registerServiceWorker()
