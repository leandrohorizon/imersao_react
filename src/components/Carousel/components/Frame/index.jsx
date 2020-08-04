import {Frame} from './style';
import React from 'react';

export default function FrameComp({youtubeID}){
    return(
        <Frame>
            <iframe
            title="Titulo do Iframe"
            src={`https://www.youtube.com/embed/${youtubeID}?autoplay=1&mute=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            />
        </Frame>
    )
}