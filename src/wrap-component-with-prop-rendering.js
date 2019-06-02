// React is served as UMD for this demo
// import React from 'react'

export function wrapComponentWithPropRendering(AnyComponent, getInitialProps) {
  function WrappedComponent(props) {
    const [initialProps, setInitialProps] = React.useState()

    React.useEffect(() => {
      getInitialProps().then(data => {
        setInitialProps(data)
      })
    }, [])

    return React.createElement(AnyComponent, { ...props, ...initialProps })
  }

  WrappedComponent.Component = AnyComponent
  WrappedComponent.getInitialProps = getInitialProps

  return WrappedComponent
}
