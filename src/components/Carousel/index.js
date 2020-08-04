import React, { useState } from 'react';
import ReactDom from 'react-dom';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, {SliderItem} from './components/Slider';
import Frame from './components/Frame';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function Carousel({
  ignoreFirstVideo,
  category,
}) {
  const categoryTitle = category.titulo;
  const categoryColor = category.cor;
  const categoryExtraLink = category.link_extra;
  const videos = category.videos;
  
  const [url, setUrl] = useState('');
  const [cronos, setCronos] = useState('');

  function onmouseover(url, a){
    let contador = 0;
    setCronos(setInterval(()=> {
      contador++;
      if(contador >= 3){
        setUrl(url);
      } 
    }, 1000));

  }

  function onmouseout(){
    clearInterval(cronos);
    setUrl('');
  }

  return (
    <VideoCardGroupContainer>

      {categoryTitle && (
        <>
          <Title style={{ backgroundColor: categoryColor || 'red' }}>
            {categoryTitle}
          </Title>
          {categoryExtraLink && 
            <ExtraLink href={categoryExtraLink.url} target="_blank">
              {categoryExtraLink.text}  
            </ExtraLink>
          }
        </>
      )}
      <Slider categoryColor={categoryColor}>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={categoryColor}
                onMouseOver={(a) => {
                  onmouseover(video.url, a.target)
                }}

                onMouseOut={() => {
                  onmouseout();
                }}
              >
                {/* {url &&(
                  <div>
                    <Frame youtubeID={getYouTubeId(url)}/>
                  </div>
                )} */}
              </VideoCard>
            </SliderItem>
          );
        })}
      </Slider>
      {url &&(
        <div>
          <Frame youtubeID={getYouTubeId(url)}/>
        </div>
      )}
      
    </VideoCardGroupContainer>
  );
}

export default Carousel;
