import React from 'react';
import {Display} from './styles'

export default function DisplayComp({ youtubeID }){
    return(
        <Display
            title="Titulo do Iframe"
            src={`https://www.youtube.com/embed/${youtubeID}?autoplay=0&mute=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
    )
}