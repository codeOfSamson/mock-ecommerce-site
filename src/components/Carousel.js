// Carousel.js
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'; 

const Carousel = () => {
  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 300 }}
        className="w-full h-[80vh] md:h-[90vh]"
      >
        <SwiperSlide>
          <div className="w-full h-full bg-cover bg-center" >
                <img src={`/images/00462-845072954.png`} />
              </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="w-full h-full bg-cover bg-center" >
                <img src={`/images/00467-845072959.png`} />
              </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(/public/images/00467-845072959.png)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </SwiperSlide> */}
        {/* <SwiperSlide>
          <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: 'url(/assets/image3.jpg)' }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Carousel;
