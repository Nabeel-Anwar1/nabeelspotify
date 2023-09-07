import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { fetchSingleReview } from "../api"
import Votes from "./Votes"
import Comments from "./Comments"

const ReviewPage = (props) => {
    const { loggedIn } = props
    const [review, setReview] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const {review_id} = useParams()

    useEffect(() => {
        setIsLoading(true)
        fetchSingleReview(review_id).then((data)=>{
            setReview(data)
            setIsLoading(false)
        })
    }, [review_id])

    return isLoading ?  <h3 className="load">Loading...</h3> :
    <section className="singleReviewPage">
        <h2>Review for: {review.title}</h2>
        <img src={`${review.review_img_url}`} alt={`${review.title}`} className="reviewImg"></img>
        <p className="reviewBody">{review.review_body}</p>
        <p>Written By: {review.owner}</p>
        <p>Created: {new Date(review.created_at).toLocaleDateString('en-gb',
                        {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }
                    )} </p>
        Votes: <Votes review_id={review.review_id} votes={review.votes} />
        <p>Comments: {review.comment_count} </p>
        <Comments review_id={review.review_id} loggedIn={loggedIn} />
    </section>
}

export default ReviewPage