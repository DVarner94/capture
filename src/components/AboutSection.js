import React from 'react';
import home1 from '../img/home1.png';
// styled
import { About, Description, Hide, Image } from '../styles';
import { motion } from 'framer-motion';

const AboutSection = () => {
    return (
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <motion.h2 
                        animate={{ opacity: 1, transition: { duration: 2 } }} 
                        initial={{ opacity: 0 }}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <h2>
                            you <span>dreams</span> come
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
                <p>Contact us for any multimedia services you may need!</p>
                <button>Contact Use</button>
            </Description>
            <Image>
                <img src={home1} alt="cameraman" />
            </Image>
        </About>
    );
};



export default AboutSection;