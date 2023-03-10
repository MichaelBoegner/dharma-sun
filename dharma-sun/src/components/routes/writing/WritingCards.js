import React from 'react';
import styled from 'styled-components';

const WritingCardsMain=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 50%;
    box-shadow: 2px 2px 5px;
    border: 1px solid lightslategray;
`;

const WritingCardsImg=styled.img`
    width: 100%;
    height: 100%;
`;

const WritingCardsGit=styled.a`

`;

const WritingCardsSite=styled.a`

`;

export default function WritingCards (props) {
    return (
        <WritingCardsMain>
            <WritingCardsImg src={props.img} alt="image of a blog entry"></WritingCardsImg>
            <WritingCardsGit href={props.git}></WritingCardsGit>
            <WritingCardsSite href={props.site}></WritingCardsSite>
        </WritingCardsMain>
    )
}