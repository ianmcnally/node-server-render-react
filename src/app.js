// React is served as UMD for this demo
// import React from 'react'
import { wrapComponentWithPropRendering } from './wrap-component-with-prop-rendering.js'

export function App(props) {
  const { repos = [] } = props

  return React.createElement('p', {
    children: repos.length ? repos[0].name : 'no name',
  })
}

function fetchRepos() {
  return fetch('https://api.github.com/users/ianmcnally/repos').then(r =>
    r.json(),
  )
}

function getInitialProps() {
  return fetchRepos().then(mapResponseToProps)
}

function mapResponseToProps(response) {
  return { repos: response }
}

export default wrapComponentWithPropRendering(App, getInitialProps)
