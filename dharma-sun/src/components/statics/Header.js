import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const HeaderMain=styled.div`
`;

const HeaderTop=styled.div`
    border-bottom: 1px solid lightgrey;
    background-color: #F4F7F9;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5% 0 2% 0;

    animation-name: projectsFadeIn;
    animation-duration: 1.5s;

    @keyframes projectsFadeIn {
        from {opacity: ${props => props.opacity ? "0" : "1"};}
        to {opacity: 1;}
    }

`;

const HeaderTopImg=styled.div`
    // border: 2px solid blue; 
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    justify-content: center;

    :hover {
        cursor: pointer;
    }
`

const HeaderTopContent=styled.div`
    // border: 2px solid brown;
    @media screen and (max-width: 768px) {
        display: none;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    justify-content: center;

    :hover {
        cursor: pointer;
    }

    h1 {
        font-size: 2.8rem;
        font-family: Lato, sans-serif;
        font-weight: 950;
        color: #353B3E;
        letter-spacing: 0.1rem;
    }

    h2 {
        font-size: 1.75rem;
        padding-top: 15px;
        font-family: Robato, sans-serif;
        font-weight: 400;
        color: #AAA2A2;
        justify-content: center;
        @media (max-width: 768px) {
            visibility: hidden;
         }
    }

    h4 {
        font-size: .85rem;
        padding-top: 5px;
        font-family: Robato, sans-serif;
        font-weight: 400;
        color: #AAA2A2;
        justify-content: center;
    }   
`;

const HeaderMobileTitleContent=styled.div`
    // border: 2px solid yellow;
    @media screen and (min-width: 768px) {
        display: none;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;

    :hover {
        cursor: pointer;
    }

    h1 {
        font-size: 2rem;
        font-family: Lato, sans-serif;
        font-weight: 950;
        color: #353B3E;
        letter-spacing: 0.1rem;
    }

    h2 {
        font-size: 1.35rem;
        padding-top: 15px;
        font-family: Robato, sans-serif;
        font-weight: 400;
        color: #AAA2A2;
    }

    h4 {
        font-size: .85rem;
        padding-top: 5px;
        font-family: Robato, sans-serif;
        font-weight: 400;
        color: #AAA2A2;
    }      
`

const ProfileImg=styled.img`
    border: 5px solid lightgrey;
    width: 150px;
    border-radius: 100%;
`;

const NavBarLinks=styled(Link)`
    text-decoration: none;
`;


export default class Header extends Component { 
    render() { 
        return (
            <HeaderMain>
                <HeaderTop 
                    opacity={this.props.opacity}
                    checked={this.props.checked}
                    >
                    <NavBarLinks to="/">
                        <HeaderTopImg>
                                <ProfileImg 
                                    alt="portfolio pic of Michael Boegner" 
                                    checked={this.props.checked}
                                />
                        </HeaderTopImg>
                        <HeaderTopContent>
                            <h1>C. Michael Boegner</h1>
                            <h2>Lead Technical Support Engineer | Mindfulness Meditation Teacher | Customer Service Expert</h2>
                            <h4>React | JavaScript | Python | C | MySQL | Node | HTML | CSS</h4>
                        </HeaderTopContent>
                        <HeaderMobileTitleContent>    
                            <h1>C. Michael Boegner</h1>
                            <h4>React | JavaScript | Python | C | MySQL | Node | HTML | CSS</h4>
                            <h2>Lead Technical Support Engineer</h2>
                            <h2>Mindfulness Meditation Teacher</h2>
                            <h2>Customer Service Expert</h2>
                        </HeaderMobileTitleContent>
                    </NavBarLinks>
                </HeaderTop>
            </HeaderMain>
        )
    }

}