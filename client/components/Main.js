import React, { Component } from 'react'
import {
  Route,
  Link
} from 'react-router-dom'
import PhotoGrid from './PhotoGrid'
import PhotoView from './PhotoView'

class Main extends Component {

    render() {
        return (
            <div>
                <h1>
                    <Link to="/">Reduxstagram</Link>
                </h1>

                <Route exact path="/" component={PhotoGrid} />
                <Route path="/photos/:id" component={PhotoView} />
            </div>
        )
    }

}

export default Main