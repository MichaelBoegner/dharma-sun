import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'; 
// import PopupLanding from './PopupLanding';


const LandingMain=styled.div`
    padding: 2% 35%;

    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;
        padding: 10% 2%;
    }
`;

const LandingBottom=styled.div`
    display: flex;
    animation-name: fadeIn;
    animation-duration: 1.5s;

    h3 {
        font-size: 1.50rem;
        margin-bottom: 15px;
        font-family: Robato, sans-serif;
        font-weight: 600;
        color: #353B3E;
        justify-content: center;
        animation-name: fadeIn;
        animation-duration: 1.5s;

        @keyframes fadeIn {
            from {color: white;}
            to {color: #353B3E;}
        }
    }

    @media (max-width: 1024px) {
        display: flex;
        flex-direction: column;

        h3 {
            display: flex;
            align-items: center;
        }
    }
`;

const LandingBottomContentLeft=styled.div`
    width: 75%;
    margin-right: 5%; 

    p {
        font-size: .95rem;
        font-family: Merriweather, sans-serif;
        line-height: 1.75;
        font-weight: 100;
        letter-spacing: 0.025rem;
        margin-bottom: 5%;
        text-align: justify;
        text-justify: inter-word;
    }

    a {
        text-decoration: none;
        animation-name: fadeIn;
        animation-duration: 1.5s;

        @keyframes fadeIn {
            from {color: white;}
            to {color: #353B3E;}
        }
    }

    @media (max-width: 1024px) {
        padding: 0 5%;;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

const LandingBottomContentRight=styled.div`
    width: 25%;

    a {
        text-decoration: none;
        color: black;
    }

    @media (max-width: 1024px) {
        padding: 0;
        width: 100%;
        margin: 5% 0 0 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const LandingBottomContentRightTop=styled.div`

`;

const LandingBottomContentRightBottom=styled.div`
    @media (max-width: 1024px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
`;

const Icon=styled.div`
    display: flex; 
    text-decoration: none;
    animation-name: fadeIn;
    animation-duration: 1.5s;

    @keyframes fadeIn {
        from {color: white;}
        to {color: #353B3E;}
    }

    :hover {
        color: #19698F;
        cursor: pointer;
    }

    .fas {
        margin: 10px;
        font-size: 200%;
    }

    .fab {
        margin: 10px;
        font-size: 200%;
    }

    p {
        font-size: .95rem;
        display: flex;
        align-items: center;
    }

    @media (max-width: 1024px) {
        display: flex;
        flex-direction: row;

        p {
            display: none;
        }

        .fas {
            margin: 10px;
            font-size: 400%;
            display: flex;
            flex-direction: row;
        }

        .fab {
            margin: 10px;
            font-size: 400%;
            display: flex;
            flex-direction: row;
        }
    }
`;




export default class Landing extends Component {

    componentDidMount() {
        console.log("WINDOW", window)
    }

    render() { console.log("state", this.props)
    
        return (
            <LandingMain>
                
                {/* <PopupLanding
                    toggleForm={this.props.toggleForm}
                    formToggled={this.props.formToggled}
                    userArrived={this.props.userArrived}
                    mobile={this.props.mobile}
                /> */}
                <LandingBottom>
                    <LandingBottomContentLeft>
                        <h3 >About me</h3>
                        
                        <p> I have 13 years in the corporate space, with customer service, both externally and internally, taking the forefront of the majority of those years. 
                            I compulsively deliver top performance and affability, no matter the obstacles that stand before me. I am known for being a reliable and consistent 
                            source of assistance to my colleagues and customers, and since shifting into the world of software engineering, I have been able to gain a reputation 
                            as a top troubleshooter and problem solver. 
                        </p>
                        <p> Additionally, I recently founded Dharma Sun, a school for Mindfulness meditation. I am certified to teach mindfulness by Tibet House and Dharma Moon’s 
                            100 hour mindfulness meditation teacher training program. I would like to help to deliver mindfulness classes to the corporate world and, ultimately, 
                            bring leaders to the table to discuss how we can provide a more morally sensitive approach to profit in the business world, having experienced the inhumane downsides 
                            myself that can occur without a careful and mindful approach. I also want to simply share the gift of having a daily Mindfulness meditation practice with as many people as I can.                        
                        </p>
                    </LandingBottomContentLeft>
                        

                    <LandingBottomContentRight>
                        
                        <LandingBottomContentRightTop>
                            <h3>Contact</h3>
                        </LandingBottomContentRightTop>
                            
                        <LandingBottomContentRightBottom>
                            <Link to="/contact">
                                <Icon>
                                    <i className="fas fa-envelope-square"></i><p>Email</p>
                                </Icon>
                            </Link>
                            <a href="https://www.linkedin.com/in/c-michael-boegner-855a9741/" target="_blank" rel="noopener noreferrer">
                                <Icon>
                                    <i className="fab fa-linkedin"></i><p>LinkedIn</p>
                                </Icon>
                            </a> 

                            <a href="https://github.com/MichaelBoegner" target="_blank" rel="noopener noreferrer">
                                <Icon>
                                    <i className="fab fa-github-square"></i><p>GitHub</p>
                                </Icon>
                            </a>
                        </LandingBottomContentRightBottom>
                    </LandingBottomContentRight>
                </LandingBottom>
            </LandingMain>
        )
    }

}