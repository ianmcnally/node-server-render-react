// React is served as UMD for this demo
// import React from 'react'
// import ReactDOM from 'react-dom'
import App from './app.js'

const props = window.INITIAL_APP_PROPS || {}
delete window.INITIAL_APP_PROPS

ReactDOM.hydrate(
  React.createElement(App, props),
  document.getElementById('root'),
)
