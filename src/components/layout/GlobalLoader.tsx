import React from "react";
import { motion } from "framer-motion";

function GlobalLoader() {
  // Generate random positions and sizes for background logos
  const backgroundLogos = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: 10 + Math.random() * 80, // Random x position (10-90% to keep within bounds)
    y: 10 + Math.random() * 80, // Random y position (10-90% to keep within bounds)
    scale: 0.3 + Math.random() * 0.7, // Random scale (0.3-1.0)
    delay: Math.random() * 3, // Random appearance delay (0-3s)
    duration: 2 + Math.random() * 3, // Random animation duration (2-5s)
    rotateDirection: Math.random() > 0.5 ? 1 : -1, // Random rotation direction
  }));

  return (
    <div className="h-screen w-full flex items-center justify-center bg-yellow-400 fixed inset-0 bg-opacity-30 z-50 overflow-hidden">
      {/* Background scattered logos with hypnotic effect */}
      {backgroundLogos.map((logo) => (
        <motion.img
          key={logo.id}
          src="./assets/images/logo.svg"
          alt="background-logo"
          className="absolute opacity-90 max-w-20 max-h-20" // Added max width/height to control size
          style={{
            left: `${logo.x}%`,
            top: `${logo.y}%`,
            transform: "translate(-50%, -50%)", // Center the image on its position
          }}
          initial={{
            scale: 0,
            opacity: 0,
            rotate: 0,
          }}
          animate={{
            scale: [0, logo.scale, logo.scale * 0.8, logo.scale],
            opacity: [0, 0.1, 0.05, 0.5],
            rotate: [0, logo.rotateDirection * 180, logo.rotateDirection * 360],
          }}
          transition={{
            duration: logo.duration,
            repeat: Infinity,
            delay: logo.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Main center logo */}
      <motion.img
        src="./assets/images/logo.svg"
        alt="main-logo"
        className="nav-logo relative z-10 max-w-32 max-h-32" // Added max size constraint
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        // Keep your existing hover and tap animations
        whileHover={{ scale: 1.1, rotate: 6 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          rotate: [-5, 3, -5],
          scale: [1, 1.05, 1],
          opacity: [0, 0.1, 0.05, 1],
        }}
      />

      {/* Floating particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-4 h-4 bg-white rounded-full opacity-30"
          style={{
            left: "50%",
            top: "50%",
          }}
          initial={{
            x: 0,
            y: 0,
            scale: 0,
          }}
          animate={{
            x: [0, (Math.random() - 0.5) * 300], // Reduced from 400 to 300 to stay within bounds
            y: [0, (Math.random() - 0.5) * 300], // Reduced from 400 to 300 to stay within bounds
            scale: [0, 1, 0],
            opacity: [0.3, 0.1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export default GlobalLoader;
