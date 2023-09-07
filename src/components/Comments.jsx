import { useEffect, useState } from "react"
import { fetchComments } from "../api"
import AddComment from "./AddComment"
import DeleteComment from "./DeleteComment"

const Comments = ({review_id, loggedIn}) => {
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetchComments(review_id).then((data)=>{
           setComments(data)
        })
    },[review_id])

return <section className="commentsContainer">
    <AddComment review_id={review_id} loggedIn={loggedIn} comments={comments} setComments={setComments}/> 
    <ul className="commentsList">
    {comments.length === 0 ? <h3>No comments!</h3> : comments.map((comment)=>{
            return <li className="singleComment" key={`${comment.comment_id}`}>
                <p className="commentBody">{comment.body}</p>
                <p className="commentText">
                    User: {comment.author} <br /> <br />
                    Posted: {new Date(comment.created_at).toLocaleDateString('en-gb',
                        {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }
                    )}
                </p>
                <DeleteComment loggedIn={loggedIn} comment={comment} setComments={setComments} comments={comments}/>
            </li>
        })}
    </ul>
     </section>
}



export default Comments 