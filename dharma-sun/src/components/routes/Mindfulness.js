import React, { Component } from 'react';
import styled from 'styled-components';
import Footer from '../statics/Footer';
import companyLogo from '../../assets/DharmaSunShrunk.png'

const MindfulnessMain=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    animation-name: backgroundBreathe;
    animation: backgroundBreathe 240s ease infinite;

    @keyframes backgroundBreathe {
        0% {background: white;}
        50% {background: #87CEEB;}
        100% {background: white;}
    }
`;

const MindfulnessBottom=styled.div`
    border: 1px solid darkgrey;
    width: 75%;
    margin: 5%; 
    padding-bottom: 3%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    animation-name: contactFadeIn;


    @keyframes contactFadeIn {
        from {opacity: 0;}
        to {opacity: 1;}
    }

    h1 {
        font-size: 1.25rem;
        font-family: Robato, sans-serif;
        font-weight: 450;
        color: #353B3E;
        justify-content: center;
    }

    h2 {
        margin: 2px 15px 10px 15px;
        font-size: 1.50rem;
        font-family: Robato, sans-serif;
        font-weight: 400;
        color: #353B3E;
        justify-content: center;
    }

    h3 {
        margin-top: 55px;
        font-size: 1.05rem;
        margin-bottom: 5px;
        font-family: Robato, sans-serif;
        font-weight: 300;
        color: #353B3E;
        justify-content: center;
    }

    h4 {
        margin: 5% 10% 5% 10%:
        padding: 10%;
        font-size: 1.15rem;
        font-family: Robato, sans-serif;
        font-weight: 300;
        color: #353B3E;
        justify-content: center;

        text-align: justify;
        text-justify: inter-word;
    }

    h5 {
        padding: 1% 0% 0% 5%;
        font-size: 1.15rem;
        font-family: Robato, sans-serif;
        font-weight: 300;
        color: #353B3E;
        justify-content: center;
    }

    p {
        margin: 2px 15px 10px 0px;
        font-size: 1.05rem;
        font-family: Robato, sans-serif;
        font-weight: 340;
        color: #353B3E;
        justify-content: center;

        text-align: justify;
        text-justify: inter-word;
    }

    @media only screen and (max-width: 420px) {
        img {
            width: 97%;
        }
      }

    @keyframes fadeIn {
        from {color: white;}
        to {color: #353B3E;}
    }

    @media (max-width: 768px) {
       width: 100vw;
    }
`;

const MindfulnessLogo=styled.div`
    display: flex;
    justify-content: center;
    margin: 3% 2% 5% 2%;
`;

const MindfulnessQuote=styled.div`
    margin-left: 15%;
    margin-right: 15%;
    margin-bottom: 2%;
`;

const MindfulnessAbout=styled.div`
    margin: 2%;
`;

const MindfulnessForm=styled.form`
    border-top: 1px solid darkgrey;
    margin-top: 35px;
    padding-top: 25px;
`;

const MindfulnessInput=styled.div`
    display: flex;
    justify-content: left;
    align-items: flex-start;
    margin: 2px 15px 2px 15px;

    input {
        height: 25px;
    }
`;

const MindfulnessTextArea=styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    margin: 2px 15px 10px 15px;

    textarea {
        height: 250px;
        width: 90%;
        margin-left: 15px;
    }

    @media (max-width: 768px) {
       textarea {
           width: 90%;
       }
    }
`;

const MindfulnessSend=styled.div`
    display: flex;
    justify-content: center;
    margin: 2% 2% 5% 2%;
    border-bottom: 1px solid darkgray;
    padding-bottom: 2%;

    input {
        height: 50px;
        width: 125px;
        margin-left: 15px;
        cursor: pointer;
    }
`;


export default class Mindfulness extends Component { 
    render() {
        return (
            <MindfulnessMain>
                <MindfulnessBottom>
                    <MindfulnessLogo>
                        <img src={companyLogo} alt='company logo'></img>
                    </MindfulnessLogo>
                    <MindfulnessQuote>
                        <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Being satisfied with what we already have is a magical golden key to being alive in a full,
                            unrestricted, and inspired way. One of the major obstacles to what is traditionally called enlightenment is
                            resentment, feeling cheated, holding a grudge about who you are, where you are, what you are. This is why we talk so much about making friends with 
                            ourselves, because, for some reason or other, we don't feel that kind of satisfaction in a full and complete way. Meditation
                            is a process of lightening up, of trusting the basic goodness of what we have and who we are, and of realizing that any wisdom
                            that exists, exists in what we already have. Test"
                        </h4>
                        <h5>- The Wisdom of No Escape, by Pema Ch&#246;dr&#246;n</h5>
                    </MindfulnessQuote>
                    <MindfulnessAbout>
                        <h1>Welcome Friends!</h1>
                        <p>Thank you so much for taking the time to learn more about Mindfulness Meditation and the program I have to offer you here at Dharma Sun, a school for Mindfulness Meditation.</p>
                        <p>The below should clarify most of the common questions. However, if it looks like too much information for you at this time or doesn't address your needs, feel free to skip it, scroll to the form below, and fill it out with your information. 
                           I’ll be happy to contact you by phone or email to discuss further. Thanks!</p> 

                        <h1>Background</h1>
                        <p>I am the founder of Dharma Sun, hold a Master’s in Public Health and am certified as a Mindfulness Meditation teacher from the Dharma Moon and Tibet House’s 100 hour Mindfulness Meditation Teacher Training program. 
                            Additionally, I maintain a daily practice of sitting at least once a day and have been studying Buddhism for over a decade.</p> 

                        <h1>Who Should Learn Mindfulness Meditation?</h1>
                        <p>In short, everyone and anyone. Mindfulness Meditation will help you become more focused, clear, and equanimous as you go through your life on a day to day basis. Even if you feel you already have a good grasp on things in general, 
                           there are always improvements to be made and benefits to be gained.</p> 

                        <h1>Why Mindfulness Meditation?</h1>
                        <p>Mindfulness Meditation is a well trodden, 2,000 year old practice/path that millions of people have already benefited from. That means you don’t need to worry about whether or not it’s going to work. If practiced as the lineage prescribes, 
                           you will undoubtedly see improvements in your ability to maintain focus and awareness, increased creativity and serenity, as well as an overall stabilizing of your mindset and emotions.</p> 

                        <h1>What Am I Offering?</h1>
                        <p>I offer private and group/corporate classes that will give you the tools of Mindfulness and Awareness and show you how to use them to the best of your ability to build a daily Mindfulness Meditation practice. You can think of me as something 
                           akin to a travel guide in a strange or foreign land. I’m here simply to show you the way around and make sure you get the best experience possible with the time you have.</p> 

                        <h1>What Do You Need to Get Started?</h1>
                        <p>One of the great things about Mindfulness Meditation is that you do not need much at all to get going. The sitting process requires common household items everyone has. So, really, you just need yourself, the desire to learn, and about 20 minutes a day for at least five days a week.</p>
                        <p>This time commitment may sound daunting to some at first, but I can assure you that if you couple it with a daily routine you already perform, like taking a shower or brushing your teeth, you will find that you can seamlessly work it into your day AND you actually get back that 20 minutes and more, 
                           as a result of your increased effectiveness of your thought processes and emotions. It's also worth pointing out that you don't think twice about taking 20 minutes a day or more for physical hygiene or exercise. 
                           You can think of Mindfulness Meditation as your daily mental hygiene practice, something like brushing your teeth, except in this case, we're getting in the habit of brushing our minds daily. And what could be more important than keeping your mind in shape and clean?</p>
                        

                        <h1>How Much Does It Cost?</h1>
                        <p>Mindfulness Meditation is a little bit like learning to play an instrument. You can’t expect to pick it up and be Mozart or Jimi Hendrix after your first practice session.</p> 
                        <p>As a result, I recommend everyone starts with the 5 class package, which should be enough to teach you how to practice on your own without me for the rest of your life. Of course, I’m always happy to help you further down the road, as needed, but my ultimate goal here is to teach you how to fish on 
                           your own and then leave you be, with a tummy full of fishes and the confidence to go get more fish whenever you want!</p>
                        
                        <h1>What Does a Typical Class Consist Of?</h1>
                        <p>Classes are an hour each and generally consist of a 5-10 minute intro, 20 minute mindfulness session, where we sit together and practice, and 30 minutes discussing the week’s assigned readings and answering any questions you have about the practice. If you’re thinking, “Homework!? Ugh!”, don’t worry! The readings I’ve picked out are short, fun, and very profound! I’m also happy to customize that portion of the class according to your current abilities and time availability.</p>
                        <p>While I am able to offer in person classes, depending on your location, it may be easier to do things over video chat using Google Meets. I will, of course, help you get familiar with Google Meets as well if you have not used it in the past. It’s usually as easy as clicking a link though.</p>

                        <h1>Menu of Offerings</h1>
                        <p>One-On-One Single Hour Class: Donate whatever you feel is fair</p> 
                        <p>One-On-One 5 Class Package: Donate whatever you feel is fair</p> 
                        <p>Group or Corporate: Contact me to discuss!</p>
                        
                        <h1>Sign Up Now!</h1>
                        <p>Kindly fill out the short form below, and I will contact you as soon as I can to arrange our first session. I look forward to helping you give yourself the greatest gift - the ability to make friends with yourself and the world.</p>
                    </MindfulnessAbout>
                    <MindfulnessForm
                        action="https://formspree.io/cmikeb@gmail.com" 
                        method="POST"
                        >
                        
                        <MindfulnessInput>
                            <h2>First Name:</h2>
                            <input 
                                type="text" 
                                name="firstName"
                                placeholder='John Jacob'
                            />
                        </MindfulnessInput>

                        <MindfulnessInput>
                            <h2>Last Name:</h2>
                            <input 
                                type="text" 
                                name="LastName"
                                placeholder='Jingleheimer Schmidt'
                            />
                        </MindfulnessInput>

                        <MindfulnessInput>
                            <h2>Email:</h2>
                            <input 
                                type="email" 
                                name="_replyto"
                                placeholder='example@email.com'
                            />
                        </MindfulnessInput>

                        <MindfulnessInput>
                            <h2>Phone:</h2>
                            <input 
                                type="telephone" 
                                name="telephone"
                                placeholder="(555)555-5555"
                            />
                        </MindfulnessInput>

                        <MindfulnessTextArea>
                            <h2>Anything Else You Want Me To Know:</h2>
                            <textarea 
                                type="text" 
                                name="body"
                            />
                        </MindfulnessTextArea>
                        
                        <MindfulnessSend>
                            <input 
                                type="submit" 
                                value="Send"
                            />
                        </MindfulnessSend>
                    </MindfulnessForm>
                    <MindfulnessQuote>
                        <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"But, there must be some sense of discipline, if we are to get beyond the frivolity of trying to replace boredom. 
                            That is why we work with the breath as our practice of meditation. Simply relating with the breath is very monotonous and unadventurous. 
                            We do not discover that the third eye is opening, or that chakras are unfolding. It is like a stone carved buddha sitting in the desert. Nothing, absolutely nothing happens.</h4> 
                        <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As we realize that nothing is happening, strangely, we begin to realize that something dignified is happening. There is no room for frivolity, no room for speed. We just breathe and are there. 
                            There is something very satisfying and wholesome about it. It is as though we had eaten a good meal and were satisfied with it, in contrast to eating and trying to satisfy one’s self. 
                            It is a very simple minded approach to sanity."</h4>

                        <h5>- The Myth of Freedom and the Way of Meditation, by Ch&#246;gyam Trungpa</h5>
                    </MindfulnessQuote>
                </MindfulnessBottom>
                
                <Footer/>
            </MindfulnessMain>
            
        )
    }

}