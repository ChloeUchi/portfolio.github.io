import { useEffect, useState } from "react";
import assignment2 from '@assets/Assignment2.png'
import digimon from '@assets/digimon.png'
import flexWorkshop from '@assets/flexWorkshop.png'
import flexWorkshop2 from '@assets/flexWorkshop2.png'
import pokemonWorkshop from '@assets/pokemonWorkshop.png'
import tailwindWorkshop from '@assets/tailwindWorkshop.png'

import { FaGithub } from "react-icons/fa";
import './Style.Work.css'
import { motion } from "framer-motion";
const Work = () => {
    const [visibleCards, setVisibleCards] = useState(4);
    const loadMoreCards = () => {
        setVisibleCards(prevVisibleCards => prevVisibleCards + 4);
    };
    const [isLargeScreen, setIsLargeScreen] = useState(false);
    const cards = [
        { title: "Vocabulary Match", description: "Vocabulary Match challenge assignment using React TypeScript and fetching data from json file", imageUrl: assignment2 },
        { title: "Digimon Card", description: "Workshop API using React TypeScript to fetch API", imageUrl: digimon },
        { title: "Flex Layout Workshop", description: "Workshop of using flex layout", imageUrl: flexWorkshop },
        { title: "Flex Layout Workshop", description: "Workshop of using flex layout", imageUrl: flexWorkshop2 },
        { title: "Pokemon API", description: "Workshop API using axios to fetch data from pokemon api v2", imageUrl: pokemonWorkshop },
        { title: "Tailwind workshop", description: "Workshop using tailwind css", imageUrl: tailwindWorkshop },
    ];
    const handleResize = () => {
        const width = window.innerWidth;
        if (width >= 1024) {
            setIsLargeScreen(true);
            setVisibleCards(cards.length);
        } else {
            setIsLargeScreen(false);
            setVisibleCards(4);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return (
        <div className="curved bg-[#25274a]"
        // style={{
        //     clipPath: 'polygon(100% 100%, 0% 100%, 0.00% 79.70%, 2.00% 78.29%, 4.00% 76.07%, 6.00% 73.59%, 8.00% 71.45%, 10.00% 70.19%, 12.00% 70.12%, 14.00% 71.26%, 16.00% 73.32%, 18.00% 75.80%, 20.00% 78.08%, 22.00% 79.60%, 24.00% 79.98%, 26.00% 79.13%, 28.00% 77.25%, 30.00% 74.83%, 32.00% 72.44%, 34.00% 70.69%, 36.00% 70.00%, 38.00% 70.55%, 40.00% 72.20%, 42.00% 74.55%, 44.00% 77.00%, 46.00% 78.96%, 48.00% 79.94%, 50.00% 79.70%, 52.00% 78.29%, 54.00% 76.07%, 56.00% 73.59%, 58.00% 71.45%, 60.00% 70.19%, 62.00% 70.12%, 64.00% 71.26%, 66.00% 73.32%, 68.00% 75.80%, 70.00% 78.08%, 72.00% 79.60%, 74.00% 79.98%, 76.00% 79.13%, 78.00% 77.25%, 80.00% 74.83%, 82.00% 72.44%, 84.00% 70.69%, 86.00% 70.00%, 88.00% 70.55%, 90.00% 72.20%, 92.00% 74.55%, 94.00% 77.00%, 96.00% 78.96%, 98.00% 79.94%, 100.00% 79.70%)'
        // }}

        >
            <h1 className='lg:text-[3em] md:text-[2em] text-[1em] font-extrabold font-kalam text-white text-center drop-shadow-custom2'>My Works</h1>
            <br /><br />
            <div className="flex flex-col items-center">
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 justify-around'>
                    {cards.slice(0, visibleCards).map((card, index) => (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 2,
                                delay: 0.8,
                                ease: [0, 0.71, 0.2, 1.01]
                            }} key={index} className="card lg:w-[399.5px] lg:h-[230px] md:w-[350px] md:h-[200px] w-[271px] h-[154px] relative overflow-hidden rounded-lg transition-transform duration-600 hover:rotate-[-3deg]  hover:scale-105 shadow-lg"
                            style={{ backgroundImage: `url(${card.imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            <div className="card__content">
                                <p className="card__title lg:text-[24px] md:text-[19.2px] text-[16px] font-serif">{card.title}</p>
                                <p className="card__description lg:text-[17px] md:text-[12.7px] text-[9.8px] font-sans text-start">{card.description}</p>
                                <div className="flex justify-between relative lg:top-14 md:top-16 top-9 lg:text-[16px] md:text-[12px] text-[9.8px]">Open on Github <a href="https://github.com/ChloeUchi" className="w-6 h-auto"><FaGithub /></a></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
                {!isLargeScreen && visibleCards < cards.length && (
                    <button onClick={loadMoreCards} className="mt-4 px-4 py-2 font-bold bg-[#373960] text-white rounded-full hover:bg-[#33344c] active:bg-[#50516d] font-sans drop-shadow-custom">
                        Load More
                    </button>
                )}
            </div>
        </div >
    )
}

export default Work