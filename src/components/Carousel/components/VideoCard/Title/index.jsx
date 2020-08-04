import React from 'react';
import {Title} from './styles';

export default function TitleComp(props){
    return (
        <Title color={props.color}>
            {props.children}
        </Title>
    )
}