import { useEffect, useState } from "react"
import { fetchReviews } from "../api"
import { Link, useSearchParams } from "react-router-dom";

const Reviews = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [reviews, setReviews] = useState([])
    const [sortBy, setSortBy] = useState("created_at")
    const [orderBy, setOrderBy] = useState("desc")
    const [category, setCategory] = useState("all")
    const [searchParams, setSearchParams] = useSearchParams({
        sort_by: "",
        order: "",
    })

    useEffect(()=>{
        setIsLoading(true)
        fetchReviews(category, sortBy, orderBy).then((review) => {
            setReviews(review)
            setIsLoading(false)
        })
    }, [category, orderBy, sortBy])

    const handleClick = (cat) => {
        setCategory(cat)
    }

    const handleDropdown = (event) => {
        setSortBy(event.target.value)
        setSearchParams({sort_by: event.target.value, order: orderBy})
    }

    const handleOrder = (event) => {
        if (event.target.value === "asc"){
            setOrderBy("asc")
            setSearchParams({sort_by: sortBy, order: "asc"})
        }
        else {
            setOrderBy("desc")
            setSearchParams({sort_by: sortBy, order: "desc"})
        }
    }

    if (isLoading) return <h3 className="load">Loading...</h3>
    return <div className="reviewContent">
        <section className="categoryNav">
            <ul className="categoryList">
            Choose A Category: <br />
                <Link to="/"><li><button className="catButton" value="all" onClick={(event) => {handleClick(event.target.value)}}>All</button></li></Link>
                <Link to="/reviews/category/hidden-roles"><li><button className="catButton" value="hidden-roles" onClick={(event) => {handleClick(event.target.value)}}>Hidden Roles</button></li></Link>
                <Link to="/reviews/category/dexterity"><li><button className="catButton" value="dexterity" onClick={(event) => {handleClick(event.target.value)}}>Dexterity</button></li></Link>
                <Link to="/reviews/category/push-your-luck"><li><button className="catButton" value="push-your-luck" onClick={(event) => {handleClick(event.target.value)}}>Push Your Luck</button></li></Link>
                <Link to="/reviews/category/roll-and-write"><li><button className="catButton" value="roll-and-write" onClick={(event) => {handleClick(event.target.value)}}>Roll and Write</button></li></Link>
                <Link to="/reviews/category/deck-building"><li><button className="catButton" value="deck-building" onClick={(event) => {handleClick(event.target.value)}}>Deck Building</button></li></Link>
                <Link to="/reviews/category/engine-building"><li><button className="catButton" value="engine-building" onClick={(event) => {handleClick(event.target.value)}}>Engine Building</button></li></Link>
            </ul>
        </section>
        <p className="sortText">Sort By:</p>
        <section className="sortBy">
        <button className="orderBy" value="asc" onClick={handleOrder}>Ascending</button>
            <select className="sortDropdown" value={sortBy} onChange={handleDropdown}>
                <option value="created_at">Date</option>
                <option value="comment_count">Comment Count</option>
                <option value="votes">Votes</option>
            </select>
            <button className="orderBy" value="desc" onClick={handleOrder}>Descending</button>
        </section>
    <section>
        <ul className="reviewsList">
            {reviews.map((review) => {
            return <div key={review.review_id} className="individualReview">
                {<Link to={`/reviews/${review.review_id}` }><li className="list-items">
        <img src={`${review.review_img_url}`} alt={`${review.title}`} className="reviewImgs"></img><br/>
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
    </div>
}

export default Reviews