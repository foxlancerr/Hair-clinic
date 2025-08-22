import { LuArrowUpRight } from "react-icons/lu";
import { motion, type Variants, type Transition } from "framer-motion";

// ✅ Animation Variants (all typed)
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ✅ Parent variants
const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};

// ✅ Reusable spring transition
const springTransition: Transition = {
  type: "spring",
  stiffness: 500,
  damping: 20,
  mass: 0.8,
};

// ✅ Child variants (typed)
const item: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springTransition,
  },
};

const brandList = [
  "./assets/images/hero/brand1.png",
  "./assets/images/hero/brand2.png",
  "./assets/images/hero/brand1.png",
  "./assets/images/hero/brand3.png",
  "./assets/images/hero/brand1.png",
  "./assets/images/hero/brand4.png",
  "./assets/images/hero/brand1.png",
  "./assets/images/hero/brand5.png",
  "./assets/images/hero/brand1.png",
  "./assets/images/hero/brand2.png",
];

function HeroSection() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 h-[calc(100vh-h-16)] bg-yellow-400">
        {/* left side */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-4 pt-8 items-start sm:bg-white bg-yellow-400 custom-container mb-4 h-full"
        >
          <motion.button
            variants={item} // ✅ no `as any`
            className="hidden sm:block text-xl uppercase text-yellow-400 px-4 py-2 bg-black rounded-md"
          >
            #FIXMYHAIR
          </motion.button>

          <motion.h1 variants={item} className="font-bold sm:text-7xl text-3xl">
            World’s <br /> Most Patient
            <br /> Centred Hair <br />
            Clinic
          </motion.h1>

          <motion.p variants={item} className="">Winner of Multiple Awards 🏆🏆🏆</motion.p>

          <motion.div variants={item} className="relative inline-block mt-4">
            {/* shadow box */}
            <div className="absolute inset-0 translate-x-[5px] translate-y-[5px] bg-black rounded-md"></div>

            {/* main button */}
            <button className="relative px-6 py-3 bg-white text-black border border-black rounded-md uppercase font-bold flex gap-2 items-center">
              <span className="text-xl">Book Now</span>
              <LuArrowUpRight size={20} />
            </button>
          </motion.div>
        </motion.div>

        {/* right side */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={container} // ✅ use same container for stagger
          className="flex justify-center items-end bg-[auto_165px] sm:bg-[auto_auto]"
          style={{
            backgroundImage: "url('./assets/images/hero/grid.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
          }}
        >
          <motion.div
            variants={fadeInRight}
            className="relative flex items-end"
          >
            <div className="relative">
              <motion.div
                variants={fadeInUp}
                className="relative w-auto h-[320px] sm:h-[630px] overflow-hidden"
              >
                <img
                  className="w-auto object-cover h-[320px] sm:h-auto object-bottom"
                  src="./assets/images/hero/character.png"
                  alt="character"
                />
              </motion.div>

              {/* highlight + labels */}
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="absolute sm:top-[130px] sm:left-[70px] top-[17%] left-[12%]"
              >
                <div className="relative">
                  {/* Highlight image */}
                  <motion.img
                    variants={item}
                    className="sm:h-[275px] h-[115px] w-auto"
                    src="./assets/images/hero/highlight-face.png"
                    alt="highlight"
                  />

                  {/* Fue */}
                  <motion.div
                    variants={item}
                    className="absolute sm:top-0 -top-6 sm:-right-[110px] -right-[40px] flex flex-col items-center"
                  >
                    <span className="uppercase sm:text-2xl text-md font-semibold">
                      Fue
                    </span>
                    <img
                      className="mt-1 sm:w-[70px] w-[40px] h-auto"
                      src="./assets/images/hero/fue-arrow.png"
                      alt="fue arrow"
                    />
                  </motion.div>

                  {/* Beard */}
                  <motion.div
                    variants={item}
                    className="absolute sm:-right-[120px] -right-[90px] sm:bottom-16 bottom-4 flex flex-row-reverse gap-2 items-end"
                  >
                    <span className="uppercase sm:text-2xl text-md font-semibold">
                      Beard
                    </span>
                    <img
                      className="sm:w-[100px] w-[70px] h-auto"
                      src="./assets/images/hero/beard-arrow.png"
                      alt="beard arrow"
                    />
                  </motion.div>

                  {/* Fut */}
                  <motion.div
                    variants={item}
                    className="absolute sm:-left-[60px] -left-[60px] sm:top-8 top-2 flex gap-2 items-end"
                  >
                    <span className="uppercase sm:text-2xl text-md font-semibold">
                      Fut
                    </span>
                    <img
                      className="sm:w-[40px] w-[30px] h-auto"
                      src="./assets/images/hero/fut-arrow.png"
                      alt="fut arrow"
                    />
                  </motion.div>

                  {/* Eyebrow */}
                  <motion.div
                    variants={item}
                    className="absolute sm:-left-[110px] -left-[65px] sm:top-[90px] top-[35px] flex flex-col-reverse gap-1 sm:gap-2 items-end"
                  >
                    <span className="uppercase sm:text-2xl text-md font-semibold">
                      Eyebrow
                    </span>
                    <img
                      className="sm:w-[60px] w-[40px] h-auto"
                      src="./assets/images/hero/eyebrow-arrow.png"
                      alt="eyebrow arrow"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* hero footer */}
      {/* <div className="h-[70px] sm:h-[110px] bg-secondary flex items-center justify-center ">
        <div className="flex flex-row items-center justify-between w-full custom-container">
          {brandList.map((item, index) => {
            return (
              <div className="" key={index}>
                <img src={item} className="w-[90%] h-auto"></img>
              </div>
            );
          })}
        </div>
      </div>
       */}

      {/* hero footer */}
      <div className="h-[70px] sm:h-[110px] bg-secondary flex items-center justify-center">
        <div
          className="flex flex-row items-center justify-start sm:justify-between w-full custom-container 
               overflow-x-auto sm:overflow-x-hidden scrollbar-hide gap-6"
        >
          {brandList.map((item, index) => (
            <div className="flex-shrink-0" key={index}>
              <img src={item} className="w-[90%] h-auto" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default HeroSection;
