import styled from 'styled-components';

const mainColor = '#A50238';

const TextContainer = styled.div`
  text-align: center;
  margin-bottom: 70vw;
  padding: 0 5vw;
  position: relative;
  top: 10vw;

  p {
    margin: 0;
    font-weight: 400;
    font-size: 4vw;
    color: #212121;
  }

  h1 {
    margin: 3vw 0;
    font-size: 8vw;
    color: ${mainColor};
  }
`;

const ActionsContainer = styled.div`
  text-align: center;

  a {
    margin-bottom: 3vw;
    min-width: 45vw;
  }
`;

export {
  TextContainer,
  ActionsContainer
};