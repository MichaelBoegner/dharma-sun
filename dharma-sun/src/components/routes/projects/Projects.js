import React, { Component } from 'react';
import ProjectCards from './ProjectCards';
import Footer from '../../statics/Footer';
import styled from 'styled-components';
import FamilyTabs from '../../../images/FamilyTabs.JPG'
import GameLife from '../../../images/GameLife.JPG';
import Seinfeld from '../../../images/Seinfeld.JPG';
import salesman from '../../../images/salesman.jpeg';
import Portfolio from '../../../images/Portfolio.JPG';
import PortfolioGame from '../../../images/PortfolioTheGame.JPG';
import DryForLoop from '../../../images/npmdryForLoop.JPG'

const ProjectsMain=styled.div`
`;

const ProjectsBottom=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    animation-name: projectsFadeIn;
    animation-duration: 1.5s;

    @keyframes projectsFadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
    }
`;

const ProjectCardsMain1=styled.div`
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

const ProjectCardsMain2=styled.div`
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

const ProjectCardsMain3=styled.div`
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

const ProjectCardsMain4=styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: top;
    padding: 3% 20%;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        padding: 10% 0;
    }
`;

const ProjectCardsMain5=styled.div`
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

const ProjectCardsCard=styled(ProjectCards)`

`;

const ProjectCardBio=styled.div`
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



export default class Projects extends Component { 
    render() { console.log("FIRING PROJECTS")
        return (
            <ProjectsMain>
                <ProjectsBottom>

                    <ProjectCardsMain1>
                        <ProjectCardsCard
                            img={Portfolio}
                        />

                        <ProjectCardBio> 
                            <h3>C. Michael Boegner</h3>
                            <p>
                                This portfolio was built from the ground up, using React and some tough love. It was deployed using Netlify. 
                            </p>

                            <a href="https://www.cmboegner.com/" target="_blank" rel="noopener noreferrer">
                                <h2>WEBSITE</h2>
                            </a>

                            <a href="https://github.com/MichaelBoegner/portfolio" target="_blank" rel="noopener noreferrer">
                                <h2>GITHUB</h2>
                            </a>
                        </ProjectCardBio>
                    </ProjectCardsMain1>

                    <ProjectCardsMain2>
                        <ProjectCardsCard
                            img={FamilyTabs}
                        />

                        <ProjectCardBio> 
                            <h3>Family Tabs</h3>
                            <p>
                                Family Tabs offers any parent a quick and 
                                easy way to organize and keep track of 
                                their family’s events. Using the site allows them
                                to manage everyone's schedules, get a day's agenda at a glance,
                                approve and manage any conflicts, as well as get notified of new
                                and/or upcoming events.
                            </p>
                            
                            <a href="https://family-tabs.netlify.com" target="_blank" rel="noopener noreferrer">
                                <h2>WEBSITE</h2>
                            </a>

                            <a href="https://github.com/Lambda-School-Labs/labs9-family-tabs" target="_blank" rel="noopener noreferrer">
                                <h2>GITHUB</h2>
                            </a>
                        </ProjectCardBio>
                    </ProjectCardsMain2>

                    <ProjectCardsMain3>
                        <ProjectCardsCard
                            img={PortfolioGame}
                        />

                        <ProjectCardBio>
                            <h3>Portfolio:The game - Beta</h3>
                            <p>
                            Built using React and Phaser3, Portfolio is an action adventure, RPG, space battle to save the universe! Well, currently, the only thing you can battle is yourself on my portfolio.
                            BUT, future releases will include a story line in which you might battle your way from one corporate planet to the next until you reach
                            Planet C-Suite, where you will have to defeat the evel Regor to save the universe!   
                            </p>

                            <a href="https://www.cmboegner.com/" target="_blank" rel="noopener noreferrer">
                                <h2>WEBSITE</h2>
                            </a>

                            <a href="https://github.com/MichaelBoegner/portfolio" target="_blank" rel="noopener noreferrer">
                                <h2>GITHUB</h2>
                            </a>
                        </ProjectCardBio>
                    </ProjectCardsMain3>
                    
                    <ProjectCardsMain2>
                        <ProjectCardsCard
                            img={GameLife}
                        />

                        <ProjectCardBio>
                            <h3>Conway's Game of Life</h3>
                            <p>
                            First created in 1970 by the British mathematician, John Horton Conway, 
                            "Conway's Game of Life" provides a platform for studying and better understanding 
                            the cellular atomaton model. The system has been widely studied throughout the years, and 
                            patterns continue to be discovered. Most notably, in 2010, Andrew J. Wade built a 
                            self-replicating structure, named Gemini, that replicates a child, which then consumes the parent, creating 
                            a perpetual set of life-cycles. 
                            </p>

                            <a href="https://michaelboegner.github.io/Conways-Life/" target="_blank" rel="noopener noreferrer">
                                <h2>WEBSITE</h2>
                            </a>

                            <a href="https://github.com/MichaelBoegner/Conways-Life/" target="_blank" rel="noopener noreferrer">
                                <h2>GITHUB</h2>
                            </a>
                        </ProjectCardBio>
                    </ProjectCardsMain2>

                    <ProjectCardsMain3>
                        <ProjectCardsCard
                            img={DryForLoop}
                        />

                        <ProjectCardBio>
                            <h3>NPM | dry-forloop</h3>
                            <p>
                            A drier version of Javascript's existing forLoop. Like forEach, but with parameters for start, operator, length, 
                            and iterator! This is an open-source project. We are accepting PRs.
                            </p>

                            <a href="https://www.npmjs.com/package/dry-forloop" target="_blank" rel="noopener noreferrer">
                                <h2>NPM</h2>
                            </a>

                            <a href="https://github.com/MichaelBoegner/dry-forloop/" target="_blank" rel="noopener noreferrer">
                                <h2>GITHUB</h2>
                            </a>
                        </ProjectCardBio>
                    </ProjectCardsMain3>

                    <ProjectCardsMain4>
                        <ProjectCardsCard
                            img={Seinfeld}
                        />

                        <ProjectCardBio> 
                            <h3>Seinfeld Your Enthusiasm</h3>
                            <p>
                            What could possibly be better than settling into all-nighter with a good 'ole MUD!? Doing it with the cast 
                            of Seinfeld and Curb Your Enthusiasm by your side! After waking up and somehow finding yourself on Jerry's couch, 
                            you soon realize that being master of your own domain isn't all it's cracked up to be. Will you be one of the few 
                            to make your way to La La Land, battle the great Larry David, and return alive. . . all for the best bowl of soup on the face of planet Earth!?
                            </p>

                            <a href="https://seinfeld-your-enthusiasm.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                                <h2>WEBSITE</h2>
                            </a>

                            <a href="https://github.com/MichaelBoegner/LambdaMUD-Project" target="_blank" rel="noopener noreferrer">
                                <h2>GITHUB</h2>
                            </a>
                        </ProjectCardBio>
                    </ProjectCardsMain4>

                    <ProjectCardsMain5>
                        <ProjectCardsCard
                            img={salesman}
                        />

                        <ProjectCardBio> 
                            <h3>Shrink Wrap the Traveling Salesman Problem</h3>
                            <p>
                            I have had a heuristic solution for the traveling salessman problem kicking around in my head for many years now.
                            This is my attempt at implementing said solution using Javascript. I understand that Javascript is not the most 
                            performant choice of language for mathematical projects, however, that's sort of the point. If my solution works,
                            then I should be able to prove it out on something even as unperformant as Javscript.
                            </p>

                            <a href="https://github.com/MichaelBoegner/salesmanArc" target="_blank" rel="noopener noreferrer">
                                <h2>GITHUB</h2>
                            </a>
                        </ProjectCardBio>
                    </ProjectCardsMain5>



                </ProjectsBottom>

                <Footer/>
            </ProjectsMain>
            
        )
    }

}