import React from 'react';
import styled from 'styled-components';
import { About } from '../styles';
import Toggle from './Toggle';
import { AnimateSharedLayout } from 'framer-motion';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const FaqSection = () => {
    const [element, controls] = useScroll();
    return (
        <Faq variants={scrollReveal} ref={element} animate={controls} initial='hidden'>
            <AnimateSharedLayout>
                <h2>Any Questions? <span>FAQ</span></h2>
                <Toggle title="How do I start?">
                    <div className="answer">
                        <p>Head to our contact page</p>
                        <p>Get in touch via phone, email, or social media!</p>
                    </div>
                </Toggle>
                <Toggle title='How much are your services?'>
                    <div className="answer">
                        <p>We have payment plans that work for anybody.</p>
                        <p>Please contact us for more pricing information.</p>
                    </div>
                </Toggle>
                <Toggle title='How far out should I schedule you?'>
                    <div className="answer">
                        <p>We are usually pretty busy.</p>
                        <p>So try to book as soon as you know when you'll require our services.</p>
                    </div>
                </Toggle>
                <Toggle title='What Do You Have To Offer?'>
                    <div className="answer">
                        <p>We do it all!</p>
                        <p>Photos or Videos for any occasion!</p>
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
        background: #ccc;
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