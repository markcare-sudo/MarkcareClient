import React, { useEffect, useState } from "react";
import axios from "axios";

const GOOGLE_API_KEY = "YOUR_API_KEY";
const PLACE_ID = "YOUR_PLACE_ID";

export default function GoogleReviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const res = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json`,
          {
            params: {
              place_id: PLACE_ID,
              fields: "name,rating,reviews",
              key: GOOGLE_API_KEY,
            },
          }
        );

        setReviews(res.data.result.reviews || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        What Our Customers Say
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow">
            <div className="font-semibold">{review.author_name}</div>
            <div className="text-yellow-500 mb-2">
              {"⭐".repeat(review.rating)}
            </div>
            <p className="text-sm text-gray-600">
              {review.text.substring(0, 150)}...
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
