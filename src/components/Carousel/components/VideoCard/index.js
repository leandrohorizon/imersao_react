import React, { useState } from 'react';
import { VideoCardContainer } from './styles';
import Iframe from '../../../Iframe'
import Title from './Title';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}


function VideoCard({ videoTitle, videoURL, categoryColor, onMouseOver, onMouseOut, children }) {
  const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;

  const [ddisplay, setDisplay] = useState('none');

  return (
    <>
    <div>
    </div>
    <VideoCardContainer
      url={image}
      href={videoURL}
      target="_blank"
      // style={{ borderColor: categoryColor || 'red' }}
      title={videoTitle}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      >
      {children}
      
      <Title color={categoryColor}>{videoTitle}</Title>
    </VideoCardContainer>
    </>
  );
}

function previewVideo(element){
  console.log(element.target);
}

export default VideoCard;
