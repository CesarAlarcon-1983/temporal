import styled from 'styled-components';

const NavContainer = styled.div`
  position: fixed;
  bottom: 5vw;
  left:7vw;
  display: flex;
  z-index: 10000;
  align-items: center;
`;

const BackButton = styled.a`
  display: flex;
  width: 8vw;
  height: 8vw;
  border-radius: 50%;
  background: #fff;
  justify-content: center;
  align-items: center;
  margin-right: 2vw;

  img {
    width: 60%;
  }
`;

const HomeButton = styled.a`
  display: flex;
  width: 11vw;
  height: 11vw;
  border-radius: 50%;
  background: #fff;
  justify-content: center;
  align-items: center;

  img {
    width: 60%;
  }
`;

export { NavContainer, BackButton, HomeButton };