import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const FooterMain=styled.div`
    display: flex; 
    justify-content: space-between;
    font-family: Lato, sans-serif;
    font-weight: 600;
    padding: 0 25%;
    border-bottom: 2px solid lightgrey;
    border-top: 2px solid lightgrey;
    background-color: #353B3E;
    align-items: center;

    animation-name: footerFadeIn;
    animation-duration: 1.5s;

    @keyframes footerFadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
    }

    @media (min-width: 768px) and (max-width: 1024px) {
      padding: 0;
    }

    @media (max-width: 768px) {
       padding: 0;
       flex-direction: column;
       width: 100vw;
    }
`;

const Icon=styled.div`
    display: flex; 
    justify-content: space-around;
    padding: 2% 25%;
    margin: 25%;
    color: white;
    text-decoration: none;

    :hover {
        cursor: pointer;

        animation-name: footerRainbowHover;
        animation-duration: .75s; 
        animation-iteration-count:infinite;
        animation-direction: alternate-reverse;

        @keyframes footerRainbowHover {
            0% {color: #353B3E;}
            100% {color: white;}
        }
    }

    .fas {
        margin: 10px;
        font-size: 600%;
    }

    .fab {
        margin: 10px;
        font-size: 600%;
    }

    p {
        font-size: .95rem;
        display: flex;
        align-items: center;
    }

    @media (max-width: 768px) {
        border-bottom: 1px solid lightgrey;
        padding: 0 0 40% 0;
        margin: 25% 0;
    }
`;




export default class NavBar extends Component { 
    render() {
        return (
            <FooterMain>
                <Link to="/contact">
                    <Icon>
                        <i className="fas fa-envelope-square"></i>
                    </Icon>
                </Link>
                <a href="https://www.linkedin.com/in/c-michael-boegner-855a9741/" target="_blank" rel="noopener noreferrer">
                    <Icon>
                        <i className="fab fa-linkedin"></i>
                    </Icon>
                </a> 

                <a href="https://github.com/MichaelBoegner" target="_blank" rel="noopener noreferrer">
                    <Icon>
                        <i className="fab fa-github-square"></i>
                    </Icon>
                </a>
            </FooterMain>
        )
    }

}