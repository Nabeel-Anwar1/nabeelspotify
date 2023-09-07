import { deleteComment } from "../api"

const DeleteComment = ({loggedIn, comment, setComments, comments}) => {

    const handleDelete = () => {
        return deleteComment(comment.comment_id).then((err)=>{
            if (err.message){
                alert(err.message + " - Comment Was Not Deleted - Try Again")
            }else {
            const newComments = comments.filter((data) => 
                data.comment_id !== comment.comment_id
            )
            setComments(newComments)
            }
        })
    }

    return <div>{loggedIn === comment.author ? <button onClick={() => {handleDelete()}} className="deleteComment">Delete Comment</button> : <></>}
        </div>
}

export default DeleteComment