import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const BookCards = ({ books, headline }) => {
  return (
    <div>
      <h2>{headline}</h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full"
        >
          {books.map((item) => {
            return (
              <SwiperSlide key={item._id}>
                <Link to={`/book/${item._id}`}>
                  {console.log({ item })}

                  <div>
                    <img src={item.imageURL} alt="" />
                  </div>

                  <div>
                    <div>
                      <h3>{item.bookTitle}</h3>
                      <h3>{item.authorName}</h3>
                    </div>
                    <div>
                      <p>$10</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;
