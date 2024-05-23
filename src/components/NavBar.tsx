import React, { useRef, useEffect, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowLeft } from "react-icons/fa6";
// import './Style.Navbar.css';
import About from './About';
import Contact from './Contact';
import Work from './Work';
import Home from './Home';

const Navbar: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<LocomotiveScroll | null>(null);
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [activeSection, setActiveSection] = useState<string>('Home');

    useEffect(() => {
        if (containerRef.current) {
            scrollRef.current = new LocomotiveScroll({
                el: containerRef.current,
                smooth: true
            });
        }

        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 640);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.6
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        const sections = document.querySelectorAll('[data-scroll-section] > div');
        sections.forEach(section => observer.observe(section));

        return () => {
            if (scrollRef.current) {
                scrollRef.current.destroy();
            }
            window.removeEventListener('resize', handleResize);
            observer.disconnect();
        };
    }, []);

    const scrollTo = (id: string) => {
        if (scrollRef.current) {
            const target = document.getElementById(id);
            if (target) {
                scrollRef.current.scrollTo(target);
                setIsMenuOpen(false);
            }
        }
    };
    return (
        <div>
            <nav id="navbar" className='opacity-100 z-50 text-[#527459] font-serif '>
                <div className="nav-content flex justify-around items-center h-[4.5em] font-extrabold lg:text-[1.5em] md:text-[1.2em] text-[1em] px-2 bg-[#FCFFE0]">
                    <div>
                        <a onClick={() => scrollTo("Home")} className="cursor-pointer">Front</a>
                    </div>
                    {isSmallScreen ? (
                        <div className="relative">
                            <button
                                className="hamburger p-2 focus:outline-none"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <GiHamburgerMenu />
                            </button>
                            <div
                                className={`fixed top-0 right-0 h-full w-[45%] bg-[#fefff4] shadow-xl z-50 transform transition-transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                                    }`}
                            >
                                <div className="p-4 flex flex-col space-y-4">
                                    <button
                                        className="hamburger p-2 focus:outline-none"
                                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    >
                                        <FaArrowLeft />
                                    </button>
                                    <a
                                        onClick={() => scrollTo("Home")}
                                        className={`cursor-pointer hover:text-[#75A47F] ${activeSection === 'Home' ? 'text-[#75A47F]' : ''}`}
                                    >Home</a>
                                    <a
                                        onClick={() => scrollTo("About")}
                                        className={`cursor-pointer hover:text-[#75A47F] ${activeSection === 'About' ? 'text-[#75A47F]' : ''}`}
                                    >About</a>
                                    <a
                                        onClick={() => scrollTo("Work")}
                                        className={`cursor-pointer hover:text-[#75A47F] ${activeSection === 'Work' ? 'text-[#75A47F]' : ''}`}
                                    >Work</a>
                                    <a
                                        onClick={() => scrollTo("Contact")}
                                        className={`cursor-pointer hover:text-[#75A47F] ${activeSection === 'Contact' ? 'text-[#75A47F]' : ''}`}
                                    >Contact</a>

                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="links flex lg:gap-20 md:gap-10 gap-10">
                            <a
                                onClick={() => scrollTo("Home")}
                                className={`cursor-pointer flex items-center gap-1 hover:text-[#75A47F] ${activeSection === 'Home' ? 'text-[#75A47F]' : ''}`}
                            >
                                Home</a>
                            <a
                                onClick={() => scrollTo("About")}
                                className={`cursor-pointer flex items-center gap-1 hover:text-[#75A47F] ${activeSection === 'About' ? 'text-[#75A47F]' : ''}`}
                            >
                                {/* <FaInfo/> */}
                                About</a>
                            <a
                                onClick={() => scrollTo("Work")}
                                className={`cursor-pointer flex items-center gap-1 hover:text-[#75A47F] ${activeSection === 'Work' ? 'text-[#75A47F]' : ''}`}
                            >
                                {/* <MdAssignmentInd/> */}
                                Work</a>
                            <a
                                onClick={() => scrollTo("Contact")}
                                className={`cursor-pointer flex items-center gap-1 hover:text-[#75A47F] ${activeSection === 'Contact' ? 'text-[#75A47F]' : ''}`}
                            >
                                {/* <IoMdContact/> */}
                                Contact</a>
                        </div>
                    )}
                </div>
            </nav>
            <div className="content flex flex-col gap-[10em]">
                <div className="about-container" id="Home">
                    <Home />
                </div>
                <div className="about-container px-[1.7em] md:px-[2.2em] lg:px-[2.7em]" id="About">
                    <About />
                </div>
                <div className="work-container lg:pb-[3em] md:pb-[2em] pb-[1em]" id="Work">
                    <Work />
                </div>
                <div className="contact-container" id="Contact">
                    <Contact />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
