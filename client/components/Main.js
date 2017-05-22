import React, { Component } from 'react'
import {
  Link
} from 'react-router-dom'
import RouteWithProps from '../extensions/RouteWithProps'
import PhotoGrid from './PhotoGrid'
import PhotoView from './PhotoView'

class Main extends Component {

    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>

                <RouteWithProps exact path="/" component={PhotoGrid} props={this.props}  />
                <RouteWithProps path="/photos/:id" component={PhotoView} props={this.props} />
            </div>
        )
    }

}

export default Main