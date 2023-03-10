import React, { Component } from 'react';
import styled from 'styled-components';
import Footer from '../statics/Footer';

const ContactMain=styled.div`
`;

const ContactBottom=styled.div`
    display: flex;
    justify-content: center;
    animation-name: contactFadeIn;
    animation-duration: 1.5s;

    @keyframes contactFadeIn {
        from {opacity: 0;}
        to {opacity: 1;}
    }

    h2 {
        margin: 15px;
        font-size: 1.50rem;
        margin-bottom: 15px;
        font-family: Robato, sans-serif;
        font-weight: 600;
        color: #353B3E;
        justify-content: center;
    }

    @keyframes fadeIn {
        from {color: white;}
        to {color: #353B3E;}
    }

    @media (max-width: 768px) {
       width: 100vw;
    }
`;

const ContactForm=styled.form`

`;

const ContactInput=styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 15px;

    input {
        height: 25px;
        margin-top: 15px;
    }
`;

const ContactTextArea=styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    margin: 15px;

    textarea {
        height: 250px;
        width: 100%;
        margin-left: 15px;
    }

    @media (max-width: 768px) {
       textarea {
           width: 90%;
       }
    }
`;

const ContactSend=styled.div`
    display: flex;
    justify-content: center;
    margin: 15px;

    input {
        height: 50px;
        width: 125px;
        margin-left: 15px;
        cursor: pointer;
    }
`;


export default class Contact extends Component { 
    render() {
        return (
            <ContactMain>
                <ContactBottom>
                    <ContactForm
                        action="https://formspree.io/cmikeb@gmail.com" 
                        method="POST"
                        >
                        
                        <ContactInput>
                            <h2>Your Name:</h2>
                            <input 
                                type="text" 
                                name="name"
                            />
                        </ContactInput>

                        <ContactInput>
                            <h2>Your Email:</h2>
                            <input 
                                type="email" 
                                name="_replyto"
                            />
                        </ContactInput>

                        <ContactTextArea>
                            <h2>Let's Chat!</h2>
                            <textarea 
                                type="text" 
                                name="body"
                            />
                        </ContactTextArea>
                        
                        <ContactSend>
                            <input 
                                type="submit" 
                                value="Send"
                            />
                        </ContactSend>
                    </ContactForm>
                </ContactBottom>
                
                <Footer/>
            </ContactMain>
            
        )
    }

}