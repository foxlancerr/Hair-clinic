import { RiMenu3Fill } from "react-icons/ri";
import { LuArrowUpRight } from "react-icons/lu";
import { motion } from "framer-motion";
import { useState } from "react";

function Header() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const navItemVariants = {
    initial: {
      display: "block",
      width: "8px",
      height: "8px",
      borderRadius: "100%",
      background: "black",
      left: "50%",
      bottom: "0px",
      x: "-50%",
      y: "-50%",
      scale: 1,
      opacity: 0,
    },
    hover: {
      width: "24px",
      height: "24px",
      borderRadius: "100%",
      background: "yellow",
      scale: 1.2,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About Us", id: "about" },
    { name: "Contact Us", id: "contact" },
  ];

  const handleMouseMove = (e: any, itemId: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
    setHoveredItem(itemId);
  };

  const handleMouseEnter = (itemId) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <nav className="relative header-container">
      {/* Mobile screen */}
      <div className="custom-container flex mx-auto my-[12px] justify-between items-center sm:hidden">
        <motion.img
          src="./assets/images/logo.svg"
          alt="main-logo"
          className="nav-logo"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className="nav-menu cursor-pointer block"
          whileHover={{ rotate: 180, scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <RiMenu3Fill size={24} />
        </motion.span>
      </div>

      {/* desktop screen */}
      <div className="ml-[72px] hidden sm:flex items-stretch border-b border-b-black mr-auto relative">
        <div className="flex pr-16 border-r  border-r-black items-center">
          <motion.img
            src="./assets/images/logo.svg"
            alt="main-logo"
            className="nav-logo"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <ul className="flex items-center gap-2 ml-8">
          {navItems.map((item) => (
            <motion.li
              key={item.id}
              className="relative cursor-pointer px-4 py-2 "
              onMouseMove={(e) => handleMouseMove(e, item.id)}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
              initial="initial"
              animate={hoveredItem === item.id ? "hover" : "initial"}
            >
              {/* Text with color animation */}
              <motion.span className="relative z-10 select-none transition-colors duration-200">
                {item.name}
              </motion.span>

              {/* Magnetic circle that follows mouse */}
              <motion.span
                animate={
                  hoveredItem === item.id
                    ? {
                        ...navItemVariants.hover,
                        left: mousePosition.x,
                        top: mousePosition.y,
                        x: "-50%",
                        y: "-50%",
                      }
                    : navItemVariants.initial
                }
                transition={{
                  type: "spring",
                  stiffness: 150,
                  damping: 15,
                  mass: 0.1,
                }}
                className="absolute z-0 pointer-events-none"
              />

              {/* Subtle background glow effect */}
              {hoveredItem === item.id && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 0.1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-yellow-200 rounded-lg -z-10"
                />
              )}
            </motion.li>
          ))}
        </ul>

        {/* Enhanced Button */}
        <motion.button
          className="bg-black rounded-lg text-white px-6 py-4 flex gap-3 items-center ml-auto relative overflow-hidden shadow-lg z-10"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)",
            transition: { duration: 0.3 },
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.1 },
          }}
        >
          {/* Button overlay */}
          <motion.div
            className="absolute inset-0 bg-white opacity-0"
            whileHover={{
              opacity: 0.1,
              transition: { duration: 0.3 },
            }}
          />

          {/* Button text */}
          <motion.span
            className="uppercase relative z-10 font-semibold tracking-wide"
            initial={{ x: 0 }}
            whileHover={{
              x: -2,
              transition: { duration: 0.3 },
            }}
          >
            Book Now
          </motion.span>

          {/* Animated arrow */}
          <motion.span
            className="relative z-10"
            initial={{ rotate: 0, scale: 1 }}
            whileHover={{
              rotate: 45,
              scale: 1.2,
              transition: { duration: 0.4, ease: "easeInOut" },
            }}
          >
            <LuArrowUpRight size={24} />
          </motion.span>
        </motion.button>
        {/* yellow backgound color */}
        <div className="w-[53.2%] h-full absolute top-0 right-0 bg-yellow-400"></div>
      </div>
    </nav>
  );
}

export default Header;
