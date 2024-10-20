"use client"
import React from 'react'
import { BsShare } from 'react-icons/bs'
import { BsFillStarFill } from 'react-icons/bs';
import './MoviePage.css'
import MovieCarousel from '@/components/MovieCarousel/MovieCarousel';

import 'swiper/css';
import 'swiper/css/pagination';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper/modules';
import CelebCard from '@/components/CelebCard/CelebCard';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


const MoviePage = () => {
  const pathname = usePathname()
 const movie = {
  wideposter: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/martin-et00328827-1677137256.jpg",
  portraitposter:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ni4yLzEwICA3LjdLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00328827-jzdjnxhusf-portrait.jpg",
  title: "Martin",
  rating: 6.5,
  halls:[
   " 2D ",
   " 3D "
  ],
  languages:[
   "Hindi"
  ],
  duration: "2h 15m",
  type: "Action/Thriller/Drama",
  releasedate: "Oct 10, 2024",
  cast: [
   {
    _id: "1",
    name: "Sunny Deoal",
    role: "Actor",
    imageUrl: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/dhruva-sarja-1072800-10-05-2017-15-07-39.jpg"
   },
   {
    _id: "2",
    name: "Sunny Deoal",
    role: "Actor",
    imageUrl: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/dhruva-sarja-1072800-10-05-2017-15-07-39.jpg"
   },
   {
    _id: "3",
    name: "Sunny Deoal",
    role: "Actor",
    imageUrl: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/dhruva-sarja-1072800-10-05-2017-15-07-39.jpg"
   },
   {
    _id: "4",
    name: "Sunny Deoal",
    role: "Actor",
    imageUrl: "https://in.bmscdn.com/iedb/artist/images/website/poster/large/dhruva-sarja-1072800-10-05-2017-15-07-39.jpg"
   },
  ],
  about: "Martin is a pulse pounding edge of the seat action thriller. A character whose dramatic journey takes him to the length and breadth of the country to fight against evil forces lurking to destroy India. But he is also in love with a beautiful lass. His journey is of discovering himself, finding love and fighting for his motherland. Can he hold the fort on all three gates?"
 }
  return (
    <div className='moviepage'>
     <div className='c1' style={{
      backgroundImage: `url(${movie.wideposter})`
     }}>
      <div className='c11'>
       <div className='left'>
        <div className='movie_poster'
          style={{
            backgroundImage:`url(${movie.portraitposter})`
          }}>
          <p>In Cinemas</p>
          </div>
          <div className='movie_details'>
            <p className='title'>
              {movie.title}
            </p>
            <p className='rating'>
              <BsFillStarFill className='star'/>&nbsp;&nbsp;
              {movie.rating}/10
            </p>
            <div className='halls_languages'>
              <p className='halls'>
                  {
                    movie.halls.map((hall, index) => {
                      return(
                        <span key={index}>{hall}</span>
                      )
                    })
                  }
              </p>
              <p className='languages'>
                  {movie.languages.map((language, index) => {
                    return(
                      <span key={index}>{language}</span>
                    )
                  })}
              </p>

            </div>
            <p className='duration_type_releasedat'>
              <span className='duration'>
                {movie.duration}
              </span>
              <span>•</span>
              <span className='type'>
                {movie.type}
              </span>
              <span>•</span>
              <span className='releasedat'>
                {movie.releasedate}
              </span>
            </p>
            <Link 
            href={`${pathname}/buytickets`} 
            className='linkstylenone'
            >
              <button className='bookbtn'>Book Tickets</button>
            </Link>
            
          </div>
       </div>
       <div className='right'>
        <button className='sharebtn'><BsShare className="shareiocn"/>Share</button>
       </div>
      </div>
      </div>
     
     <div className='c2'>
      <h1>About the Movie</h1>
      <p> {movie.about}</p>
      <div className='line'></div>
      <h1 >Cast</h1>
      <div className='circlecardslider'>
        <Swiper
            slidesPerView={1}
            spaceBetween={1}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              '@0.00':{
                slidesPerView: 1,
                spaceBetween: 2,
              },
              '@0.75':{
                slidesPerView: 2,
                spaceBetween: 2,
              },
              '@1.00':{
                slidesPerView: 3,
                spaceBetween: 2,
              },
              '@1.50':{
                slidesPerView: 6,
                spaceBetween: 2,
              },
            }}
            modules={[Pagination]}
            className='mySwiper'
            >
              {
                movie.cast.map((cast,index) => {
                  return(
                    <SwiperSlide key={index}>
                      <CelebCard {...cast}/>
                    </SwiperSlide>
                  )
                })
              }
              </Swiper>
      </div>
      <div className='line'></div>
      <h1> You might also like</h1>
      
      <MovieCarousel/>
     </div>
    </div>
  )
}

export default MoviePage