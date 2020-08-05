import styled from 'styled-components';

const ButtonList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  justify-content: space-between;

  li {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 12vw;

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
  margin: 5vw 0 25vw;
`;

export { ButtonList, SectionTitle };