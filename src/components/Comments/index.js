import {Component} from 'react'
import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {commentInput: '', textInput: '', commentList: []}

  onchangeComment = e => {
    this.setState({commentInput: e.target.value})
  }

  onchangeText = e => {
    this.setState({textInput: e.target.value})
  }

  AddComment = event => {
    event.preventDefault()
    const {commentInput, textInput} = this.state
    const newComment = {
      id: v4(),
      comment: commentInput,
      text: textInput,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      commentInput: '',
      textInput: '',
    }))
  }

  onDeleteComment = id => {
    const {commentList} = this.state
    const filteredId = commentList.filter(each => each.id !== id)
    this.setState({commentList: filteredId})
  }

  render() {
    const {commentInput, textInput, commentList} = this.state
    return (
      <div className="CommentContainer">
        <div className="bgContainer">
          <div className="container">
            <h1>Comments</h1>
            <form onSubmit={this.AddComment}>
              <p>Say something about the 4.0 Technologies</p>
              <input
                value={commentInput}
                onChange={this.onchangeComment}
                className="inputStl"
                type="text"
                placeholder="Your Name"
              />
              <br />
              <br />
              <textarea
                value={textInput}
                onChange={this.onchangeText}
                className="textStl"
                rows="6"
                cols="50"
                placeholder="Your Comments"
              />
              <br />
              <br />
              <button type="submit" className="addCommentButton">
                Add Comment
              </button>
            </form>
          </div>
          <div className="imgComment">
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
        </div>
        <hr className="horizontalLine" />
        <ul className="unOrdered">
          {commentList.map(each => (
            <CommentItem
              commentDetails={each}
              key={each.id}
              onDeleteComment={this.onDeleteComment}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
