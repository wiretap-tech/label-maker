import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'styles/global-styles'
import registerServiceWorker from 'utils/registerServiceWorker'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
