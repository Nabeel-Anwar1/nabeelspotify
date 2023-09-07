import { useState } from "react"
import { postComment } from "../api"

const AddComment = ({review_id, loggedIn, comments, setComments}) => {
    const [newComment, setNewComment] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        postComment(review_id, loggedIn, newComment).then((data) => {
            setNewComment("")
            setComments([data, ...comments])
        })
    }

    const handleChange = (event) => {
        setNewComment(event.target.value)
    }

    return   <form className="commentForm" onSubmit={handleSubmit}>
    <textarea
      className="commentInput"
      value={newComment}
      placeholder="Write your comment here!"
      onChange={handleChange}
      required
    ></textarea>
    <button type="submit" className="commentButton">
      Post Comment!
    </button>
  </form>
}

export default AddComment