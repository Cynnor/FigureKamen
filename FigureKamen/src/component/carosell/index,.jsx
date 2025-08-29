import "./index.scss";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Swiper, SwiperSlide } from "swiper/react";

function Carosell() {
  return (
    <Swiper
      pagination={{ clickable: true }}
      modules={[Pagination, Autoplay, EffectFade]}
      autoplay={{ delay: 3500, disableOnInteraction: false }}
      effect="fade"
      speed={1200}
      className="Carosell"
    >
      <SwiperSlide>
        <img src="/heisei-full/1.Kyuga/box.jpg" alt="box" className="kyuga" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/heisei-full/2.Agito/box.jpg" alt="box" className="agito" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/heisei-full/3.Ryuki/box.jpg" alt="box" className="ryuki" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/heisei-full/4.Faiz/box.jpg" alt="box" className="faiz" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/heisei-full/5.Blade/box.jpg" alt="box" className="blade" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/heisei-full/6.Hibiki/box.jpg" alt="box" className="hibiki" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/heisei-full/7.Kabuto/box.jpg" alt="box" className="kabuto" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/heisei-full/8.Deno/box.jpg" alt="box" className="deno" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/heisei-full/9.Kiva/box.jpg" alt="box" className="kiva" />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="/heisei-full/10.Decade/box.jpg"
          alt="box"
          className="decade"
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Carosell;
