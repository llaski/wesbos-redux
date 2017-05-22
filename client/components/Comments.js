import React, { Component } from 'react'

class Comments extends Component {

    renderComment(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.postId, i)}>&times;</button>
                </p>
            </div>
        )
    }

    render() {
        const { comments } = this.props

        return (
            <div className="comments">
                {comments.map(this.renderComment.bind(this))}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="author" placeholder="author"/>
                    <input type="text" ref="comment" placeholder="comment"/>
                    <input type="submit" hidden />
                </form>
            </div>
        )
    }

    handleSubmit(evt) {
        evt.preventDefault()

        this.props.addComment(
            this.props.postId,
            this.refs.author.value,
            this.refs.comment.value
        )

        this.refs.commentForm.reset()
    }

}

export default Comments