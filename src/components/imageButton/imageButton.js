import React from 'react';
import { useHistory } from 'react-router-dom';
import { ImageButtonItem } from './imageButton.styles';

export default function ImageButton(props) {
  const url = useHistory();
  const { route, image, text, direction } = props;
  
  return (
    <ImageButtonItem 
      onClick={() => {url.push(route)}}
      direction={direction}
    >
      <img 
        src={image}
        alt={'food choice'}
      />
      <span>{text}</span>
    </ImageButtonItem>
  )
}