import { useState, useEffect } from 'react';
import './Style.About.css';
import stingray from '@assets/stingray.webp';
import blackCat from '@assets/black-cat.png'
import { motion } from 'framer-motion';
// import karina from '@assets/karina2.png'

const About = () => {
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
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className='parallax-container text-white bg-custom-gradient lg:h-screen md:h-[800px] h-[650px]'
            style={{
                clipPath: 'polygon(100% 100%, 0% 100%, 0% 13.7%, 2% 13.19%, 4% 12.37%, 6% 11.45%, 8% 10.67%, 10% 10.21%, 12% 10.18%, 14% 10.6%, 16% 11.35%, 18% 12.28%, 20% 13.11%, 22% 13.66%, 24% 13.8%, 26% 13.5%, 28% 12.8%, 30% 11.91%, 32% 11.03%, 34% 10.39%, 36% 10.13%, 38% 10.33%, 40% 10.94%, 42% 11.81%, 44% 12.71%, 46% 13.43%, 48% 13.8%, 50% 13.7%, 52% 13.19%, 54% 12.37%, 56% 11.45%, 58% 10.67%, 60% 10.21%, 62% 10.18%, 64% 10.6%, 66% 11.35%, 68% 12.28%, 70% 13.11%, 72% 13.66%, 74% 13.8%, 76% 13.5%, 78% 12.8%, 80% 11.91%, 82% 11.03%, 84% 10.39%, 86% 10.13%, 88% 10.33%, 90% 10.94%, 92% 11.81%, 94% 12.71%, 96% 13.43%, 98% 13.8%, 100% 13.7%)',
            }}>
            <svg className='background-svg' viewBox='0 0 400 1000' xmlns='http://www.w3.org/2000/svg'>
                <filter id='noiseFilter'>
                    <feTurbulence
                        type='fractalNoise'
                        baseFrequency='3.5'
                        numOctaves='4'
                        stitchTiles='stitch' />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width='100%' height='100%' filter='url(#noiseFilter)' />
            </svg>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 2,
                    delay: 1,
                    ease: [0, 0.71, 0.2, 1.01]
                }} className="content relative">
                <div
                    className="parallax-item item-1 flex relative lg:top-20 md:top-36 top-36 gap-[26rem] justify-center px-16"
                    style={{ transform: `translate(${offsetX * 1}px, ${offsetY * 1}px)` }}
                >
                    <img src={stingray} alt="Rocket" className="drop-shadow-customimg lg:w-[18em] md:w-[16em] w-[14em] h-auto relative lg:-left-9 md:-left-1 left-[120px]" />
                    <img src={stingray} alt="Rocket" className="drop-shadow-customimg lg:w-[18em] md:w-[16em] w-[14em] h-auto relative lg:-right-9 md:-right-1 right-[120px]" />
                </div>

                <div className="info-container lg:w-[80%] md:w-[80%] h-auto m-auto px-[5em] text-[#e8e8e8] relative lg:top-0 md:top-20 top-32 w-[100%]">
                    <div className='flex flex-col items-center justify-center'>
                        {/* <img src={karina} alt="Rocket" className="drop-shadow-customimg w-[25em] h-auto relative -left-[16rem]" /> */}
                        <h1 className='lg:text-[4.5em] md:text-[3em] text-[1.5em] font-extrabold font-homemade'>HEY THERE!!!!</h1><br />
                    </div>
                </div>
                <p className='lg:text-[1.3em] md:text-[1.1em] text-[0.65em] font-extrabold px-16 font-kalam relative lg:top-20 md:top-24 top-28 lg:w-[80%] m-auto'>As a computer science student, I'm actively pursuing a front-end developer internship. I have a foundational understanding of HTML and am currently advancing my skills in ReactJS, complemented by experience with Tailwind CSS. Eager to contribute my growing proficiency to dynamic web development projects.</p>
                <br /><br /><br /><br /><br /><br /><br /><br />
                <div
                    className="parallax-item2 item-2 flex justify-around relative"
                    style={{ transform: `translate(${offsetX * 1}px, ${offsetY * 1}px)` }}
                >
                    <img src={blackCat} alt="Rocket" className="drop-shadow-customimg lg:w-[10em] md:w-[8em] w-[5.5em] h-auto -rotate-45 relative lg:top-0 md:top-[2.5rem] top-[1rem]" />
                    <img src={blackCat} alt="Rocket" className="drop-shadow-customimg lg:w-[10em] md:w-[8em] w-[5.5em] h-auto rotate-45 relative lg:top-0 md:top-[3rem] top-[1rem]" />
                    <img src={blackCat} alt="Rocket" className="drop-shadow-customimg lg:w-[10em] md:w-[8em] w-[5.5em] h-auto relative lg:top-0 md:top-[3rem] top-[1rem]" />
                </div>
            </motion.div>
        </div >
    );
}

export default About;
