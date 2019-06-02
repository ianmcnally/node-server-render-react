An example of how to server render React components

The main inspirations were Next.js and Axios Hook's caching mechanism. Similar to Next's `getInitialProps`, I used a higher order component (HOC), to create a component that can be rendered on both client and server, with no direct knowledge of it needed by the component developer.

The server is run with `yarn start` (or npm), and that renders the App component in app.js and serves up `src/index.js` as the client side entry point for hydration.

This is a build out of an initial sketch [here](https://gist.github.com/ianmcnally/291e50b88a861e7da28c8ae3bb538c51).
