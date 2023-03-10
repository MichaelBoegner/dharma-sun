import React, {Component} from 'react';
import styled from 'styled-components';

const StyledAlertWrapper = styled.div`
  height: 100%;
  z-index: 3001;
  width: 100vw;
  background: #00000080;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: scroll;
  display: ${props => !props.formToggled && props.userArrived && !props.mobile && !window.sessionStorage.alerted ? null : 'none'};
  animation-name: fadeInPopUp;
  animation-duration: 1.5s;

    @keyframes fadeInPopUp {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

  .alert {
    width: 475px;
    display: flex; 
    flex-direction: column;
    font-family: Lato, sans-serif;
    font-weight: 600;
    border: 2px solid lightgrey;
    background-color: #353B3E; 
    align-items: center;
    overflow: auto;
    padding: 25px;

    h2 {
      font-family: Lato, sans-serif;
      font-size: 22px;
      color: white;
      line-height:1.5;
      letter-spacing: 0.075rem;
    }

    .div {
      width: 20%;
      border: 1px solid lightgray;
      margin: 25px 0 0 0;
    }
  }
`;

const Button=styled.div `
    text-decoration: none;
    color: white;
    font-size: 1rem;
    letter-spacing: 0.25rem;
    padding: 10px 20px;
    margin: 15px 0 0 0;
    border: 2px solid lightgrey;

    :hover {
        background-color: lightgray;
        cursor: pointer;

        animation-name: rainbowHover;
        animation-duration: 1.25s; 
        animation-iteration-count:infinite;
        animation-direction: alternate-reverse;

        @keyframes rainbowHover {
            0% {color: lightgrey;}
            100% {color: #353B3E;}
        }
    }
`;
  


export default class PopupLanding extends Component {
    constructor(props){
      super(props);
    }
    
    render() {console.log("popup state", this.props)
        return (
        <StyledAlertWrapper
            formToggled={this.props.formToggled}
            userArrived={this.props.userArrived}
            mobile={this.props.mobile}
        >
          <div className='alert'>
            <h2>
              Hey, look at that fun switch up there!
            </h2>
            <h2>  
              I wonder what it does . . . 
            </h2>
            <div className='button-box'>
                <Button 
                    onClick={this.props.toggleForm}
                    >^_^
                </Button>
            </div>
            </div>
        </StyledAlertWrapper>
        )
    }
} 