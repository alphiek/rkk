import React, { Component } from 'react'
import Swiper from 'react-id-swiper'

class Carousel extends Component {

      render() {
        const params = {
          slidesPerView: 5,
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
          breakpoints: {
            1024: {
              slidesPerView: 4,
              spaceBetween: 40
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
        }

        return (
          <div style={{marginBottom: '3em'}}>
          <Swiper {...params}>
            <div>Slide 1</div>
            <div>Slide 2</div>
            <div>Slide 3</div>
            <div>Slide 4</div>
            <div>Slide 5</div>
          </Swiper>
          </div>
        )
      }
    }


export default Carousel
