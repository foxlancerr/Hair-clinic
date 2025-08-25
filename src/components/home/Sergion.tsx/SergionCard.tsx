import { motion, type Variants } from "framer-motion";
import BoxShadowNode from "../../base/HairShadowBox";
import HairButton from "../../base/HairButton";
import HairText from "../../base/HairText";

interface SergionCardItem {
  key: number;
  buttonText: string;
  description: string;
  rewardImage: string;
  rewardDescription: string;
}

const SergionCardList: SergionCardItem[] = [
  {
    key: 101,
    buttonText: "Surgeon-Led Care",
    description:
      "From consultation to treatment, only expert surgeons handle your case.",
    rewardImage: "/assets/images/sergion/reward1.svg",
    rewardDescription: "#1 Patients Choice Award",
  },
  {
    key: 102,
    buttonText: "Personalized Attention",
    description: "We tailor every treatment plan to your unique needs.",
    rewardImage: "/assets/images/sergion/reward2.svg",
    rewardDescription: "Rated #1 in Patient Satisfaction",
  },
  {
    key: 103,
    buttonText: "Modern Technology & Methods",
    description:
      "We use the latest tools and techniques for superior results, unlike other clinics.",
    rewardImage: "/assets/images/sergion/reward3.svg",
    rewardDescription: "Top ranked #1 Hair Transplant Techniques.",
  },
];

// ✅ Container for stagger
const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.2,
    },
  },
};

// ✅ Card entrance animation
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
    },
  },
};

// ✅ Hover animations
const parentHoverVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
};

const childHoverVariants: Variants = {
  rest: { scale: 1 },
  hover: {
    scale: 0.9,
    transition: { type: "spring", stiffness: 400, damping: 17 },
  },
};

function SergionCard() {
  return (
    <div className="custom-container sergion-card-wrapper py-[32px] sm:py-[70px]">
      {/* ✅ Mobile */}
      <motion.div
        className="sm:hidden flex flex-col items-center gap-4 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {SergionCardList.map((card) => (
          <motion.div
            key={card.key}
            variants={cardVariants} // ✅ Direct child of container
            initial="rest"
            whileHover="hover"
            animate="rest"
          >
            <motion.div variants={parentHoverVariants}>
              <BoxShadowNode
                borderSize="b1"
                bgColor="white"
                color="black"
                shadowColor="secondary"
                rounded="2xl"
              >
                <div className="flex flex-col gap-3 p-4 text-center">
                  <HairButton
                    fontFamily="norwester"
                    fontSize="large"
                    color="primary"
                    className="w-full"
                  >
                    {card.buttonText}
                  </HairButton>
                  <HairText fontSize="normal">{card.description}</HairText>

                  <motion.div
                    className="flex justify-center items-center gap-1 bg-gradient-to-r from-[#FBF1A3] to-primary p-[5px] rounded-lg"
                    variants={childHoverVariants}
                  >
                    <img
                      width={20}
                      src={card.rewardImage}
                      alt={card.rewardDescription}
                    />
                    <HairText
                      fontFamily="opensauce"
                      fontWeight="bold"
                      fontSize="medium"
                    >
                      {card.rewardDescription}
                    </HairText>
                  </motion.div>
                </div>
              </BoxShadowNode>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* ✅ Desktop */}
      <motion.div
        className="hidden sm:flex flex-row justify-center sm:justify-between items-start gap-4 relative"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {SergionCardList.map((card, index: number) => (
          <motion.div
            key={card.key}
            variants={cardVariants} // ✅ Direct child of container
            initial="rest"
            whileHover="hover"
            animate="rest"
            style={
              index === 1
                ? {
                    marginTop: "40px",
                  }
                : {}
            }
          >
            <motion.div variants={parentHoverVariants}>
              <BoxShadowNode
                bgColor="white"
                shadowColor="secondary"
                rounded="2xl"
                borderEnable
                borderSize="b1"
              >
                <div className="flex flex-col gap-3 p-4 text-center max-w-[380px] min-h-[230px] relative">
                  <HairButton
                  borderSize="none"
                    fontFamily="norwester"
                    fontSize="large"
                    color="primary"
                    className="w-full"
                  >
                    {card.buttonText}
                  </HairButton>

                  <HairText fontSize="medium">{card.description}</HairText>
                  {/* <p className="text-xl text-gray-700">{}</p> */}
                  <motion.div
                    className="flex justify-center items-center gap-1 bg-gradient-to-r from-[#FBF1A3] to-primary p-3 rounded-lg absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%]"
                    variants={childHoverVariants}
                  >
                    <img
                      width={40}
                      src={card.rewardImage}
                      alt={card.rewardDescription}
                    />
                    <HairText
                      fontFamily="opensauce"
                      fontWeight="bold"
                      fontSize="medium"
                    >
                      {card.rewardDescription}
                    </HairText>
                  </motion.div>
                </div>
              </BoxShadowNode>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default SergionCard;
