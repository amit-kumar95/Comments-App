import './index.css'

const CommentItem = props => {
  const {commentDetails, onDeleteComment} = props
  const {id, comment, text} = commentDetails

  const onClickDelete = () => {
    onDeleteComment(id)
  }

  return (
    <li className="listStl">
      <h1>{comment}</h1>
      <p>{text}</p>
      <div className="buttonLikeCont">
        <button type="button" className="btnDelete">
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
            alt="like"
          />
          Like
        </button>
        <button className="btnDelete" type="button" onClick={onClickDelete}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
