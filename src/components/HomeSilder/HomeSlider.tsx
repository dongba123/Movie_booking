
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay,Navigation,Pagination } from 'swiper/modules';
import Image from 'next/image';

const width = window.innerWidth;
const height = window.innerHeight;
const HomeSlider = () => {

  const [banners, setbanners] = useState([
    {
      imgUrl: "https://assets-in.bmscdn.com/promotions/cms/creatives/1726036566435_playcardnewweb.jpg"
    },
    {
      imgUrl: "https://assets-in.bmscdn.com/promotions/cms/creatives/1728657132183_trafficweb.jpg"
    }
  ])

  return (
   <Swiper
   loop={true}
   pagination={{
     dynamicBullets: true,
   }}
   autoplay={{
    delay: 6000,
    disableOnInteraction: false,
  }}
   modules={[Autoplay, Pagination, Navigation]}
   className="mySwiper"
   >
      {
        banners.map((banner,index) => {
          return (
            <SwiperSlide key={index}>
              <Image src={banner.imgUrl} alt="" width={width} height={height/2}
              style={{
                objectFit: "cover"
              }}/>
            </SwiperSlide>
          )
        })
      }
  </Swiper>
  )
}

export default HomeSlider