import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Opiniones = ({ placeId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      const url = `/api/maps/api/place/details/json?place_id=${placeId}&key=AIzaSyDaF_pjgarnsf9zIUlfNxtXimjRORD9Rxk`;

      try {
    const response = await axios.get(url);
    const reviewsData = response.data.result.reviews.slice(0, 3); // Limitar a 4 reseñas
    setReviews(reviewsData);
    setLoading(false);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    setLoading(false);
  }
    };

    fetchReviews();
  }, [placeId]);

  if (loading) {
    return <div>Cargando reseñas...</div>;
  }


  const getRatingStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < Math.round(rating)) {
        stars.push(<i key={i} className="fas fa-star text-yellow-500"></i>);
      } else {
        stars.push(<i key={i} className="far fa-star text-yellow-500"></i>);
      }
    }
    return stars;
  };

  return (
    <>
        <section id="testimonials" aria-label="What our customers are saying" className="bg-slate-50 py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-bold text-3xl tracking-tight text-slate-900 sm:text-4xl">Experiencias Compartidas</h2>
          </div>
          <ul role="list" className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3">
          {reviews.length === 0 ? (
            <p>No hay reseñas disponibles.</p>
          ) : (
            reviews.map((review, index) => (
              <li key={index}>
                <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                  <li>
                    <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                      <blockquote className="relative">
                        <p className="text-lg tracking-tight text-slate-900">{review.text}</p>
                      </blockquote>
                      <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                        <div>
                          <div className="font-display text-base text-slate-900">{review.author_name}</div>
                        </div>
                        <div className="text-yellow-500">{getRatingStars(review.rating)}</div>
                      </figcaption>
                    </figure>
                  </li>
                </ul>
              </li>
            ))
          )}
          </ul>
        </div>
      </section>
      
    </>
  );
};

export default Opiniones;