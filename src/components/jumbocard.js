import React from 'react';
import JumboCardInfo from '../components/jumbocardinfo.js';

function JumboCard(props) {
    return (
        <div className="d-inline-block g-card" onClick={(e) => props.click(props.item)}>
            <img className="g-card-image" src={props.item.imgSrc} alt={props.item.imgSrc}/>
            { props.item.selected && <JumboCardInfo description={props.item.description}/> }
        </div>    
    )
}

export default JumboCard