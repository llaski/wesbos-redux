import React from 'react'
import {
    Route
} from 'react-router-dom'

function RouteWithProps({
    props,
    component: Component,
    ...rest
}) {
    return <Route {...rest} render={(matchProps) => <Component {...props} {...matchProps} />
}
/>
}

export default RouteWithProps