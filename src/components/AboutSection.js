import React from 'react';
import home1 from '../img/home1.png';
// styled
import { About, Description, Hide, Image } from '../styles';
import { motion } from 'framer-motion';
import { titleAnim } from '../animation'

const AboutSection = () => {

    return (
        <About>
            <Description>
                <motion.div className="title">
                    <Hide>
                        <motion.h2 variants={titleAnim}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>
                            you <span>dreams</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
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