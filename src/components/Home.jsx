import {Link} from "react-router-dom"
import { useEffect, useState } from "react"
import { fetchReviews } from "../api"

const Home = () => {
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const sortBy = "votes"
    const category = "all"
    const orderBy = "desc"

    useEffect(()=>{
        setIsLoading(true)
        fetchReviews(category, sortBy, orderBy).then((review) => {
            setReviews(review)
            setIsLoading(false)
        })
    }, [])

    return (
        isLoading ? 
        <div>
            <h3 className="load">Loading...</h3>
        </div>
        :
    <div>
        <p className="feature">Featured Reviews!</p>
        <section>
        <ul className="reviewsList">
            {reviews.slice(0,3).map((review) => {
            return <div key={review.review_id} className="individualReview">
                {<Link to={`/reviews/${review.review_id}` }><li className="list-items">
                    <b><u>Review By: {review.owner} </u></b> <br />
                    <b><u>Title:</u></b> {review.title}    <br />
                    <b><u>Category:</u></b> {review.category} <br />
                    <b><u>Comments:</u></b> {review.comment_count}  <br />
                    <b><u>Votes:</u></b> {review.votes} <br />
                    {new Date(review.created_at).toLocaleDateString('en-gb',
                        {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        }
                    )}
                </li></Link>}
            </div>
            })}
        </ul>
    </section>
    <Link to="/reviews"><u><p className="reviewhome">Have a look at all the reviews here!</p></u></Link>
    </div>
    )
}

export default Home