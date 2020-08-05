import styled from 'styled-components';

const ImageButton = styled.a`
  display: flex;
  overflow: hidden;
  border-radius: 2vw;
  background: #000;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 90%;
  height: 0;
  padding-bottom: 75%;

  &:after{
    content: '';
    position: absolute;
    top:0 ;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,.8), transparent 60%);
    z-index: 5;
  }

  img {
    opacity:1;
    height: 100%;
    position: absolute;
    top:0;
    left:0;
    z-index: 1;
  }

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


const ButtonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;

  li {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5vw;

    &:first-child,
    &:nth-child(5) {
      img {
        height: auto;
        width: 100%;
        top: auto;
        bottom: 0%;
      }
    }
  }
`;

const SectionTitle = styled.h1`
  font-size: 7.5vw;
  margin: 0 0 10vw;
`;

export { ImageButton, ButtonList, SectionTitle };