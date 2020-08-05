import styled from 'styled-components';

const IntroContent = styled.div`
  text-align: center;
  position: relative;

  &:after,
  &:before {
    content: '';
    height: 20vw;
    width: 4px;
    background: #fff;
    position: absolute;
    left: calc(50% - 4px);
  }

  &:before{
    bottom: 120%;
  }

  &:after{
    top: 120%;
  }

  p {
    margin: 0;
    font-weight: 400;
    font-size: 4vw;
  }

  h1 {
    margin: 3vw 0;
    font-size: 9vw;
  }
`;

export { IntroContent };