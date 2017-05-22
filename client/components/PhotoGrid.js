import React, { Component } from 'react'
import Photo from './Photo'

class PhotoGrid extends Component {

    render() {
        const { posts, comments } = this.props

        return (
            <div className="photo-grid">
                {posts.map((post, i) => <Photo {...this.props} key={i} i={i} post={post}/>)}
            </div>
        )
    }

}

export default PhotoGrid