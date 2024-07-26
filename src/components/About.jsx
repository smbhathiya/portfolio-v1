import React from 'react'
import {assets} from '../assets/assets'

const About = () => {
  return (
    <>
    <div className="min-h-[550px] sm:min-h-[600px] bg-brandDark flex justify-center items-center text-white">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* image section */}
          <div
              data-aos="zoom-in"
              data-aos-duration="300"
              className="min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 "
            >
              <img
                data-aos-once="true"
                src={assets.profile_img}
                alt="profile_img"
                className="w-[200px] sm:w-[400px] sm:scale-100 mx-auto rounded-full hover:scale-110 duration-200"
              />
              </div>
          {/* text section */}
          <div className="flex flex-col justify-center gap-6 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              className="text-2xl sm:text-3xl lg:text-3xl font-cursive"
            >
              Welcome to My Profile.<br/> I'm {" "}
              <span
                data-aos="zoom-out"
                data-aos-delay="300"
                class="bg-clip-text text-transparent bg-gradient-to-b from-light to-light/90 font-sans font-bold"
              >
                Bhathiya Lakshan,
              </span>{" "}
                  a software engineer passionate about creating impactful solutions.
            </h1>
            <div data-aos="fade-up" data-aos-delay="400">
              <button className="bg-gradient-to-r from-primary to-primary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full">
                About Me
              </button>
            </div>
          </div>

          </div>
        </div>
      </div>
  </>
  )
}

export default About