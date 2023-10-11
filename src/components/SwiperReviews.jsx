import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const SwiperReviews = ({ reviews }) => {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
    >
      {reviews.map((review, index) => (
        <SwiperSlide key={index}>
          <div className="swiper-review">
            <p className="swiper-review-text">{review.text}</p>
            <div className="swiper-review-author">
              <img src={review.image} alt={`Review by ${review.name}`} />
              <div className="swiper-review-info">
                <h3>{review.name}</h3>
                <p>{review.position}</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperReviews;
