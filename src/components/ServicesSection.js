import React from 'react';
// import icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png'
// styles
import { About, Description, Image } from '../styles';
import styled from 'styled-components';
import { useScroll } from './useScroll';
import { scrollReveal } from '../animation';

const ServicesSection = () => {
    const [element, controls] = useScroll();
    return (
        <Services variants={scrollReveal} animate={controls} intitial='hidden' ref={element}>
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>Fast returns on your projects.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="team" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Perfection through collaboration.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm" />
                            <h3>Quality</h3>
                        </div>
                        <p>We use the best equipment available.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="money"
                            />
                            <h3>Affordable</h3>
                        </div>
                        <p>We are the best deal in town!</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="home2" />
            </Image>
        </Services>
    );
};

const Services = styled(About)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;