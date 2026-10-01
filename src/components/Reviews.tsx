import { Carousel } from "antd";
import React, { useEffect, useState } from "react";
import '../css/carousel.css'

type review = {
    name: string,
    location: string,
    text: string
}

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        const fetchReviews = async () => {
            const prom = await fetch("/reviews.json").then(x => {return x.json()})

            setReviews(prom.reviews)
        }
        fetchReviews()
    })
    const displayReviews = () => {
        const formattedReviews = reviews.map((index: review) => {
            return <div className="review">
                <p>{index.text}</p>
                {index.name} / {index.location}
            </div>
        })
        return <Carousel arrows={true}>{formattedReviews}</Carousel>
    }

    return <div>
        <img src="/Lundys-green.png" alt="Lundys-green.png"/>
        <h1>You're In Good Company</h1>
        <div className="row">
            <div className="col-6 carousel">
                {displayReviews()}
            </div>
            <img src="/homepage.png" alt="homepage.png" className="col-6 funpic" />
        </div>
    </div>;
};

export default Reviews;