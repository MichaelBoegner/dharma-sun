import React, { Component } from 'react';
import ProjectCards from '../projects/ProjectCards';
import Footer from '../statics/Footer';
import styled from 'styled-components';
import Resume from '../../images/Resume.JPG';


const ResumeMain=styled.div`
`;

const ResumeBottom=styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    animation-name: resumeFadeIn;
    animation-duration: 1.5s;

    @keyframes resumeFadeIn {
            from {opacity: 0;}
            to {opacity: 1;}
    }
`;

const ResumeCardsMain1=styled.div`
    display: flex;
    justify-content: center;
    padding: 3% 20%;
    border-bottom: 1px solid lightgrey;
`;

const ResumeCardsCard=styled(ProjectCards)`

`;


export default class Resume extends Component { 
    constructor(){
        super();
    }

    render() {
        return (
            <ResumeMain>
                <ResumeBottom>

                    <ResumeCardsMain1>
                        <ResumeCardsCard
                            img={Resume}
                        />
                    </ResumeCardsMain1>

                </ResumeBottom>
                
                <Footer/>
            </ResumeMain>
            
        )
    }

}