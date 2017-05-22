import React, { Component } from 'react'
import Photo from './Photo'
import Comments from './Comments'

class PhotoView extends Component {

    render() {
        const { posts, comments, match } = this.props
        const i = posts.findIndex(post => post.code === match.params.id)
        const post = posts[i]
        const postComments = comments[match.params.id] || []

        return (
            <div className="single-photo">
                <Photo {...this.props} i={i} post={post} />
                <Comments {...this.props} comments={postComments} postId={match.params.id} />
            </div>
        )
    }

}

export default PhotoView