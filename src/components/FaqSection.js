import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const FaqSection = () => {
    const [element, controls] = useScroll();
    console.log(controls)
    return (
        <Faq variants={scrollReveal} ref={element} animate={controls} initial='hidden'>
            <AnimateSharedLayout>
                <h2>Any Questions <span>FAQ</span></h2>
                <Toggle title="How Do I start">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, magni.</p>
                    </div>
                </Toggle>
                <Toggle title='Daily Schedule'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, magni.</p>
                    </div>
                </Toggle>
                <Toggle title='Differen Ways To Pay'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, magni.</p>
                    </div>
                </Toggle>
                <Toggle title='What Do You Have To Offer?'>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, magni.</p>
                    </div>
                </Toggle>
            </AnimateSharedLayout>
        </Faq>
    );
};

const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #ccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .question{
        padding: 3rem 0rem;
        cursor: pointer;
    }
    .answer{
        padding: 2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`;

export default FaqSection;