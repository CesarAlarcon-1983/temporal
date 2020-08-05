import styled from 'styled-components';

const ImageButton = styled.a`
  display: block;
  overflow: hidden;
  border-radius: 2vw;
  background: #000;
  position: relative;
  width: 65%;
  height: 0;
  padding-bottom: 50%;

  &:after{
    content: '';
    position: absolute;
    top:0 ;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,.9), transparent 50%);
    z-index: 5;
  }

  img {
    opacity:1;
    width: 100%;
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
  width: 100%;
  margin: 0;
  padding: 0;

  li {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vw;
  }
`;

const SectionTitle = styled.h1`
  font-size: 8vw;
  margin: 0 0 10vw;
`;

export { ImageButton, ButtonList, SectionTitle };