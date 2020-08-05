import React from 'react';
import { useHistory } from 'react-router-dom';
import { ImageButtonItem } from './imageButton.styles';

export default function ImageButton(props) {
  const url = useHistory();
  const { route, image, text } = props;
  console.log('url', url);
  console.log('props', props);
  return (
    <ImageButtonItem onClick={() => {url.push(route)}}>
      <img src={image} alt={'food choice'} />
      <span>{text}</span>
    </ImageButtonItem>
  )
}