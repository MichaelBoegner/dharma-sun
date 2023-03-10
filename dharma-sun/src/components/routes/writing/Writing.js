import React, { Component } from 'react';
import WritingCards from './WritingCards';
import Footer from '../../statics/Footer';
import styled from 'styled-components';
import AbsoluteBeginners from '../../../images/AbsoluteBeginners.JPG';
import LearningTimeLine from  '../../../assets/NewLanguageTimeLine.PNG';


const WritingMain=styled.div`
    a {
        text-decoration: none;
        color: black;
    }
`;

const WritingBottom=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    animation-name: writingFadeIn;
    animation-duration: 1.5s;

    @keyframes writingFadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
    }
`;

const WritingCardsMain1=styled.div`
    display: flex;
    align-items: top;
    padding: 3% 20%;
    border-bottom: 1px solid lightgrey;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        padding: 10% 0;
    }
`;

const WritingCardsMain2=styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: top;
    padding: 3% 20%;
    border-bottom: 1px solid lightgrey;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        padding: 10% 0;
    }
`;

const WritingCardsCard=styled(WritingCards)`
`;

const WritingCardBio=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 25px; 
    width: 70%;
    margin: 0 5%;
    font-family: Lato, sans-serif;
    font-weight: 600;

    h3 {
        font-size: 1.5rem;
        margin-bottom: 15px;
        font-family: Robato, sans-serif;
        font-weight: 600;
        color: #353B3E;
        justify-content: center;
    }

    h2 {
        font-size: 1.75rem;
        padding-top: 15px;
        font-family: Robato, sans-serif;
        font-weight: 400;
        color: #AAA2A2;
        justify-content: center;

        :hover {
            animation-name: fadeIn;
            animation-duration: .5s;
            animation-fill-mode: forwards; 

            @keyframes fadeIn {
                from {color: #AAA2A2;}
                to {color: #353B3E;}
            }
        }
    }

    p {
        font-size: .95rem;
        font-family: Merriweather, sans-serif;
        line-height: 1.75;
        font-weight: 100;
        letter-spacing: 0.025rem;
        margin: 25px 0;
    }

    a {
        text-decoration: none;
    }

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        padding: 0;
        margin: 0;
        width: 90%;

        h3 {
            font-size: 1.25rem;
            padding: 15% 0 0 0;
        }

        h2 {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        p {
            margin: 0;
            padding: 0 0 5% 0;
        }
    }
`;


export default class Writing extends Component { 
    render() {
        return (
            <WritingMain>
                <WritingBottom>

                    <WritingCardsMain1>

                            <WritingCardsCard
                                img={AbsoluteBeginners}
                            />

                        <WritingCardBio> 
                            <a href="https://medium.com/@michaelboegner/debugging-for-absolute-beginners-87bc0fbb0151" target="_blank" rel="noopener noreferrer">
                                <h3>Debugging for Absolute Beginners</h3>
                                <p>
                                Debugging is a critical component skill for coding that seems to get overlooked. With that in mind, here are the 5 basic steps you should take anytime you find yourself with a broken piece of code. Follow them, and avoid becoming just another one of those weird whistle-spitters.
                                </p>
                            </a>
                        </WritingCardBio>
                    </WritingCardsMain1>

                    <WritingCardsMain2>

                            <WritingCardsCard
                                img={LearningTimeLine}
                            />

                        <WritingCardBio> 
                            <a href="https://medium.com/@michaelboegner/how-to-learn-a-new-framework-language-quickly-785ec28c7747" target="_blank" rel="noopener noreferrer">
                                <h3>How to Learn a New Framework/Language Quickly</h3>
                                <p>
                                The more you learn new frameworks/languages, the more you will understand this to be a predictable part of your experience, and the more you will consequently be able to relax into the process, which will increase the slope of your learning rate. In short, chill out, and you’ll learn more, faster.
                                </p>
                            </a>
                        </WritingCardBio>
                    </WritingCardsMain2>
                </WritingBottom>

                <Footer/>
            </WritingMain>
            
        )
    }

}