import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

function HeroSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 h-[calc(100vh-h-16)] bg-yellow-400">
      {/* left side */}
      <div className="flex flex-col gap-4 pt-8 items-start sm:bg-white bg-yellow-400 custom-container">
        <div className="flex flex-col gap-2 items-start">
          <button className="text-xl uppercase text-yellow-400 px-4 py-2 bg-black rounded-md">
            #FIXMYHAIR
          </button>
          <h1 className="font-bold sm:text-8xl text-3xl">
            World’s <br></br> Most Patient<br></br> Centred Hair <br></br>Clinic
          </h1>
          <p>Winner of Multiple Awards 🏆🏆🏆</p>
        </div>

        <button className="flex  gap-1 items-center px-4 py-2 bg-white text-black border-black border-1 rounded-md uppercase font-bold">
          <span className="text-xl">Book Now</span>
          <span>
            <LuArrowUpRight size={20}></LuArrowUpRight>
          </span>
        </button>
      </div>
      {/* right side  */}
      <div
        className="flex justify-center items-end"
        style={{
          backgroundImage: "url('./assets/images/hero/grid.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
        }}
      >
        <div className="relative flex items-end  ">
          <div className="relative ">
            <div className="relative w-auto h-[630px] overflow-hidden">
              
              <img
                className="w-auto object-cover object-bottom"
                src="./assets/images/hero/character.png"
                alt="character"
              />

             
            </div>
             {/* Highlight (absolute) with Fue arrow+label attached */}
              <div className="absolute top-[130px] left-[70px]">
                <div className="relative">
                  {/* Highlight face */}
                  <img
                    className="h-[275px] w-auto"
                    src="./assets/images/hero/highlight-face.png"
                    alt="highlight"
                  />

                  {/* Fue label + arrow, relative to highlight */}
                  <div className="absolute top-0 -right-[110px] -translate-x-1/2 flex flex-col items-center">
                    <span className="uppercase text-2xl ml-auto font-semibold">Fue</span>
                    <img
                      className="mt-1 w-[70px] h-auto"
                      src="./assets/images/hero/fue-arrow.png"
                      alt="fue arrow"
                    />
                  </div>

                  {/* Beard label + arrow, relative to highlight */}
                  <div className="absolute -right-[120px] bottom-16 flex flex-row-reverse gap-2 items-end">
                    <span className="uppercase text-2xl ml-auto font-semibold">BEARD</span>
                    <img
                      className="mt-1 w-[100px] h-auto"
                      src="./assets/images/hero/beard-arrow.png"
                      alt="fue arrow"
                    />
                  </div>
                  {/* fut label + arrow, relative to highlight */}
                  <div className="absolute -left-[60px] top-8 flex  gap-2 items-end">
                    <span className="uppercase text-2xl ml-auto font-semibold">Fut</span>
                    <img
                      className="mt-1 w-[40px] h-auto"
                      src="./assets/images/hero/fut-arrow.png"
                      alt="fue arrow"
                    />
                  </div>
                  {/* Eye brow label + arrow, relative to highlight */}
                  <div className="absolute -left-[110px] top-[90px] flex  flex-col-reverse gap-2 items-end">
                    <span className="uppercase text-2xl ml-auto font-semibold">eyebrow</span>
                    <img
                      className="mt-1 w-[60px] h-auto"
                      src="./assets/images/hero/eyebrow-arrow.png"
                      alt="fue arrow"
                    />
                  </div>
                </div>
              </div>
          </div>

          {/* <img
            className="absolute"
            src="./assets/images/hero/fue-arrow.png"
            alt=""
          />
          <img
            className="absolute"
            src="./assets/images/hero/beard-arrow.png"
            alt=""
          />
          <img
            className="absolute"
            src="./assets/images/hero/eyebrow-arrow.png"
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
