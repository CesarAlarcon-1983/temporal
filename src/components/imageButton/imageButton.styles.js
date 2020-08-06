import styled, { css } from 'styled-components';

const ImageButtonItem = styled.a`
  display: flex;
  overflow: hidden;
  border-radius: 2vw;
  background: #000;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 85%;


  &:after{
    content: '';
    position: absolute;
    top:0 ;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,.5), transparent 60%);
    z-index: 5;
  }

  img {
    opacity:1;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    height:100%;
  }

  ${props => {
    if(props?.direction === 'vertical') {
      return css`
        img {
          width: 100%;
        }
      `;
    }
  }}
  
  span {
    position: absolute;
    font-family: 'DM Serif Display', serif;
    font-size: 4vw;
    color: #fff;
    bottom: 10%;
    left: 10%;
    z-index: 10;
  }
`;


export { ImageButtonItem };