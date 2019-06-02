import React from 'react'
import ReactDomServer from 'react-dom/server.js'
import express from 'express'
import path from 'path'
import App from './src/app.js'
import fetch from 'node-fetch'
const app = express()

global.React = React // since React is served UMD on the client
global.fetch = fetch // polyfill so we can run browser code

app.get('/static/:path', function(request, response) {
  const filePath = path.resolve('./src/', request.params.path)
  response.sendFile(filePath)
})

app.get('*', async function(request, response) {
  const props = await App.getInitialProps()
  const element = ReactDomServer.renderToString(React.createElement(App.Component, props))
  response.send(
    `
      <html lang="en">
        <head>
          <title>Node React rendering</title>
          <script crossorigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
          <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
          <script>window.INITIAL_APP_PROPS = ${JSON.stringify(props)}</script>
          <script type="module" src="/static/index.js"></script>
        </head>
        <body>
          <div id="root">
            ${element}
          </div>
        </body>
      </html>
    `
  )
})

const listener = app.listen('3000', () => {
  console.log('Your app is listening on port ' + listener.address().port)
})

