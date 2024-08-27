import React, { useState, useEffect } from 'react';


const Opiniones = () => {

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
                  <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                    <li>
                      <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                        <blockquote className="relative">
                          <p className="text-lg tracking-tight text-slate-900">Excelente. No encuentro otra palabra para describirlo.</p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                          <div>
                            <div className="font-display text-base text-slate-900">Edith Francisca Figueroa</div>
                          </div>
                          <div className="text-yellow-500">{getRatingStars(5)}</div>
                        </figcaption>
                      </figure>
                    </li>
                  </ul>
                  <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                    <li>
                      <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                        <blockquote className="relative">
                          <p className="text-lg tracking-tight text-slate-900">Hermoso,lugar muy bien cuidado,para disfrutarlo a full</p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                          <div>
                            <div className="font-display text-base text-slate-900">Monica Irigoyen</div>
                          </div>
                          <div className="text-yellow-500">{getRatingStars(4)}</div>
                        </figcaption>
                      </figure>
                    </li>
                  </ul>
                  <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                    <li>
                      <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                        <blockquote className="relative">
                          <p className="text-lg tracking-tight text-slate-900">Excelente experiencia, gente de primera y lugar hermoso</p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                          <div>
                            <div className="font-display text-base text-slate-900">Guillermo Pedersen</div>
                          </div>
                          <div className="text-yellow-500">{getRatingStars(5)}</div>
                        </figcaption>
                      </figure>
                    </li>
                  </ul>
            </ul>
          </div>
        </section>
        
    </>
  );
};

export default Opiniones;

