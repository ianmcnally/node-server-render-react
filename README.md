An example of how to server render React components

The main inspirations were Next.js and Axios Hook's caching mechanism. Similar to Next's `getInitialProps`, I used a higher order component (HOC), to create a component that can be rendered on both client and server, with no direct knowledge of it needed by the component developer.

The server is run with `yarn start` (or npm), and that renders the App component in app.js and serves up `src/index.js` as the client side entry point for hydration.

This is a build out of an initial sketch [here](https://gist.github.com/ianmcnally/291e50b88a861e7da28c8ae3bb538c51).

## Research

### Gatsby

- https://github.com/gatsbyjs/gatsby/blob/c51440ed681893345e54db40b23ad057e90e1eac/docs/docs/html-generation.md
- https://github.com/gatsbyjs/gatsby/blob/077a9c8e8657575a800ddf74994f80b2fcc6f62c/packages/gatsby/cache-dir/develop-static-entry.js

### Next

- https://github.com/zeit/next.js/blob/canary/packages/next-server/server/render.tsx#L242

#### Get initial props

- https://nextjs.org/learn/basics/fetching-data-for-pages/fetching-batman-shows

### Razzle

- https://github.com/jaredpalmer/razzle

### Babel example node server

- https://github.com/babel/example-node-server

### Ajax request completion via axios hooks

- https://github.com/simoneb/axios-hooks/#server-side-rendering

### Typescript and node

- https://github.com/microsoft/TypeScript-Node-Starter/blob/master/package.json
