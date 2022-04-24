
import React from 'react';
import ReactDOM from 'react-dom/client';
import './Catagories.scss';

export default function Catagories(props){
    let tags = props.tags;
    console.log(tags);
    return(
        <div className="catagories flex-wrap d-flex justify-content-around">
            {tags.map(function(tag,i){
                return (
                <a href="# " className="tag button border-only" id={`tag${i}`}>{tag}</a>
                )}
            )}
        </div>
    )
}