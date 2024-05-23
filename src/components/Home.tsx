import React, { useEffect, useState } from "react";
import "./Style.Home.css";
import rocket from '@assets/rocket.webp'
import { motion } from "framer-motion";
// import { ScrollContainer, ScrollPage } from "react-scroll-motion";

const Home: React.FC = () => {
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseMove = (event: MouseEvent) => {
    const { innerWidth, innerHeight } = window;
    const { clientX, clientY } = event;

    const xPos = (clientX / innerWidth - 0.5) * 20;
    const yPos = (clientY / innerHeight - 0.5) * 20;

    setOffsetX(xPos);
    setOffsetY(yPos);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="parallax-container bg-[#0c0f35] lg:h-screen md:h-screen h-[600px]"
      style={{
        clipPath: 'polygon(100% 0%, 0% 0% , 0.00% 93.88%, 2.00% 93.32%, 4.00% 92.43%, 6.00% 91.44%, 8.00% 90.58%, 10.00% 90.08%, 12.00% 90.05%, 14.00% 90.50%, 16.00% 91.33%, 18.00% 92.32%, 20.00% 93.23%, 22.00% 93.84%, 24.00% 93.99%, 26.00% 93.65%, 28.00% 92.90%, 30.00% 91.93%, 32.00% 90.98%, 34.00% 90.27%, 36.00% 90.00%, 38.00% 90.22%, 40.00% 90.88%, 42.00% 91.82%, 44.00% 92.80%, 46.00% 93.58%, 48.00% 93.98%, 50.00% 93.88%, 52.00% 93.32%, 54.00% 92.43%, 56.00% 91.44%, 58.00% 90.58%, 60.00% 90.08%, 62.00% 90.05%, 64.00% 90.50%, 66.00% 91.33%, 68.00% 92.32%, 70.00% 93.23%, 72.00% 93.84%, 74.00% 93.99%, 76.00% 93.65%, 78.00% 92.90%, 80.00% 91.93%, 82.00% 90.98%, 84.00% 90.27%, 86.00% 90.00%, 88.00% 90.22%, 90.00% 90.88%, 92.00% 91.82%, 94.00% 92.80%, 96.00% 93.58%, 98.00% 93.98%, 100.00% 93.88%)',
      }}
    >

      <div
        className="parallax-layer layer-1"
        style={{
          transform: `translate(${offsetX * 0.3}px, ${offsetY * 0.3}px)`,
        }}
      />
      <div className="content">
        <div className="border-gradient relative px-16 py-10 w-fit m-auto">
          <div className="flex gap-3 relative">
            <div className="box border-4 p-1 border-[#e04545] absolute bottom-7 -left-7"></div>
            <div className="box border-4 p-1 border-[#f0f0f0] absolute bottom-7 left-2"></div>
            <div className="box border-4 p-1 border-[#8eda90] absolute bottom-7 left-[45px]"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01]
            }} className="lg:text-[5em] md:text-[2.8em] text-[1.5em] font-extrabold drop-shadow-custom font-bullpen bg-gradient-to-r from-[#f7d1d3] via-[#fdb2fe] to-[#acb5f5] text-transparent bg-clip-text">Hi, <br /> I'm CHLOE</motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 2,
              delay: 0.8,
              ease: [0, 0.71, 0.2, 1.01]
            }} className="lg:text-[2em] md:text-[1.5em] text-[1em] font-kalam">Front-End Developer Portfolio</motion.div>

        </div>
        <div
          className="parallax-item item-1"
          style={{ transform: `translate(${offsetX * 1}px, ${offsetY * 1}px)` }}
        >
          <img src={rocket} alt="Rocket" className="drop-shadow-customimg" />
        </div>
      </div>

    </div >
  );
};

export default Home;
