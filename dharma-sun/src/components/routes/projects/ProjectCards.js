import React from 'react';
import styled from 'styled-components';

const ProjectCardsMain=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 50%;
    box-shadow: 2px 2px 5px;
    border: 1px solid lightslategray;
`;

const ProjectCardsImg=styled.img`
    width: 100%;
    height: 100%;
`;

const ProjectCardsGit=styled.a`

`;

const ProjectCardsSite=styled.a`

`;

export default function ProjectCards (props) {
    return (
        <ProjectCardsMain>
            <ProjectCardsImg src={props.img} alt="image of a project"></ProjectCardsImg>
            <ProjectCardsGit href={props.git}></ProjectCardsGit>
            <ProjectCardsSite href={props.site}></ProjectCardsSite>
        </ProjectCardsMain>
    )
}