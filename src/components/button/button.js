import React from 'react';
import { Button } from './button.styles';

const ButtonComponent = (props) => {
  const { onClick, label, mode, href, target, size, type, disabled } = props;

  const children = (
    <React.Fragment>
      {
        <span>{label}</span>
      }
    </React.Fragment>
  );

  if (href) {
    return (
      <Button
        as={'a'}
        mode={type === 'search-icon' ? 'ghost' : mode}
        href={href}
        target={target}
        size={size}
        disabled={disabled}
      >
        {children}
      </Button>
    );
  } else {
    return (
      <Button
        mode={type === 'search-icon' ? 'ghost' : mode}
        onClick={onClick}
        size={size}
        disabled={disabled}
      >
        {children}
      </Button>
    );
  }
};

export default ButtonComponent;