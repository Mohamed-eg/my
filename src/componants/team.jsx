import React from "react";
import "../styles/team.css";
import { Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import member1 from "../img/avatar-1.png";
import member2 from "../img/avatar-2.png";
import member3 from "../img/avatar-3.png";
import member4 from "../img/avatar-4.png";

export default function Team() {
  return (
    <div className="TeamSec">
      <div>
        <Swiper
          // install Swiper modules
          modules={[Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}>
          <SwiperSlide>
            <div className="slidcountaner">
              <div className="slideImg">
                <img src={member1} alt="team member" />
              </div>
              <div>
                <h4 className="" data-testimonials-title>
                  Daniel lewis
                </h4>

                <div className="sliderText" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slidcountaner">
              <div className="slideImg">
                <img src={member2} alt="team member" />
              </div>
              <div>
                <h4 className="" data-testimonials-title>
                  Jessica miller
                </h4>

                <div className="sliderText" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slidcountaner">
              <div className="slideImg">
                <img src={member3} alt="team member" />
              </div>
              <div>
                <h4 className="" data-testimonials-title>
                  Emily evans
                </h4>

                <div className="sliderText" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="slidcountaner">
              <div className="slideImg">
                <img src={member4} alt="team member" />
              </div>
              <div>
                <h4 className="" data-testimonials-title>
                  Henry william
                </h4>

                <div className="sliderText" data-testimonials-text>
                  <p>
                    Richard was hired to create a corporate identity. We were
                    very pleased with the work done. She has a lot of experience
                    and is very concerned about the needs of client. Lorem ipsum
                    dolor sit amet, ullamcous cididt consectetur adipiscing
                    elit, seds do et eiusmod tempor incididunt ut laborels
                    dolore magnarels alia.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          ...
        </Swiper>
      </div>
    </div>
  );
}
