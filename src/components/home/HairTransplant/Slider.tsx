"use client";

import { LuArrowUpRight } from "react-icons/lu";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";
import { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper"; // <-- type import

import HairShadowBox from "../../base/HairShadowBox";
import HairButton from "../../base/HairButton";
import HairTitle from "../../base/HairTitle";
import HairText from "../../base/HairText";
import { motion } from "framer-motion";
import useDeviceType from "../../../hooks/useMobileDevice";
import { SCREEN_TYPE } from "../../../enums/screenType";

// ---- Types ----
interface SliderContent {
  key: number;
  title: string;
  coverImage: string;
  learnMoreLink: string;
  listDescription: string[];
}

const SliderContentList: SliderContent[] = [
  {
    key: 101,
    title: "Hair Transplant",
    coverImage: "./assets/images/slider/character1.png",
    learnMoreLink: "#",
    listDescription: [
      "Permanent Solution",
      "Natural-Looking Results",
      "Quick Recovery",
      "Boost Confidence",
      "Expert Care",
    ],
  },
  {
    key: 102,
    title: "Non-Surgecial Treatments",
    coverImage: "./assets/images/slider/character2.png",
    learnMoreLink: "#",
    listDescription: [
      "Natural-Looking Results",
      "Boost Confidence",
      "Expert Care",
    ],
  },
  {
    key: 103,
    title: "Forhead Reduction Transplant",
    coverImage: "./assets/images/slider/character3.png",
    learnMoreLink: "#",
    listDescription: [
      "Permanent Solution",

      "Quick Recovery",
      "Boost Confidence",
      "Expert Care",
    ],
  },
  {
    key: 104,
    title: "Beard, Eyebrows & Lashes",
    coverImage: "./assets/images/slider/character4.png",
    learnMoreLink: "#",
    listDescription: [
      "Permanent Solution",
      "Natural-Looking Results",

      "Boost Confidence",
      "Expert Care",
    ],
  },
];

const Slider = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const device = useDeviceType();

  const handleSliderPrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleSlideNext = () => {
    swiperRef?.current?.slideNext();
  };

  const handleSlideSelectByIndex = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };

  const [show, setShow] = useState(false);

  return (
    <div className="custom-container py-[32px] sm:py-[72px]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        className="flex flex-col"
        spaceBetween={30}
        slidesPerView={1}
        loop={false}
        autoplay={{ delay: 4000 }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          setShow(false);
        }} // track
      >
        {SliderContentList.map((item) => (
          <SwiperSlide key={item.key}>
            <div className="w-full flex flex-col gap-6 relative">
              <div className="flex flex-row justify-between items-center">
                <HairTitle
                  fontFamily="opensauce"
                  fontSize="medium"
                  fontWeight="bold"
                  className="text-center"
                >
                  {item.title}
                </HairTitle>
                {/* Controls */}
                <div className="hidden sm:flex gap-4 mb-2">
                  <HairButton
                    onClick={handleSliderPrev}
                    shadowEnable
                    bgColor="white"
                    color="black"
                    offsetX="3px"
                    offsetY="3px"
                    borderEnable
                    className="!px-3 !py-3 cursor-pointer"
                  >
                    <MdOutlineKeyboardArrowLeft size={20} />
                  </HairButton>
                  <HairButton
                    onClick={handleSlideNext}
                    shadowEnable
                    bgColor="primary"
                    color="black"
                    offsetX="3px"
                    offsetY="3px"
                    className="!px-3 !py-3 cursor-pointer"
                  >
                    <MdOutlineKeyboardArrowRight size={20} />
                  </HairButton>
                </div>
              </div>

              <HairShadowBox
                bgColor="primary"
                borderEnable
                borderSize="b2"
                rounded="4xl"
                className="w-full h-[340px] sm:h-[600px] bg-cover bg-center bg-no-repeat p-5 relative flex flex-col justify-between"
                // @ts-ignore
                style={{
                  backgroundImage: `url("${item.coverImage}")`,
                }}
              >
                <img
                  src="./assets/images/slogan/fixhair-yellow.png"
                  alt=" Brand logo"
                  className="ml-auto  h-[100px]"
                />

                {/* dynamics contents List */}
                {device === SCREEN_TYPE.MOBILE ? (
                  // --- MOBILE: Motion (hidden until tapped/hovered) ---
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      show ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }
                    }
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <HairShadowBox
                      className="w-[300px] rounded-none"
                      shadowEnable
                      shadowColor="black"
                      shadowHeight="80%"
                      shadowWidth="290px"
                      offsetX="-10px"
                      offsetY="-10px"
                      onClick={() => setShow(!show)} // 👈 toggle on mobile tap
                    >
                      {item.listDescription.map((list, index) => (
                        <div
                          key={index}
                          className={`${
                            index % 2 !== 0
                              ? "bg-gradient-to-l from-[#C5C5C5] to-[#E4E4E4]"
                              : ""
                          } px-2 py-2`}
                        >
                          <HairText
                            fontFamily="texgyrebonum"
                            fontSize="normal"
                            fontWeight="bold"
                          >
                            {list}
                          </HairText>
                        </div>
                      ))}
                    </HairShadowBox>
                  </motion.div>
                ) : (
                  // --- DESKTOP: Always visible ---
                  <div>
                    <HairShadowBox
                      className="w-[300px] rounded-none"
                      shadowEnable
                      shadowColor="black"
                      shadowHeight="80%"
                      shadowWidth="290px"
                      offsetX="-10px"
                      offsetY="-10px"
                    >
                      {item.listDescription.map((list, index) => (
                        <div
                          key={index}
                          className={`${
                            index % 2 !== 0
                              ? "bg-gradient-to-l from-[#C5C5C5] to-[#E4E4E4]"
                              : ""
                          } sm:py-3 sm:px-3 px-2 py-2`}
                        >
                          <HairText
                            fontFamily="texgyrebonum"
                            fontSize="normal"
                            fontWeight="bold"
                          >
                            {list}
                          </HairText>
                        </div>
                      ))}
                    </HairShadowBox>

                    {/* CTA Button */}
                    <HairButton
                      borderEnable
                      color="secondary"
                      bgColor="white"
                      shadowEnable
                      offsetX="3px"
                      offsetY="3px"
                      fontFamily="norwester"
                      fontSize="normal"
                      className="sm:flex hidden flex-row items-center gap-1 uppercase"
                    >
                      <span className="text-xl">Learn More</span>
                      <LuArrowUpRight size={20} />
                    </HairButton>
                  </div>
                )}

                {/* Dynamic indicator  for mobile*/}
                <div className="flex flex-row gap-4 sm:gap-8 justify-between items-center">
                  {SliderContentList.map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`w-full h-[10px] rounded-md transition-colors ${
                        dotIndex === activeIndex ? "bg-black" : "bg-white"
                      }`}
                      onClick={() => handleSlideSelectByIndex(dotIndex)}
                    />
                  ))}
                </div>
              </HairShadowBox>
            </div>
          </SwiperSlide>
        ))}

        {/* Controls */}
        <div className="sm:hidden flex gap-4 mb-2">
          <HairButton
            onClick={handleSliderPrev}
            shadowEnable
            bgColor="white"
            color="black"
            offsetX="3px"
            offsetY="3px"
            borderEnable
            className="!px-3 !py-3 cursor-pointer"
          >
            <MdOutlineKeyboardArrowLeft size={20} />
          </HairButton>
          <HairButton
            onClick={handleSlideNext}
            shadowEnable
            bgColor="primary"
            color="black"
            offsetX="3px"
            offsetY="3px"
            className="!px-3 !py-3 cursor-pointer"
          >
            <MdOutlineKeyboardArrowRight size={20} />
          </HairButton>
        </div>

        {/* CTA Button */}
        <HairButton
          borderEnable
          color="secondary"
          bgColor="white"
          shadowEnable
          offsetX="3px"
          offsetY="3px"
          fontFamily="norwester"
          fontSize="normal"
          className="sm:hidden flex flex-row items-center gap-1 uppercase"
        >
          <span className="text-xl">Learn More</span>
          <LuArrowUpRight size={20} />
        </HairButton>
      </Swiper>
    </div>
  );
};

export default Slider;
