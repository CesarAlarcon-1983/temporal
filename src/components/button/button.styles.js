import styled, { css } from 'styled-components';
import match from '../utils/match';

const buttonColor = '#A50238';
const buttonColorDark = '#7Ea1a4';

const buttonOutline = css`
  background: transparent;
  border: 2px solid ${buttonColor};
  color: ${buttonColor};

  svg {
    fill: ${buttonColor};
  }
`;

const buttonGhost = css`
  background: transparent;
  border: 2px solid transparent;
  color: ${buttonColor};

  svg {
    fill: ${buttonColor};
  }

  &:hover {
    box-shadow: none;
    transform: translate3d(0, 0, 0);
    background: rgba(0,0,0,.05);
    color: ${buttonColorDark};
  }
`;

const buttonFilled = css`
  background: ${buttonColor};
  border: 2px solid ${buttonColor};
  color: #fff;

  svg {
    fill: #fff;
  }
`;

const buttonSm = css`
  padding: 6px 10px;
  font-size: 14px;
  min-width: 60px;
`;

const buttonMd = css`
  padding: 3vw 6vw;
  font-size: 3.5vw;
  border-radius: 5vw;
`;

const buttonLg = css`
  padding: 15px 24px;
  font-size: 18px;
`;

const Button = styled.button`
  text-align: center;
  text-decoration: none;
  margin: 4px 2px;
  cursor: pointer;
  transition: all 0.4s ease;
  box-shadow: 0 0 0 0 rgba(0,0,0,0);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  text-transform: uppercase;

  i {
    margin-right: 10px;
  }

  &:hover {
    box-shadow: 3px 3px 10px 0 rgba(0,0,0,.15);
  }

  ${props => {
    const { mode } = props;
    const buttonStyles = (
      match(mode)
        .on(val => val === 'outline', () => buttonOutline)
        .on(val => val === 'ghost', () => buttonGhost)
        .otherwise(() => buttonFilled)
    );

    return buttonStyles;
  }}

  ${props => {
    const { size } = props;
    const buttonSize = (
      match(size)
        .on(val => val === 'sm', () => buttonSm)
        .on(val => val === 'md', () => buttonMd)
        .on(val => val === 'lg', () => buttonLg)
        .otherwise(() => buttonMd)
    );

    return buttonSize;
  }}

  &:disabled {
    pointer-events: none;
    opacity: .5;
    filter: grayscale(100%);
  }
`;

export { Button };
